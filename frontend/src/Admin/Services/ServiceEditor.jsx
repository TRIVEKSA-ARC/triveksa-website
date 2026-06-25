import {
  FaTrash,
  FaPlus,
} from "react-icons/fa";

export default function ServiceEditor({
  service,
  onDelete,
  onUpdate,
  onFeatureChange,
  onAddFeature,
  onDeleteFeature,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Service
        </h2>

        <button
          onClick={onDelete}
          className="text-red-400 hover:text-red-500"
        >
          <FaTrash />
        </button>

      </div>

      {/* Title */}

      <div className="mb-5">

        <label className="text-gray-400 text-sm">
          Title
        </label>

        <input
          type="text"
          value={service.title}
          onChange={(e) =>
            onUpdate("title", e.target.value)
          }
          className="mt-2 w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
        />

      </div>

      {/* Description */}

      <div className="mb-5">

        <label className="text-gray-400 text-sm">
          Description
        </label>

        <textarea
          rows={4}
          value={service.description}
          onChange={(e) =>
            onUpdate("description", e.target.value)
          }
          className="mt-2 w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
        />

      </div>

      {/* Icon */}

      <div className="mb-5">

        <label className="text-gray-400 text-sm">
          Icon
        </label>

        <input
          type="text"
          value={service.icon}
          onChange={(e) =>
            onUpdate("icon", e.target.value)
          }
          className="mt-2 w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
        />

      </div>

      {/* Features */}

      <div>

        <div className="flex justify-between mb-4">

          <h3 className="font-semibold">
            Features
          </h3>

          <button
            onClick={onAddFeature}
            className="text-cyan-400 flex items-center gap-2"
          >
            <FaPlus />
            Add Feature
          </button>

        </div>

        <div className="space-y-3">

          {service.features.map((feature, index) => (

            <div
              key={index}
              className="flex gap-3"
            >

              <input
                type="text"
                value={feature}
                onChange={(e) =>
                  onFeatureChange(
                    index,
                    e.target.value
                  )
                }
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
              />

              <button
                onClick={() =>
                  onDeleteFeature(index)
                }
                className="bg-red-500 px-4 rounded-lg"
              >
                <FaTrash />
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}