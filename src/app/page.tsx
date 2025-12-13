import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yss-primary to-yss-primary-dark text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Yorkshire Software Solutions<br />Learning Portal
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-95 leading-relaxed">
            Free learning resources for web development beginners
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Start your journey into web development with clear, simple lessons designed
            for people without a technical background.
          </p>
          <Link
            href="/courses/beginners-web-dev"
            className="inline-block bg-white text-yss-primary font-bold px-12 py-5 rounded-lg text-lg md:text-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Learning Portal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition-all text-center group hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl md:text-3xl font-bold text-yss-primary mb-4">Simple & Clear</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Learn at your own pace with straightforward explanations and practical examples.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition-all text-center group hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-2xl md:text-3xl font-bold text-yss-primary mb-4">Hands-On Practice</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Build real projects as you learn, with solutions available when you need them.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition-all text-center group hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-yss-primary mb-4">No Overwhelm</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Focused lessons that teach you what you need, without the information overload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What You'll Learn</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Our course guides you through creating web pages, understanding HTML, and building a solid foundation in web development.
          </p>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-yss-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-base md:text-lg text-gray-800 pt-2">Clear, step-by-step instructions</span>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-yss-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-base md:text-lg text-gray-800 pt-2">Practical exercises to reinforce your learning</span>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-yss-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-base md:text-lg text-gray-800 pt-2">Example code repositories on GitHub</span>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-yss-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-base md:text-lg text-gray-800 pt-2">Solutions you can reveal when you're ready</span>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/courses/beginners-web-dev"
              className="inline-block bg-yss-primary text-white font-bold px-12 py-5 rounded-lg text-lg md:text-xl hover:bg-yss-primary-dark transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
