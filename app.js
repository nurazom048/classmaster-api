// cPanel Node.js Application Startup File
// This file serves as the main entry point for the Phusion Passenger server in cPanel.

const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'passenger_error.log');

// Clear the log on startup and write initial timestamp
fs.writeFileSync(logPath, `=== Startup Log [${new Date().toISOString()}] ===\n`);

// Redirect stdout and stderr to the log file
const logStream = fs.createWriteStream(logPath, { flags: 'a' });
process.stdout.write = (chunk, encoding, callback) => {
    logStream.write(chunk, encoding, callback);
};
process.stderr.write = (chunk, encoding, callback) => {
    logStream.write(chunk, encoding, callback);
};

// Also catch uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
    fs.appendFileSync(logPath, `\n❌ Uncaught Exception:\n${err.stack || err}\n`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    fs.appendFileSync(logPath, `\n❌ Unhandled Rejection at: ${promise}\nReason: ${reason.stack || reason}\n`);
});

// Load environment variables from the .env file in the root
require('dotenv').config();

// Start the production server
require('./dist/server.js');
