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
      message,
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
      message,
    });
    console.log("Lead saved:", lead);

    /* ================= EMAIL TO ADMIN ================= */
    console.log("Sending admin email...");
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `🚀 New Project Inquiry - ${service}`,
      html: `
        <h2>New Lead Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || "Not Provided"}</p>

        <h3>Project Details</h3>
        <p>${message}</p>
      `,
    });
    console.log("Admin email sent");

    /* ================= AUTO REPLY TO CLIENT ================= */
    console.log("Sending client email...");
    await sendEmail({
      to: email,
      subject: "Thank you for contacting Triviksa Arc",
      html: `
        <h2>Thank You for Contacting Triviksa Arc</h2>

        <p>Hi ${name},</p>

        <p>
          We have successfully received your project inquiry.
        </p>

        <p>
          Our team will review your requirements and get back to you shortly.
        </p>

        <p>
          Typical response time is within 24 hours.
        </p>

        <br/>

        <p>Regards,</p>
        <p><strong>Triviksa Arc Team</strong></p>
        <p>https://triveksaarc.com</p>
      `,
    });
    console.log("Client email sent");

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