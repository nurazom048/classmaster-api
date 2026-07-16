const { Client } = require('ssh2');

const command = process.argv.slice(2).join(' ');
if (!command) {
  console.error('Please specify a command to run.');
  process.exit(1);
}

const conn = new Client();

conn.on('ready', () => {
  conn.exec(command, (err, stream) => {
    if (err) {
      console.error('Execution error:', err);
      conn.end();
      process.exit(1);
    }
    stream.on('close', (code, signal) => {
      conn.end();
      process.exit(code);
    }).on('data', (data) => {
      process.stdout.write(data);
    }).stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}).on('error', (err) => {
  console.error('Connection error:', err);
  process.exit(1);
}).connect({
  host: '192.168.10.51',
  port: 8022,
  username: 'u0_a374',
  password: '1234',
  readyTimeout: 10000
});
