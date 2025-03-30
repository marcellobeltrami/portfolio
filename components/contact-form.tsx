"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <div className="border border-blue-500/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
            placeholder="What's this about?"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 bg-black/60 border border-blue-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
            placeholder="Your message here..."
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Send Message
        </Button>
      </form>
    </div>
  )
}
