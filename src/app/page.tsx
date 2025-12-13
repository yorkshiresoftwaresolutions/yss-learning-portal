import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-pattern">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/10 to-transparent" />

        <div className="relative container-wide py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in-down">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Free learning resources for beginners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
              Learn Web Development
              <span className="block text-white/90">The Right Way</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-100">
              Start your journey into web development with clear, simple lessons
              designed for people without a technical background. No overwhelm,
              just practical learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Link
                href="/courses/beginners-web-dev"
                className="inline-flex items-center justify-center gap-3 bg-white text-yss-primary font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5 group"
              >
                <span>Start Learning Free</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-gradient-subtle pattern-dots scroll-mt-header">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-yss-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Learning Made Simple
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach focuses on clarity and practical skills, helping you build
              real confidence in web development.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card card-hover p-8 group">
              <div className="icon-box-lg bg-red-50 text-yss-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clear & Simple</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn at your own pace with straightforward explanations. No jargon,
                no assumptions about prior knowledge.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card card-hover p-8 group">
              <div className="icon-box-lg bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Practice</h3>
              <p className="text-gray-600 leading-relaxed">
                Build real projects as you learn. Each lesson includes practical exercises
                with solutions when you need them.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card card-hover p-8 group">
              <div className="icon-box-lg bg-emerald-50 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Overwhelm</h3>
              <p className="text-gray-600 leading-relaxed">
                Focused lessons that teach you exactly what you need. No information
                overload, just steady progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="section bg-white">
        <div className="container-narrow">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-yss-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Course Overview
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our course guides you through creating web pages from scratch,
              building a solid foundation in web development.
            </p>
          </div>

          {/* Learning Items */}
          <div className="space-y-4 max-w-2xl mx-auto mb-16">
            {[
              'Clear, step-by-step instructions for every concept',
              'Practical exercises to reinforce your learning',
              'Example code you can study and modify',
              'Solutions available when you need guidance',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-yss-primary rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/courses/beginners-web-dev"
              className="btn-primary px-10 py-4 text-lg"
            >
              Get Started Now
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              No signup required &middot; Start learning immediately
            </p>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-yss-primary-light mb-2">100%</div>
              <div className="text-gray-400 font-medium">Free to Learn</div>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-gray-800">
              <div className="text-4xl md:text-5xl font-bold text-yss-primary-light mb-2">Beginner</div>
              <div className="text-gray-400 font-medium">Friendly Content</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-yss-primary-light mb-2">Practical</div>
              <div className="text-gray-400 font-medium">Hands-On Exercises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-subtle">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Join our free learning portal and take your first steps into web development today.
          </p>
          <Link
            href="/courses/beginners-web-dev/lessons"
            className="btn-primary px-10 py-4 text-lg"
          >
            Start Your First Lesson
          </Link>
        </div>
      </section>
    </div>
  );
}
