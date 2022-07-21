// Md added code for make work the require function in node js---
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import nodemailer from "nodemailer";
//md added this tow line below---------
import express from "express";
import path from "path";
// import wbm from "wbm";

const app = express();
const __dirname = path.resolve();
app.use("/public", express.static(path.join(__dirname, "public")));

class Email {
  constructor(email) {
    this.to = email;
    this.from = `"Aryan Sharma" <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL,
          pass: process.env.APP_GMAIL_PASS,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOSTDEV,

      port: process.env.EMAIL_PORTDEV,
      auth: {
        user: process.env.EMAIL_USERNAMEDEV,
        pass: process.env.EMAIL_PASSWORDDEV,
      },
    });
  }
  async send(text, subject) {
    //2) define  email options
    const mailOptions = {
      from: this.from,
      to: "md.hasibuzzaman28@gmail.com",
      subject,
      text,
    };
    //3) create an transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendResetToken(message) {
    await this.send(message, "Password Reset");
  }

  async sendEstimate(message, subject, file, phone) {
    await this.send(message, subject, file, phone);
  }
}

export default Email;
