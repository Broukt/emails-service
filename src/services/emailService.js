const nodemailer = require("nodemailer");
const pug = require("pug");
const { convert } = require("html-to-text");
const path = require("path");

const emailTemplatePath = path.join(__dirname, "../views/emails");
const {
  emailFrom,
  sendEmail,
  emailHost,
  emailPort,
  emailUsername,
  emailPassword,
} = require("../config/env");

module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.from = emailFrom;
  }

  newTransport() {
    if (sendEmail !== "YES") {
      return {
        sendMail: () => {},
      };
    }
    return nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      auth: {
        user: emailUsername,
        pass: emailPassword,
      },
    });
  }

  async send(template, subject, emailContent) {
    const html = pug.renderFile(
      path.join(emailTemplatePath, `${template}.pug`),
      {
        ...emailContent,
        url: this.url,
        subject,
      }
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendUpdateBillEmail(bill) {
    await this.send("billUpdate", "Bill Update", {
      bill,
    });
  }
};
