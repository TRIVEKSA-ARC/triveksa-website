import Service from "../../models/Services/Service.model.js";

/* ================= CREATE ================= */
export const createService = async (req, res) => {
  try {
    const service = await Service.create({
      title: req.body.title,
      description: req.body.description,
      icon: req.body.icon,
      features: req.body.features || [],
      order: Number(req.body.order) || 0,
      isActive:
        req.body.isActive !== undefined
          ? req.body.isActive
          : true,
    });

    res.status(201).json(service);
  } catch (err) {
    console.error("CREATE SERVICE ERROR:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ================= READ ================= */
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({
      isActive: true,
    }).sort({
      order: 1,
    });

    res.json(services);
  } catch (err) {
    console.error("GET SERVICES ERROR:", err);

    res.status(500).json({
      message: "Failed to fetch services",
    });
  }
};

/* ================= ADMIN READ ================= */
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({
      order: 1,
    });

    res.json(services);
  } catch (err) {
    console.error("GET ALL SERVICES ERROR:", err);

    res.status(500).json({
      message: "Failed to fetch services",
    });
  }
};

/* ================= UPDATE ================= */
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    service.title =
      req.body.title ?? service.title;

    service.description =
      req.body.description ??
      service.description;

    service.icon =
      req.body.icon ?? service.icon;

    service.features =
      req.body.features ??
      service.features;

    service.order =
      req.body.order !== undefined
        ? Number(req.body.order)
        : service.order;

    service.isActive =
      req.body.isActive !== undefined
        ? req.body.isActive
        : service.isActive;

    await service.save();

    res.json(service);
  } catch (err) {
    console.error("UPDATE SERVICE ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
};

/* ================= DELETE ================= */
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(
      req.params.id
    );

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    await service.deleteOne();

    res.json({
      message: "Service deleted successfully",
    });
  } catch (err) {
    console.error("DELETE SERVICE ERROR:", err);

    res.status(500).json({
      message: "Delete failed",
    });
  }
};