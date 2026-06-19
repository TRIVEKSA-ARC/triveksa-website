import Lead from "../models/Lead.js";
import sendEmail from "../utils/sendEmail.js";

export const createLead = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      budget,
      goal,
      message,
      source,
    } = req.body;

    // Validation
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Save Lead
    const lead = await Lead.create({
      name,
      email,
      phone,
      service,
      budget,
      goal,
      message,
      source,
    });
    console.log("Lead saved:", lead);

    /* ================= EMAIL TO ADMIN ================= */
    console.log("Sending admin email...");
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `🚀 New Project Inquiry [${source || "Website"}] - ${service}`,
      html: `
        <h2>New Lead Received</h2>

        <p><strong>Source:</strong> ${source || "Website"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || "Not Provided"}</p>
        <p><strong>Business Goal:</strong> ${goal || "Not Provided"}</p>

        <h3>Project Details</h3>
        <p>${message}</p>
      `,
    });
    console.log("Admin email sent");

    /* ================= AUTO REPLY TO CLIENT ================= */
    console.log("Sending client email...");

    await sendEmail({
      to: email,
      subject: "Thank you for contacting TRIVEKSA ARC",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <div style="text-align: center; padding: 20px 0;">
            <img
              src="https://triveksaarc.com/Logo.png"
              alt="TRIVEKSA ARC"
              width="120"
              style="display: block; margin: 0 auto;"
            />
          </div>

          <h2 style="color: #0f172a;">
            Thank You for Contacting TRIVEKSA ARC
          </h2>

          <p>Hi ${name},</p>

          <p>
            Thank you for reaching out to TRIVEKSA ARC.
            We have successfully received your project inquiry.
          </p>

          <p>
            <strong>Selected Service:</strong> ${service}
          </p>

          <p>
            <strong>Business Goal:</strong> ${goal || "Not Provided"}
          </p>

          <p>
            <strong>Budget:</strong> ${budget || "Not Provided"}
          </p>

          <p>
            Our team will review your requirements and contact you within 24 hours.
          </p>

          <hr />

          <p>
            Regards,<br />
            <strong>TRIVEKSA ARC</strong><br />
            Digital Solutions
          </p>

          <p>
            🌐 https://triveksaarc.com
          </p>

        </div>
      `,
    });

    console.log("Client email sent");

    // Send HTTP response back to the front-end client
    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      lead,
    });

  } catch (error) {
    console.error("CREATE LEAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* ================= GET ALL LEADS ================= */

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error("GET LEADS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* ================= GET SINGLE LEAD ================= */

export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error("GET LEAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* ================= UPDATE STATUS ================= */

export const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      lead,
    });
  } catch (error) {
    console.error("UPDATE LEAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* ================= DELETE LEAD ================= */

export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error) {
    console.error("DELETE LEAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};