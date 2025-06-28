"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, UserPlus, ChevronUp } from "lucide-react"

export default function CustomerForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipcode: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Handle scroll to collapse/expand form
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsCollapsed(scrollY > 100) // Collapse when scrolled more than 100px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      // Store in localStorage for now
      localStorage.setItem("customerRegistration", JSON.stringify(formData))
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setIsOpen(false)
        setFormData({ name: "", email: "", zipcode: "" })
      }, 3000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleExpandForm = () => {
    setIsCollapsed(false)
    // Scroll to top to show the full form
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Mobile: Collapsed Button */}
      <div className="md:hidden">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="form-mobile-collapsed bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <UserPlus size={20} />
            <span>Sign Up</span>
          </button>
        )}
      </div>

      {/* Desktop: Collapsible Form */}
      <div className="hidden md:block">
        {isCollapsed ? (
          // Collapsed state - show only button
          <div className="fixed top-48 right-4 z-40">
            <button
              onClick={handleExpandForm}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <UserPlus size={20} />
              <span>Join as a Customer</span>
              <ChevronUp size={16} />
            </button>
          </div>
        ) : (
          // Expanded state - show full form
          <div className="fixed top-48 right-4 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border z-40 w-80 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Join as a Customer</h3>
            </div>

            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="text-green-600 font-semibold mb-2">Thanks! You're signed up!</div>
                <p className="text-sm text-gray-600">Look for a welcome email soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="customer-name">Name</Label>
                  <Input
                    id="customer-name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="customer-email">Email</Label>
                  <Input
                    id="customer-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="customer-zipcode">Zipcode</Label>
                  <Input
                    id="customer-zipcode"
                    type="text"
                    placeholder="42421"
                    maxLength={5}
                    value={formData.zipcode}
                    onChange={(e) => handleInputChange("zipcode", e.target.value.replace(/\D/g, ""))}
                    className={errors.zipcode ? "border-red-500" : ""}
                  />
                  {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Sign Up as a Customer
                </Button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Mobile: Expanded Form */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Join as a Customer</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="text-green-600 font-semibold mb-2">Thanks! You're signed up!</div>
                <p className="text-sm text-gray-600">Look for a welcome email soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="customer-name-mobile">Name</Label>
                  <Input
                    id="customer-name-mobile"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="customer-email-mobile">Email</Label>
                  <Input
                    id="customer-email-mobile"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="customer-zipcode-mobile">Zipcode</Label>
                  <Input
                    id="customer-zipcode-mobile"
                    type="text"
                    placeholder="42421"
                    maxLength={5}
                    value={formData.zipcode}
                    onChange={(e) => handleInputChange("zipcode", e.target.value.replace(/\D/g, ""))}
                    className={errors.zipcode ? "border-red-500" : ""}
                  />
                  {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Sign Up as a Customer
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
