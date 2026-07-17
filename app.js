// cPanel Node.js Application Startup File
// This file serves as the main entry point for the Phusion Passenger server in cPanel.

// Load environment variables from the .env file in the root
require('dotenv').config();

// Start the production server
require('./dist/server.js');
