import { Request, Response } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { BUCKET_NAME, minioS3Client } from '../../../services/storage/storage.minio.config';



//*******************************************************************************/
//---------------------------------  create class   ------------------------------/
//*******************************************************************************/
export const create_class = async (req: any, res: Response) => {
  const { name, subjectCode, instructorName, startTime, endTime, room, weekday } = req.body;
  const { routineId } = req.params;

  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Create the class
      const createdClass = await prisma.class.create({
        data: {
          name,
          subjectCode,
          instructorName,
          routineId,
        },
      });

      // Create associated weekday
      const createdWeekday = await prisma.weekday.create({
        data: {
          class: {
            connect: { id: createdClass.id }, // Connect to the created class
          },
          routine: {
            connect: { id: routineId }, // Connect to the routine
          },
          Day: weekday, // Enum or string for the day
          room,
          startTime,
          endTime,
        },
      });

      return { createdClass, createdWeekday };
    });

    // Respond with the created class and weekday
    return res.status(201).json({
      message: "Class and weekday created successfully",
      class: result.createdClass,
      weekday: result.createdWeekday,
    });
  } catch (error: any) {
    console.error({ message: "Error creating class and weekday", error });
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


//*******************************************************************************/
//----------------------------Add weekday to class ------------------------------/
//*******************************************************************************/

export const addWeekday = async (req: Request, res: Response) => {
  const classID = req.params.classID as string;

  const { day, room, startTime, endTime } = req.body;
  try {
    // Start the transaction
    const transaction = await prisma.$transaction(async (tx) => {
      // Find the class and related routine
      const classFind = await tx.class.findUnique({
        where: { id: classID as string },
        include: {
          routine: true, // Ensure that the related routine is fetched
        },
      });

      if (!classFind) throw new Error('Class not found'); // Throw an error to roll back the transaction

      const routineId = classFind.routineId; // Get routineId from the class

      // Create the new weekday record using Prisma
      const newWeekday = await tx.weekday.create({
        data: {
          classId: classID,
          routineId: routineId, // Relate to the found routine
          Day: day.toLowerCase(), // Assuming `day` is passed as a string (e.g., "mon", "tue")
          room: room,
          startTime: new Date(startTime), // Assuming startTime and endTime are ISO strings
          endTime: new Date(endTime),
        },
      });

      // Add the new weekday to the routine's weekdays array (relational integrity handled automatically by Prisma)
      await tx.routine.update({
        where: { id: routineId },
        data: {
          weekdays: {
            connect: {
              id: newWeekday.id, // Connect the new weekday to the routine
            },
          },
        },
      });

      // Return the new weekday if everything is successful
      return newWeekday;
    });

    // Send the success response
    res.send({ message: 'Weekday added successfully', newWeekday: transaction });
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};
//*******************************************************************************/
//---------------------------- deleteWeekdayById --------------------------------/
//*******************************************************************************/

export const deleteWeekdayById = async (req: Request, res: Response) => {

  const weekdayID = req.params.weekdayID as string;


  try {
    // Start a transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Fetch the weekday and associated class
      const weekday = await tx.weekday.findUnique({
        where: { id: weekdayID },
        select: { id: true, classId: true },
      });

      if (!weekday) {
        throw new Error('Weekday not found');
      }

      // Ensure the class has at least one remaining weekday
      const weekdayCount = await tx.weekday.count({
        where: { classId: weekday.classId },
      });

      if (weekdayCount <= 1) {
        throw new Error('Class must have at least one weekday. Deletion not allowed.');
      }

      // Delete the weekday
      const deletedWeekday = await tx.weekday.delete({
        where: { id: weekdayID },
      });

      // Fetch remaining weekdays in the class
      const remainingWeekdays = await tx.weekday.findMany({
        where: { classId: weekday.classId },
      });

      return { deletedWeekday, remainingWeekdays };
    });

    // Return success response
    res.status(200).json({
      message: 'Weekday deleted successfully',
      deletedWeekday: result.deletedWeekday,
      weekdays: result.remainingWeekdays,
    });
  } catch (error: any) {
    console.error('Error deleting weekday:', error);
    res.status(500).json({ message: error.message || 'Internal server error', weekdays: [] });
  }
};


//******* show all weekday in a class ************** */

export const allWeekdayInClass = async (req: any, res: Response) => {

  const { ClassID } = req.params;

  try {
    if (!ClassID) return res.status(500).send({ message: "ClassId not found", weekdays: [] });
    // 1 weekdays
    const weekdays = await prisma.weekday.findMany({ where: { classId: ClassID } });

    res.send({ message: "All weekday in the class", weekdays });
  } catch (error: any) {
    console.log(error)
    return res.status(500).send({ message: error.toString, weekdays: [] });

  }

}

//*************************************************************************/
//-------------------------  edit_class   ---------------------------------/
//*************************************************************************/
export const editClass = async (req: any, res: Response) => {
  const { classID } = req.params;
  const { name, instructorName, subjectCode } = req.body;

  try {

    //  Update the class details
    const updatedClass = await prisma.class.update({
      where: { id: classID },
      data: {
        name,
        instructorName,
        subjectCode,
      },
    });

    // Step 5: Return updated class data
    return res.status(200).json({
      class: updatedClass,
      message: 'Class updated successfully',
    });

  } catch (error: any) {
    console.error('Error updating class:', error);
    res.status(500).send({ message: error.message });
  }
};


//**********************************************************************/
//-------------------- Delete Class ------------------------------------//
//**********************************************************************/
export const remove_class = async (req: any, res: Response) => {
  const { classID } = req.params;

  try {
    const session = await prisma.$transaction(async (tx) => {
      // ... (ক্লাস এবং রুটিন খোঁজার আগের কোড) ...

      // ১. ক্লাসের আন্ডারে থাকা সব সামারি ডাটাবেজ থেকে খুঁজে বের করা
      const summaries = await tx.summary.findMany({ where: { classId: classID } });

      // ২. প্রত্যেকটা সামারি এবং তার ভেতরের ইমেজের লিংক ধরে ডিলিট করা
      for (const summary of summaries) {
        for (const imageLink of summary.imageLinks ?? []) {

          // 💡 কোনো হেল্পার ফাংশন ছাড়া সরাসরি ইনলাইন MinIO ফাইল ডিলিট লজিক
          const urlParts = imageLink.split(`${BUCKET_NAME}/`);

          if (urlParts.length > 1) {
            const s3Key = urlParts[1];
            try {
              await minioS3Client.send(
                new DeleteObjectCommand({
                  Bucket: BUCKET_NAME,
                  Key: s3Key,
                })
              );
            } catch (minioError) {
              console.error(`❌ Failed to delete image from MinIO: ${s3Key}`, minioError);
              // কোনো কারণে একটা ফাইল ডিলিট না হলেও যেন পুরো ট্রানজেকশন ক্র্যাশ না করে, তাই এখানে ক্যাচ করা হলো
            }
          }
        }

        // MinIO থেকে ইমেজ ডিলিট হওয়ার পর ডাটাবেজ থেকে সামারি ডিলিট করা
        await tx.summary.delete({ where: { id: summary.id } });
      }

      // ... (বাকি ডিলিট করার কোড, যেমন tx.class.delete(...) ইত্যাদি) ...

      return { message: 'Class and associated media deleted successfully' };
    });

    return res.status(200).json({ message: session.message });
  } catch (error: any) {
    console.error("Error in remove_class:", error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
};

//*********************************************************************************************/
//---------------------------- Full Routine or All Class --------------------------------------/
//*********************************************************************************************/

export const allClass = async (req: any, res: Response) => {

  const { routineID } = req.params;
  console.log(routineID);

  try {
    // Check if the routine exists
    const routine = await prisma.routine.findUnique({
      where: { id: routineID },
      include: {
        routineOwner: { // Include owner details in the routine query
          select: {
            id: true,
            name: true,
            username: true,
            image: true, // Include image if required
            imageStorageProvider: true,
          },
        },
      },
    });
    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    // Fetch all classes related to the routine without including weekdays or timestamps
    const classes = await prisma.class.findMany({
      where: { routineId: routineID },
      select: {
        id: true,
        name: true,
        instructorName: true,
        subjectCode: true,
        routineId: true,
      }, // Exclude createdAt and updatedAt
    });


    // Initialize weekdays structure for grouping
    const weekdayClasses: { [key: string]: any[] } = { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] };
    // Group classes by weekdays
    const classesWithWeekdays = await prisma.class.findMany({
      where: { routineId: routineID },
      include: {
        weekdays: true, // Include weekdays for grouping
      },
    });

    classesWithWeekdays.forEach((classItem) => {
      classItem.weekdays.forEach((weekday) => {
        const dayKey = weekday.Day.toLowerCase(); // Get the day directly

        if (weekdayClasses[dayKey]) {
          // Use the class and weekday properties directly
          weekdayClasses[dayKey].push({
            ...classItem,
            room: weekday.room,
            startTime: weekday.startTime,
            endTime: weekday.endTime,
          });
        } else {
          console.warn(`Invalid weekday: ${weekday.Day} for class: ${classItem.id}`);
        }
      });
    });
    const { id, name, username, image, imageStorageProvider } = routine.routineOwner;

    // Prepare the final response
    const response = {
      allClass: classes,
      weekdayClasses,
      owner: { id, name, username, image, imageStorageProvider },
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


//************   findClass       *************** */
export const findClass = async (req: any, res: Response) => {
  const { classID } = req.params;


  try {
    // step:1 find classes
    const classes = await prisma.class.findFirst({ where: { id: classID } });
    if (!classes) return res.status(404).send({ message: 'Class not found' });

    // step:2 find weekday
    const weekdays = await prisma.weekday.findMany({ where: { classId: classID } });


    // step:3 send response
    res.status(200).send({ message: "All weekday in the class", classes, weekdays });


  } catch (error: any) {
    console.error(error);

    res.status(500).send({ message: 'Error updating class', weekdays: [] });
  }
};


//*********************************************************************** */
//------------------------- class Notification Time -----------------------//
//*********************************************************************** */

export const classNotification = async (req: any, res: Response) => {
  const { id } = req.user;

  try {
    // Step 1: Get all routine IDs where the user is a member
    const routineMembers = await prisma.routineMember.findMany({
      where: { accountId: id },
      select: { routineId: true },
    });

    if (routineMembers.length === 0) {
      return res.status(404).json({ message: 'No routines found for the user' });
    }

    // Extract routine IDs from the results
    const routineIds = routineMembers.map((member) => member.routineId);

    // Step 2: Find weekdays associated with the routine IDs
    const weekdaysWithClasses = await prisma.weekday.findMany({
      where: { routineId: { in: routineIds } },
      include: {
        class: {
          select: {
            id: true,
            name: true,
            instructorName: true,
            subjectCode: true,
          },
        },
      },
    });

    // Filter out weekdays without valid classes
    const validWeekdays = weekdaysWithClasses.filter((weekday) => weekday.class !== null);

    // Step 3: Send response with the filtered weekdays and class information
    res.status(200).json({ allClassForNotification: validWeekdays });

  } catch (error) {
    console.error('Error fetching class notifications:', error);
    res.status(500).json({ message: 'Server Error', notificationOnClasses: [] });
  }
};
