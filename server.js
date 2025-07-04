require("dotenv").config();
const server = require("./src/app");
const { port, serverUrl } = require("./src/config/env");
const { ServerCredentials } = require("@grpc/grpc-js");
const Email = require("./src/services/emailService");

const userEmail = 'test@test.com';
const bill = {
  id: '12345',
  amount: 100,
  dueDate: '2023-12-31'
};
// Send a test email
(async () => {
  try {
    await new Email({ email: userEmail })
      .sendUpdateBillEmail(bill);
    console.log(`Test email sent to ${userEmail} for bill update: ${bill.id}`);
  } catch (err) {
    console.error("Error sending test email:", err);
  }
})();

server.bindAsync(
  `${serverUrl}:${port}`,
  ServerCredentials.createInsecure(),
  (err, bindPort) => {
    if (err) {
      console.error("Error binding server:", err);
      process.exit(1);
    }
    console.log(`🚀 gRPC User Service listening at ${serverUrl}:${bindPort}`);
  }
);
