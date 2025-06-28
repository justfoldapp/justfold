import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Calendar, Shirt, Truck, UserCheck, Briefcase, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">How JustFold Works</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Simple, efficient, and designed for everyone. See how easy it is to get your clothes folded or start earning
            as a Laundry Pro.
          </p>
        </div>
      </section>

      {/* For Customers Process */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Customers: Get Your Clothes Folded
            </h2>
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
              src="/placeholder.svg?height=300&width=600"
              alt="Animated GIF showing the customer process"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* For Laundry Pros Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Laundry Folding Pros: Start Earning
            </h2>
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
              src="/placeholder.svg?height=300&width=600"
              alt="Laundry Folding Pro using folding table"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay only for what you need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">T-Shirts</h3>
              <div className="text-4xl font-bold text-[#A3BFFA] mb-2">$0.50</div>
              <p className="text-gray-600">per item</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shirts</h3>
              <div className="text-4xl font-bold text-[#A3BFFA] mb-2">$1.00</div>
              <p className="text-gray-600">per item</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Towels</h3>
              <div className="text-4xl font-bold text-[#A3BFFA] mb-2">$2.00</div>
              <p className="text-gray-600">per item</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need your clothes folded or want to earn extra income, JustFold makes it simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200">
                I Need Folding
              </Button>
            </Link>
            <Link href="/laundry-folding-pros">
              <Button className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200">
                I Want to Earn
              </Button>
            </Link>
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
