require("dotenv").config();

module.exports = {
  port: process.env.PORT || 50053,
  serverUrl: process.env.SERVER_URL || "0.0.0.0",
  rabbitUrl: process.env.RABBIT_URL || "amqp://localhost",
  billUpdatedQueue: process.env.BILL_UPDATED_QUEUE || "bill.updated",
  emailFrom: process.env.EMAIL_FROM || "bills@streamflow.cl",
  sendEmail: process.env.SEND_EMAIL || "NO",
  emailHost: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
  emailPort: process.env.EMAIL_PORT || 2525,
  emailUsername: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD,
};
