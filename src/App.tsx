"use client"

import { useState } from "react"
import Hero from "./components/Hero"
import Features from "./components/Features"
import WaitlistForm from "./components/WaitlistForm"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  const [showThankYou, setShowThankYou] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section className="py-16 px-4 bg-green-50" id="waitlist">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Waitlist</h2>
            <p className="text-lg mb-8">Be among the first to experience the world's first Green AI Search Engine.</p>
            {showThankYou ? (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
                <p className="text-lg">We've added you to our waitlist. You'll receive a confirmation email shortly.</p>
              </div>
            ) : (
              <WaitlistForm onSuccess={() => setShowThankYou(true)} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

