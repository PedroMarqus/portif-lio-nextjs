"use client";

import { useState } from "react";
import { z } from "zod";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
                const [errors, setErrors] = useState<Record<string, string>>({});

                const schema = z.object({
                    name: z.string().min(1, 'Name is required'),
                    email: z.string().email('Invalid email'),
                    subject: z.string().min(1, 'Subject is required'),
                    message: z.string().min(1, 'Message is required'),
                });

                const handleSubmit = (e: React.FormEvent) => {
                    e.preventDefault();
                    const result = schema.safeParse(formData);
                    
                    if (!result.success) {
                        const newErrors: Record<string, string> = {};
                        result.error.issues.forEach((err: z.ZodIssue) => {
                            if (err.path[0] && typeof err.path[0] === 'string') newErrors[err.path[0]] = err.message;
                        });
                        setErrors(newErrors);
                    } else {
                        setErrors({});
                        console.log('Form submitted:', result.data);
                    }
                };

                const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                    const { name, value } = e.target;
                    setFormData(prev => ({ ...prev, [name]: value }));
                };

                return (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white" />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        
                        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white" rows={5} />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        
                        <button type="submit" className="w-full p-2 border text-white rounded hover:bg-gray-700">Send</button>
                    </form>
                );
}