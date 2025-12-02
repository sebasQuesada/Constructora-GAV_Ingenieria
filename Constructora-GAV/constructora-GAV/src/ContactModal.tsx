import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactModal.css";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    descripcion: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarCorreo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      nombre: form.nombre,
      telefono: form.telefono,
      descripcion: form.descripcion,
      destinatario: "sebas.quesada.2896@gmail.com"
    };

    try {
      await emailjs.send(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        templateParams,
        "TU_PUBLIC_KEY"
      );

      alert("Mensaje enviado exitosamente. Gracias por contactarnos.");
      onClose();
      setForm({ nombre: "", telefono: "", descripcion: "" });
    } catch (error) {
      console.error("Error al enviar: ", error);
      alert("Error al enviar el mensaje. Inténtelo nuevamente.");
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        
        {/* Botón cerrar */}
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">Contáctenos</h2>

        <form onSubmit={enviarCorreo}>
          
          <label className="modal-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="modal-input"
            placeholder="Ingrese su nombre"
          />

          <label className="modal-label">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
            className="modal-input"
            placeholder="Ej: 8888-8888"
          />

          <label className="modal-label">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            required
            className="modal-textarea"
            placeholder="Cuéntenos en qué podemos ayudarle"
          />

          <button type="submit" className="modal-submit-btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
