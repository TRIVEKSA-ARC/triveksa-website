import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/* ================= SEND EMAIL ================= */
const sendEmail = async ({
  to,
  subject,
  html,
  replyTo = null,
}) => {
  if (!resend) {
    console.warn("⚠️ RESEND_API_KEY missing. Email not sent.");
    return false;
  }

  try {
    const response = await resend.emails.send({
      from: "Triveksa Arc <noreply@triveksaarc.com>",
      to: [to],
      subject,
      html,
      ...(replyTo && { replyTo }),
    });

    console.log("📧 Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("❌ EMAIL SEND FAILED:", error);
    return false;
  }
};

export default sendEmail;