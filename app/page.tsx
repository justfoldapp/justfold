"use client"

import Header from "@/components/header"
import CustomerForm from "@/components/customer-form"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Shield, Clock, Calendar, Shirt, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const handleJoinClick = () => {
    // Scroll to top to ensure form is visible and expanded
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Wait for scroll to complete, then focus on the first field
    setTimeout(() => {
      const firstField = document.getElementById("customer-name")
      if (firstField) {
        firstField.focus()
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CustomerForm />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tired of Folding? Let <span className="text-[#C1E1C1]">JustFold</span> Handle It!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enjoy perfectly folded clothes delivered in 24 hours – say goodbye to the chore and hello to free time!
            </p>
            <Button
              onClick={handleJoinClick}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Join the Folding Freedom
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/happy-justfold-customer.jpg"
              alt="Happy person receiving folded clothes in eco-organizer tote"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose JustFold?</h2>
            <p className="text-xl text-gray-600">Experience the freedom from folding with our trusted service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-[#C1E1C1] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No More Folding Chores</h3>
              <p className="text-gray-600">We take the hassle out of your laundry routine.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#A3BFFA] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Affordable Pricing</h3>
              <p className="text-gray-600">
                Starting at less than half the price that you pay for a full service laundry – great value for your
                peace of mind.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#C1E1C1] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hygiene You Can Trust</h3>
              <p className="text-gray-600">We only fold your clean, dry clothes – no mixing with others' laundry.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#A3BFFA] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast & Convenient</h3>
              <p className="text-gray-600">Delivered in 24 hours with flexible scheduling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let JustFold Simplify Your Life!</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Say goodbye to folding with our expert Laundry Folding Pros. Your clean, dry clothes are folded with
                care and delivered in our eco-friendly tote – no stress, just ease!
              </p>
              <p>
                <strong className="text-gray-900">Hygiene Matters:</strong> We fold only what you wash, ensuring your
                clothes stay private and clean.
              </p>
              <p>
                <strong className="text-gray-900">Great Pricing:</strong> Pay just $0.50-$2 per item, tailored to your
                needs.
              </p>
              <p>
                <strong className="text-gray-900">Benefits:</strong> Quick 24-hour delivery, eco-friendly process, and
                trusted local Folding Pros.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/justfold-folded-clothes.png"
              alt="Neatly folded t-shirts, jeans, polos, and shirts on a white background showcasing JustFolds professional laundry and folding service"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How It Works for Customers */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How JustFold Works for You</h2>
            <p className="text-xl text-gray-600">Three simple steps to folding freedom</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-[#A3BFFA] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">1. Schedule Pickup</h3>
                <p className="text-gray-600 text-lg">
                  Place an order via our site (app coming soon!). Choose your pickup time and let us know what needs
                  folding.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-[#C1E1C1] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Shirt className="w-10 h-10 text-gray-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">2. We Fold</h3>
                <p className="text-gray-600 text-lg">
                  Our trusted Laundry Pros fold your clean clothes with care in just 24 hours. Quality guaranteed.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-[#A3BFFA] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">3. Enjoy Delivery</h3>
                <p className="text-gray-600 text-lg">
                  Get your eco-friendly tote with perfectly folded stacks. Organized, clean, and ready to put away.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Image
              src="/images/justfold-folded-clothes.png"
              alt="Professional folded clothes showing the quality result of JustFold service"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay only for what you need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">T-Shirts</h3>
              <div className="text-4xl font-bold text-[#A3BFFA] mb-2">$0.50</div>
              <p className="text-gray-600">per item</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shirts</h3>
              <div className="text-4xl font-bold text-[#A3BFFA] mb-2">$1.00</div>
              <p className="text-gray-600">per item</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Towels</h3>
              <div className="text-4xl font-bold text-[#A3BFFA] mb-2">$2.00</div>
              <p className="text-gray-600">per item</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleJoinClick}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Get Started Today
            </Button>
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
