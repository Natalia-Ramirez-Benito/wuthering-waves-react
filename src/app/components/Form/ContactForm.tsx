'use client';
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Nombre requerido';
        else if (value.length < 3) error = 'Mínimo 3 caracteres';
        break;
      case 'email':
        if (!value) error = 'Email requerido';
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Email inválido';
        break;
      case 'message':
        if (!value.trim()) error = 'Mensaje requerido';
        else if (value.length < 10) error = 'Mínimo 10 caracteres';
        break;
    }
    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) validationErrors[key] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Por favor corrige los errores');
      return;
    }

    try {
      // Simular envío a API
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Mensaje enviado correctamente!', {
        duration: 4000,
        icon: '✉️',
        style: {
          background: '#4CAF50',
          color: '#fff',
        }
      });

      // Resetear formulario
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Error al enviar el mensaje');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="mx-auto max-w-screen-md px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block">
            Contáctanos
          </h2>
          <p className="mt-4 text-muted-foreground">¿Tienes alguna pregunta? Escríbenos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-2xl shadow-xl border border-muted">
          <Toaster position="top-right" reverseOrder={false} />

          <div className="space-y-2">
            <label className="block text-lg font-medium">Nombre</label>
            <div className="relative">
              <input
                name="name"
                type="text"
                placeholder="Tu nombre"
                className={`w-full text-lg text-black px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                  errors.name ? 'border-red-500 focus:ring-red-200' : 'border-muted focus:border-primary focus:ring-primary/20'
                }`}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                onBlur={handleBlur}
              />
              {errors.name && (
                <div className="absolute right-3 top-3 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            {errors.name && <p className="text-red-500 text-sm flex items-center gap-1"><span>•</span>{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium">Email</label>
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className={`w-full text-lg text-black px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-muted focus:border-primary focus:ring-primary/20'
                }`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                onBlur={handleBlur}
              />
              {errors.email && (
                <div className="absolute right-3 top-3 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            {errors.email && <p className="text-red-500 text-sm flex items-center gap-1"><span>•</span>{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium">Mensaje</label>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                className={`w-full text-lg text-black px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all resize-none ${
                  errors.message ? 'border-red-500 focus:ring-red-200' : 'border-muted focus:border-primary focus:ring-primary/20'
                }`}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                onBlur={handleBlur}
              />
              {errors.message && (
                <div className="absolute right-3 top-3 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            {errors.message && <p className="text-red-500 text-sm flex items-center gap-1"><span>•</span>{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-400 to-indigo-400 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}