import Lead from "../models/Lead.js";

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

    // Create Lead
    const lead = await Lead.create({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

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