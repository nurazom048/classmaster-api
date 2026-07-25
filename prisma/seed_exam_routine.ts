import prisma from "./schema/prisma.clint";

async function seedExamRoutine() {
  try {
    console.log("🌱 Seeding Exam data into Database...");

    // 1. Find an existing routine in the database
    let routine = await prisma.routine.findFirst({
      select: { id: true, routineName: true, ownerAccountId: true },
    });

    if (!routine) {
      console.log("No existing routine found in database!");
      return;
    }

    console.log(`📌 Using Routine: ID=${routine.id}, Title="${routine.routineName}"`);

    // 2. Clean existing exams for this routine
    try {
      await prisma.exam.deleteMany({
        where: { routineId: routine.id },
      });
    } catch (e) {
      console.log("Delete exams note:", (e as any).message);
    }

    // 3. Create 5 realistic sample exams attached to this routine
    const now = new Date();

    const examsData = [
      {
        name: "Mathematics & Calculus",
        subjectCode: "MATH-101",
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0),
        startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 0, 0),
        endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12, 0, 0),
        room: "Room 102 (Science Annex)",
        routineId: routine.id,
      },
      {
        name: "Physics & Thermodynamics",
        subjectCode: "PHY-201",
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 0, 0, 0),
        startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 10, 0, 0),
        endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 13, 0, 0),
        room: "Room 205 (Main Building)",
        routineId: routine.id,
      },
      {
        name: "Computer Programming & OOP",
        subjectCode: "CSE-102",
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5, 0, 0, 0),
        startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5, 14, 0, 0),
        endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5, 17, 0, 0),
        room: "Computer Lab 3",
        routineId: routine.id,
      },
      {
        name: "Digital Logic & Circuit Design",
        subjectCode: "EEE-203",
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 0, 0, 0),
        startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 9, 30, 0),
        endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 12, 30, 0),
        room: "Room 301 (Engineering Wing)",
        routineId: routine.id,
      },
      {
        name: "Database Management Systems",
        subjectCode: "CSE-304",
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9, 0, 0, 0),
        startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9, 13, 30, 0),
        endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9, 16, 30, 0),
        room: "Central Auditorium",
        routineId: routine.id,
      },
    ];

    for (const exData of examsData) {
      const createdExam = await prisma.exam.create({
        data: exData,
      });
      console.log(`📝 Added Exam: ${createdExam.name} (${createdExam.subjectCode}) in ${createdExam.room}`);
    }

    console.log("\n🎉 Seed completed successfully!");
    console.log(`📌 Target Routine ID: "${routine.id}"`);
  } catch (error) {
    console.error("❌ Error seeding exam routine:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedExamRoutine();
