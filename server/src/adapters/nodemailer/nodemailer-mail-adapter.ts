import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb36851cab1a41",
    pass: "6d32ef3173d449",
  },
});

export class NodemailerMailAdapater implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Lenon Diedrich <lenon.diedrich@gmail.com>",
      subject,
      html: body,
    });
  }
}
