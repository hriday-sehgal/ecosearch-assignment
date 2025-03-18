const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The World's First <span className="text-green-600">Green AI</span> Search Engine
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join the fight against climate change with every search you make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#waitlist"
              className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="px-8 py-3 bg-white text-green-600 font-medium rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 bg-gray-100 border-b flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 bg-white rounded-full flex-1 p-2">
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">ecosearch.co</span>
                </div>
              </div>
            </div>
            <div className="p-6 h-64 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-4">EcoSearch</div>
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Search the web sustainably..."
                    
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-600">Every search plants trees and funds renewable energy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

