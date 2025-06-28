"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Briefcase } from "lucide-react"

export default function LaundryFoldingProForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "Zipcode is required"
    } else if (!/^\d{5}$/.test(formData.zipcode)) {
      newErrors.zipcode = "Please enter a valid 5-digit zipcode"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      localStorage.setItem("laundryFoldingProRegistration", JSON.stringify(formData))
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setIsOpen(false)
        setFormData({ name: "", email: "", phone: "", zipcode: "" })
      }, 3000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  return (
    <>
      {/* Mobile: Collapsed Button */}
      <div className="md:hidden">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="form-mobile-collapsed bg-green-400 hover:bg-green-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <Briefcase size={20} />
            <span>Sign Up</span>
          </button>
        )}
      </div>

      {/* Desktop: Always visible form */}
      <div className="hidden md:block fixed top-28 left-4 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border z-40 w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Join as a Laundry Folding Pro</h3>
        </div>

        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="text-green-600 font-semibold mb-2">Awesome! You're on your way to earning!</div>
            <p className="text-sm text-gray-600">We'll reach out soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="pro-name">Name</Label>
              <Input
                id="pro-name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="pro-email">Email</Label>
              <Input
                id="pro-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="pro-phone">Phone</Label>
              <Input
                id="pro-phone"
                type="tel"
                placeholder="312-555-1234"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", formatPhone(e.target.value))}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="pro-zipcode">Zipcode</Label>
              <Input
                id="pro-zipcode"
                type="text"
                placeholder="60601"
                maxLength={5}
                value={formData.zipcode}
                onChange={(e) => handleInputChange("zipcode", e.target.value.replace(/\D/g, ""))}
                className={errors.zipcode ? "border-red-500" : ""}
              />
              {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Sign Up as a Laundry Folding Pro
            </Button>
          </form>
        )}
      </div>

      {/* Mobile: Expanded Form */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Join as a Laundry Folding Pro</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="text-green-600 font-semibold mb-2">Awesome! You're on your way to earning!</div>
                <p className="text-sm text-gray-600">We'll reach out soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="pro-name-mobile">Name</Label>
                  <Input
                    id="pro-name-mobile"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="pro-email-mobile">Email</Label>
                  <Input
                    id="pro-email-mobile"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="pro-phone-mobile">Phone</Label>
                  <Input
                    id="pro-phone-mobile"
                    type="tel"
                    placeholder="312-555-1234"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", formatPhone(e.target.value))}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="pro-zipcode-mobile">Zipcode</Label>
                  <Input
                    id="pro-zipcode-mobile"
                    type="text"
                    placeholder="60601"
                    maxLength={5}
                    value={formData.zipcode}
                    onChange={(e) => handleInputChange("zipcode", e.target.value.replace(/\D/g, ""))}
                    className={errors.zipcode ? "border-red-500" : ""}
                  />
                  {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Sign Up as a Laundry Folding Pro
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
