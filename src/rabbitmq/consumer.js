const { connectRabbit } = require("./connection");
const {
    billUpdatedQueue,
} = require("../config/env");
const Email = require("../services/emailService");

async function consumeBillEvents() {
  const ch = await connectRabbit();
  await ch.assertQueue(billUpdatedQueue, { durable: true });

  ch.consume(videoUpdatedQueue, async (msg) => {
    const data = JSON.parse(msg.content.toString());
    await Email(data.userEmail).sendUpdateBillEmail(data.bill);
    console.log(`Email sent to ${data.userEmail} for bill update: ${data.bill.id}`);
    ch.ack(msg);
  });
}

module.exports = { consumeVideoEvents };
