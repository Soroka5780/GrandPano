'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Odoslané dáta:', formData);
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/obrazok3.jpg')" }}
    >
      <AnimatePresence mode="wait">
        {!submitted && (
          <motion.div
            key="form"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10"
          >
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">Kontaktujte nás</h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Máte otázku alebo záujem o spoluprácu? Vyplňte formulár nižšie a ozveme sa vám čo najskôr.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Meno</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Vaše meno"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="vas@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Správa</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Napíšte svoju správu sem..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105"
                >
                  Odoslať správu
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {submitted && (
<motion.div
  key="thank-you"
  initial={{ opacity: 0, x: '100vw' }}
  animate={{ opacity: 1, x: 0 }}    
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center text-3xl font-semibold text-black"
>
  Vaša správa bola úspešne odoslaná. Ďakujeme!
</motion.div>

        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
