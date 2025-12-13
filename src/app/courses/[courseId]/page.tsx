import Link from 'next/link';
import { notFound } from 'next/navigation';

// Single course data
const coursesData: Record<string, any> = {
    'beginners-web-dev': {
        id: 'beginners-web-dev',
        title: 'A Beginner\'s Guide to Web Development',
        description: 'Learn the fundamentals of web development and create your first web pages from scratch.',
        longDescription: 'This course will take you from complete beginner to confidently writing your first web pages. You\'ll learn about HTML structure, how web pages work, and build a solid foundation for your web development journey.',
        level: 'Beginner',
        duration: '30 minutes',
        prerequisites: 'None - perfect for absolute beginners!',
        whatYouLearn: [
            'Understand what HTML is and how it works',
            'Create your first web page from scratch',
            'Learn the basic structure of HTML documents',
            'Write headings and paragraphs',
            'View your work in a web browser',
        ],
        lessons: [
            { id: '1', title: 'Creating Your First Program', duration: '30 min' },
        ],
    },
};

export default async function CoursePage({
    params,
}: {
    params: Promise<{ courseId: string }>;
}) {
    const { courseId } = await params;
    const course = coursesData[courseId];

    if (!course) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Course Header */}
            <section className="relative overflow-hidden bg-hero-pattern">
                <div className="absolute inset-0 bg-hero-mesh opacity-50" />

                <div className="relative container-wide py-20 md:py-28">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                    </nav>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Free Course
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
                            {course.description}
                        </p>

                        {/* Course Meta */}
                        <div className="flex flex-wrap gap-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white">
                                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="font-medium">{course.lessons.length} Lesson</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white">
                                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">{course.duration}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white">
                                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                <span className="font-medium">{course.level}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Course Content */}
            <section className="section-sm">
                <div className="container-narrow">
                    {/* About Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About This Course</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">{course.longDescription}</p>

                        <div className="info-box info-box-blue">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">Prerequisites:</span> {course.prerequisites}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
                        <div className="space-y-3">
                            {course.whatYouLearn.map((item: string, index: number) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                                    <div className="flex-shrink-0 w-8 h-8 bg-yss-primary rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lessons Preview */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Course Content</h2>
                        <div className="card p-0 overflow-hidden">
                            {course.lessons.map((lesson: any, index: number) => (
                                <Link
                                    key={lesson.id}
                                    href={`/courses/${courseId}/lessons/${lesson.id}`}
                                    className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 group-hover:bg-yss-primary rounded-xl flex items-center justify-center transition-colors">
                                        <span className="text-gray-600 group-hover:text-white font-semibold transition-colors">{index + 1}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-gray-900 group-hover:text-yss-primary transition-colors">{lesson.title}</h3>
                                        <p className="text-sm text-gray-500">{lesson.duration}</p>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-yss-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <Link
                            href={`/courses/${courseId}/lessons`}
                            className="btn-primary px-10 py-4 text-lg"
                        >
                            Start Learning
                        </Link>
                        <p className="text-gray-500 text-sm mt-4">
                            Begin your web development journey today
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Generate static params for the single course
export async function generateStaticParams() {
    return [{ courseId: 'beginners-web-dev' }];
}
