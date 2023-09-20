import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.NODEMAILER_DIRECTION,
      subject: `Message for Web Buana Bahari Samudera - ${name} | ${email}`,
      text: message,
    });
  } catch (error) {
    console.error(error);
  } finally {
    transporter.close();
  }

  return new Response(null, { status: 200 });
}
