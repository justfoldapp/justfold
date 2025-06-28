"use client"

import Header from "@/components/header"
import LaundryFoldingProForm from "@/components/laundry-pro-form"
import { Button } from "@/components/ui/button"
import { DollarSign, Home, Users, Award, UserCheck, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LaundryProsPage() {
  const handleSignUpClick = () => {
    // Scroll to top to ensure form is visible and expanded
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Wait for scroll to complete, then focus on the first field
    setTimeout(() => {
      const firstField = document.getElementById("pro-name")
      if (firstField) {
        firstField.focus()
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LaundryFoldingProForm />

      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat md:ml-96"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/laundry-pro-folding.png')",
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Earn Extra Cash with JustFold – No Hassle!
              </h1>
              <p className="text-xl leading-relaxed drop-shadow-md bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                Turn folding into income without the grind of driving for Uber or spending hours on washing/drying. Work
                from home or on the go, set your hours, and earn $60-$80/day with 3-4 orders from our beloved customers.
              </p>
              <Button
                onClick={handleSignUpClick}
                className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors duration-200"
              >
                Start Earning Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Become a Laundry Folding Pro?</h2>
            <p className="text-xl text-gray-600">Flexible work that fits your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-[#C1E1C1] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Easy Earnings</h3>
              <p className="text-gray-600">No driving required, no equipment costs, flexible gigs.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#A3BFFA] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Work From Home</h3>
              <p className="text-gray-600">Set your own schedule and work in the comfort of your home.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#C1E1C1] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Supportive Community</h3>
              <p className="text-gray-600">Join a network of friendly Laundry Folding Pros who support each other.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#A3BFFA] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Build Your Reputation</h3>
              <p className="text-gray-600">Earn badges and build a reputation with quality work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information with Background */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/mobile-folding-station.jpg')",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/folded-clothes-stack.jpg"
                alt="Neatly folded clothes stack"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 bg-white/80 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Turn Your Skills Into Income</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  <strong className="text-gray-900">Flexible Schedule:</strong> Work when you want, where you want.
                  Perfect for stay-at-home parents, students, or anyone looking for extra income.
                </p>
                <p>
                  <strong className="text-gray-900">Great Earnings:</strong> Earn $41-$55 per day folding 60-90 items.
                  The more you fold, the more you earn.
                </p>
                <p>
                  <strong className="text-gray-900">No Investment Required:</strong> We provide everything you need to
                  get started. No upfront costs or equipment purchases.
                </p>
                <p>
                  <strong className="text-gray-900">Quality Matters:</strong> Build your reputation with quality work
                  and earn badges for excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Laundry Pros */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Start Earning with JustFold</h2>
            <p className="text-xl text-gray-600">Turn your folding skills into income</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-[#C1E1C1] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="w-10 h-10 text-gray-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">1. Sign Up</h3>
                <p className="text-gray-600 text-lg">
                  Join our folding team with a simple registration. We'll verify your details and get you started.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-[#A3BFFA] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">2. Pick Gigs</h3>
                <p className="text-gray-600 text-lg">
                  Choose orders near you that fit your schedule. Work as much or as little as you want.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-[#C1E1C1] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-10 h-10 text-gray-800" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">3. Earn Money</h3>
                <p className="text-gray-600 text-lg">
                  Fold and deliver, your way. Earn $41-$55 per day with quality work and build your reputation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Image
              src="/images/justfold-folded-clothes.png"
              alt="Professional quality folded clothes showing the standard expected from Laundry Folding Pros"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Earning Potential</h2>
            <p className="text-xl text-gray-600">Flexible income based on your availability</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Part-Time</h3>
              <div className="text-4xl font-bold text-[#C1E1C1] mb-2">$15-25</div>
              <p className="text-gray-600 mb-4">per day</p>
              <p className="text-sm text-gray-500">20-40 items • 2-3 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-[#C1E1C1] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#C1E1C1] text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular</h3>
              <div className="text-4xl font-bold text-[#C1E1C1] mb-2">$41-55</div>
              <p className="text-gray-600 mb-4">per day</p>
              <p className="text-sm text-gray-500">60-90 items • 4-6 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Time</h3>
              <div className="text-4xl font-bold text-[#C1E1C1] mb-2">$70-100</div>
              <p className="text-gray-600 mb-4">per day</p>
              <p className="text-sm text-gray-500">100+ items • 6-8 hours</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleSignUpClick}
              className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Start Earning Today
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action with Background */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193, 225, 193, 0.9), rgba(193, 225, 193, 0.9)), url('/images/eco-organizer-tote.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-white/90 p-12 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Earning?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join hundreds of Laundry Folding Pros who are already earning extra income with flexible, rewarding work.
            </p>
            <Button
              onClick={handleSignUpClick}
              className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors duration-200"
            >
              Sign Up Now
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
