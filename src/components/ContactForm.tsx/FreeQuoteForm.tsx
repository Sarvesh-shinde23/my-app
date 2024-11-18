"use client";
import React, { useState } from "react";

// Reusable InputField Component
interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type = "text",
  className = "",
  value,
  onChange,
}) => (
  <input
    id={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 ${className}`}
    required
  />
);

// Reusable TextArea Component
interface TextAreaProps {
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder = "Your message",
  className = "",
  value,
  onChange,
}) => (
  <textarea
    id={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 ${className}`}
    rows={5}
    required
  />
);

// Reusable Button Component
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className = "",
  disabled = false,
  children,
}) => (
  <button
    type={type}
    disabled={disabled}
    className={`w-full py-3 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

// FreeQuoteForm Component
function FreeQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://openrainbow-backend.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Something went wrong!");
      }

      const data = await response.json();
      setStatusMessage(data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      setStatusMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-start px-12 pt-20 pb-36 bg-white rounded-none max-w-[561px] max-md:px-5 max-md:pb-24 max-sm:pt-3.5 max-sm:max-w-[565px]">
      <header className="flex gap-5 justify-between items-start self-stretch max-md:max-w-full">
        <div className="flex flex-col mt-2.5">
          <h1 className="text-4xl font-bold leading-tight text-blue-950">
            Get a free quote
          </h1>
          <p className="self-start mt-6 text-lg leading-loose text-blue-950 text-opacity-80">
            Protect your awesome family
          </p>
        </div>
        <div className="flex shrink-0 bg-cyan-100 h-[75px] rounded-[37px] w-[75px]" />
      </header>
      <form onSubmit={handleSubmit} className="w-full mt-6 space-y-5">
        <div className="flex gap-5">
          <InputField
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            name="phone"
            placeholder="Phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <InputField
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get a Quote"}
        </Button>
      </form>
      {statusMessage && (
        <p className="mt-4 text-center text-sky-600">{statusMessage}</p>
      )}
    </section>
  );
}

export default FreeQuoteForm;
