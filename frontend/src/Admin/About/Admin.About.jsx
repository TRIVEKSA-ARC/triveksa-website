import { useEffect, useState } from "react";
import { useAbout } from "../../context/AboutContext";
import toast from "react-hot-toast";

function AboutAdmin() {
  const { about, updateAbout } = useAbout();

  const [form, setForm] = useState({
    subtitle: "",
    paragraph1: "",
    paragraph2: "",
    highlightText: "",
    services: "",
    location: "",
  });

  const [image, setImage] = useState(null);

  /* ================= LOAD DATA INTO FORM ================= */
  useEffect(() => {
    if (about) {
      setForm({
        subtitle: about.subtitle || "",
        paragraph1: about.paragraph1 || "",
        paragraph2: about.paragraph2 || "",
        highlightText: about.highlightText || "",
        services: about.services?.join(", ") || "",
        location: about.location || "",
      });
    }
  }, [about]);

  /* ================= SUBMIT ================= */
  const submit = async () => {
    const fd = new FormData();

    fd.append("subtitle", form.subtitle);
    fd.append("paragraph1", form.paragraph1);
    fd.append("paragraph2", form.paragraph2);
    fd.append("highlightText", form.highlightText);
    fd.append("location", form.location);

    fd.append(
      "services",
      JSON.stringify(
        form.services.split(",").map(s => s.trim())
      )
    );

    if (image) fd.append("image", image);

    const success = await updateAbout(fd);

    if (success) {
      toast.success("About section updated successfully");
    } else {
      toast.error("Failed to update About section");
    }
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-6">Edit About Section</h1>

      {[
        { key: "subtitle", label: "Section Label" },
        { key: "paragraph1", label: "Main About Paragraph" },
        { key: "paragraph2", label: "Secondary About Paragraph" },
        { key: "highlightText", label: "Large Highlight Statement" },
        { key: "services", label: "Services (comma separated)" },
        { key: "location", label: "Location" },
      ].map((field) => (
        <div key={field.key} className="mb-4">
          <label className="mb-2 block text-sm font-medium text-white/70">
            {field.label}
          </label>

          <input
            value={form[field.key]}
            onChange={(e) =>
              setForm({
                ...form,
                [field.key]: e.target.value,
              })
            }
            placeholder={field.label}
            className="w-full rounded-xl border border-white/10 bg-black/70 p-4 text-white outline-none transition focus:border-amber-400/40"
          />
        </div>
      ))}

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mt-4"
      />

      <button
        onClick={submit}
        className="mt-6 px-6 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition"
      >
        Save Changes
      </button>
    </div>
  );
}

export default AboutAdmin;