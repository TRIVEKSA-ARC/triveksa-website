import { useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import ServiceEditor from "./ServiceEditor";

const createService = () => ({
  id: Date.now(),
  title: "",
  description: "",
  icon: "FaLaptopCode",
  features: [""],
});

export default function ServicesAdmin() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Website Development",
      description:
        "Modern responsive websites for businesses.",
      icon: "FaLaptopCode",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Admin Dashboard",
      ],
    },
  ]);

  // Add Service
  const addService = () => {
    setServices((prev) => [...prev, createService()]);
  };

  // Delete Service
  const deleteService = (id) => {
    setServices((prev) =>
      prev.filter((service) => service.id !== id)
    );
  };

  // Update Service Field
  const updateService = (id, field, value) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? { ...service, [field]: value }
          : service
      )
    );
  };

  // Update Feature
  const updateFeature = (
    serviceId,
    featureIndex,
    value
  ) => {
    setServices((prev) =>
      prev.map((service) => {
        if (service.id !== serviceId) return service;

        const features = [...service.features];
        features[featureIndex] = value;

        return {
          ...service,
          features,
        };
      })
    );
  };

  // Add Feature
  const addFeature = (serviceId) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              features: [...service.features, ""],
            }
          : service
      )
    );
  };

  // Delete Feature
  const deleteFeature = (
    serviceId,
    featureIndex
  ) => {
    setServices((prev) =>
      prev.map((service) => {
        if (service.id !== serviceId) return service;

        return {
          ...service,
          features: service.features.filter(
            (_, index) => index !== featureIndex
          ),
        };
      })
    );
  };

  // Save
  const handleSave = () => {
    console.log("Services", services);

    // axios.post("/api/services", services);

    alert("Services saved successfully!");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Services CMS
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your agency services.
          </p>
        </div>

        <button
          onClick={addService}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-600 transition"
        >
          <FaPlus />
          Add Service
        </button>

      </div>

      {/* Editors */}

      <div className="space-y-8">

        {services.map((service) => (

          <ServiceEditor
            key={service.id}
            service={service}
            onDelete={() =>
              deleteService(service.id)
            }
            onUpdate={(field, value) =>
              updateService(
                service.id,
                field,
                value
              )
            }
            onFeatureChange={(index, value) =>
              updateFeature(
                service.id,
                index,
                value
              )
            }
            onAddFeature={() =>
              addFeature(service.id)
            }
            onDeleteFeature={(index) =>
              deleteFeature(
                service.id,
                index
              )
            }
          />

        ))}

      </div>

      {/* Save */}

      <div className="mt-10 flex justify-end">

        <button
          onClick={handleSave}
          className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-700 transition"
        >
          <FaSave />
          Save Changes
        </button>

      </div>

    </div>
  );
}