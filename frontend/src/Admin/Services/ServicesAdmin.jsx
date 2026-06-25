import { useEffect, useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import ServiceEditor from "./ServiceEditor";
import {
  fetchAdminServices,
  createServiceAPI,
  updateServiceAPI,
  deleteServiceAPI,
} from "../../services/service.api";
import toast from "react-hot-toast";

export default function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await fetchAdminServices();
      setServices(data);
    } catch (err) {
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  // Add Service
  const addService = () => {
    setServices((prev) => [
      ...prev,
      {
        _id: Date.now().toString(),
        title: "",
        description: "",
        icon: "FaLaptopCode",
        features: [""],
        order: prev.length,
        isActive: true,
      },
    ]);
  };

  // Delete Service
  const deleteService = async (id) => {
    try {
      if (!id.toString().length || id.toString().length < 20) {
        setServices((prev) =>
          prev.filter((service) => service._id !== id)
        );
        return;
      }

      await deleteServiceAPI(id);

      setServices((prev) =>
        prev.filter((service) => service._id !== id)
      );

      toast.success("Service deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  // Update Service Field
  const updateService = (id, field, value) => {
    setServices((prev) =>
      prev.map((service) =>
        service._id === id
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
        if (service._id !== serviceId) return service;

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
        service._id === serviceId
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
        if (service._id !== serviceId) return service;

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
  const handleSave = async () => {
    try {
      for (const service of services) {
        if (
          !service._id ||
          service._id.toString().length < 20
        ) {
          await createServiceAPI(service);
        } else {
          await updateServiceAPI(service._id, service);
        }
      }

      toast.success("Services saved successfully");
      loadServices();
    } catch (err) {
      toast.error("Save failed");
    }
  };

  if (loading) {
    return (
      <div className="text-white p-10">
        Loading Services...
      </div>
    );
  }

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
            key={service._id}
            service={service}
            onDelete={() =>
              deleteService(service._id)
            }
            onUpdate={(field, value) =>
              updateService(
                service._id,
                field,
                value
              )
            }
            onFeatureChange={(index, value) =>
              updateFeature(
                service._id,
                index,
                value
              )
            }
            onAddFeature={() =>
              addFeature(service._id)
            }
            onDeleteFeature={(index) =>
              deleteFeature(
                service._id,
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