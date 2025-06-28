"use client"

import type React from "react"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smartphone, Lock, Bell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">More to Come!</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our iOS and Android apps are on the way to make folding even simpler. Stay tuned for the ultimate mobile
            experience!
          </p>

          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Coming in the App</h2>
            <p className="text-xl text-gray-600">Enhanced features for an even better experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-[#A3BFFA] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">One-Tap Ordering</h3>
                <p className="text-gray-600 text-lg">
                  Schedule pickups and deliveries with just one tap. Save your preferences for even faster ordering.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-[#C1E1C1] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Bell className="w-10 h-10 text-gray-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Real-Time Updates</h3>
                <p className="text-gray-600 text-lg">
                  Get notifications when your order is picked up, being folded, and ready for delivery.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-[#A3BFFA] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Pro Dashboard</h3>
                <p className="text-gray-600 text-lg">
                  Laundry Folding Pros get a dedicated dashboard to manage gigs, track earnings, and build their
                  reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join the Waitlist</h2>
            <p className="text-xl text-gray-600">
              Be the first to know when our mobile apps launch. We'll send you a notification as soon as they're
              available!
            </p>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sneak Peek</h2>
            <p className="text-xl text-gray-600">Here's what the app experience will look like</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Seamless Mobile Experience</h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A3BFFA] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Intuitive interface designed for quick and easy ordering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A3BFFA] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Timely pickup and delivery updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A3BFFA] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Secure payment processing with multiple payment options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A3BFFA] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Photo confirmation of your perfectly folded clothes</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=300"
                alt="Mobile app preview showing the JustFold interface"
                width={300}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex flex-col items-start space-y-2">
                <Image src="/logo.png" alt="JustFold Logo" width={96} height={32} className="h-8 w-auto" />
                <p className="text-gray-400 text-sm">Clean Folds, Unshackled Bliss – Folding Fades Forever!</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  For Customers
                </Link>
                <Link href="/laundry-folding-pros" className="block text-gray-400 hover:text-white transition-colors">
                  For Laundry Folding Pros
                </Link>
                <Link href="/how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <p className="text-gray-400">
                Questions? We'd love to help!
                <br />
                Coming soon: Full contact details
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JustFold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipcode: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
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
      localStorage.setItem("waitlistRegistration", JSON.stringify(formData))
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
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

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 font-semibold text-xl mb-2">You're on the list!</div>
        <p className="text-green-700">We'll notify you as soon as the apps are available.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <Label htmlFor="waitlist-name">Name</Label>
          <Input
            id="waitlist-name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="waitlist-email">Email</Label>
          <Input
            id="waitlist-email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="waitlist-zipcode">Zipcode</Label>
          <Input
            id="waitlist-zipcode"
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
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Join the Waitlist
        </Button>
      </div>
    </form>
  )
}
