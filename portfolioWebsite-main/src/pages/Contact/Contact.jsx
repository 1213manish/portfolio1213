import React, { useState } from "react";
import { Send, MapPin, Mail, Copy } from "lucide-react";
import { toast } from "react-toastify";
import Confetti from 'react-confetti';
import "react-toastify/dist/ReactToastify.css";
import "/src/assets/css/toast-custom.css";  
import {Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    setStatus("Please fill in all required fields correctly.");
    return;
  }

  setIsLoading(true); // START loader

  const form = new FormData();
  form.append("access_key", "cfab79c4-b038-4d94-851c-94eb0d301d8e");
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("subject", formData.subject || "New Contact Form Submission");
  form.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      setStatus(result.message || "There was an error sending your message.");
    }
  } catch (error) {
    setStatus("An error occurred. Please try again.");
    console.error("Error:", error);
  } finally {
    setIsLoading(false); // STOP loader (always)
  }
};


  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("amanyadav923949@gmail.com");
      toast.success("Email copied to clipboard!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark", 
      });
      
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide after 3 seconds
    } catch (error) {
      toast.error("Failed to copy email.",{
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-[#050d1a] text-white min-h-screen relative"
    >
      {showConfetti && <Confetti />} {/* Confetti effect */}
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Email</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-400">manishkr9192@gmail.com</p>
                      <button
                        onClick={handleCopyEmail}
                        className="text-sky-300 hover:text-sky-200 transition-colors"
                        title="Copy Email"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

               <button
  type="submit"
  disabled={isLoading}
  className={`w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-opacity ${
    isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
  }`}
>
  {isLoading ? (
    <>
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>Sending...</span>
    </>
  ) : (
    <>
      <span>Send Message</span>
      <Send className="w-4 h-4" />
    </>
  )}
</button>

              </form>

              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
