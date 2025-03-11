import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setSuccess("Por favor, complete todos los campos.");
            return;
        }
        setLoading(true);

        const templateParams = {
            to_email: "sebas.quesada.2896@gmail.com", // Correo destinatario fijo
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(
                "YOUR_SERVICE_ID", // Reemplazar con tu SERVICE_ID
                "YOUR_TEMPLATE_ID", // Reemplazar con tu TEMPLATE_ID
                templateParams,
                "YOUR_PUBLIC_KEY" // Reemplazar con tu PUBLIC_KEY
            );
            setSuccess("Mensaje enviado con éxito!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSuccess("Error al enviar el mensaje. Inténtelo de nuevo.");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Contáctenos</h2>
            {success && <p className="text-center text-green-500">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows={5}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
