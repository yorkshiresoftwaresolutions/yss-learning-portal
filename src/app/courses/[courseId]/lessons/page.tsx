import Link from 'next/link';
import { notFound } from 'next/navigation';

// Single course with single lesson
const coursesData: Record<string, any> = {
    'beginners-web-dev': {
        id: 'beginners-web-dev',
        title: 'A Beginner\'s Guide to Web Development',
        lessons: [
            {
                id: '1',
                title: 'Your First Program (Interactive Greeting Card)',
                duration: '1-2 hours',
                description: 'Build an interactive greeting card using HTML, CSS, and JavaScript. You\'ll use CodePen to write code and see results instantly—no setup required!'
            },
        ],
    },
};

export default async function LessonsPage({
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
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <section className="relative overflow-hidden bg-hero-pattern">
                <div className="absolute inset-0 bg-hero-mesh opacity-50" />

                <div className="relative container-wide py-16 md:py-20">
                    {/* Breadcrumb */}
                    <nav className="mb-6">
                        <Link
                            href={`/courses/${courseId}`}
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Course
                        </Link>
                    </nav>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {course.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/85 max-w-2xl">
                        Ready to start your journey? Let's begin with the lessons below.
                    </p>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Lessons List */}
            <section className="section-sm">
                <div className="container-narrow">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Lessons</h2>
                        <div className="badge badge-primary">
                            {course.lessons.length} Lesson{course.lessons.length > 1 ? 's' : ''}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {course.lessons.map((lesson: any, index: number) => (
                            <Link
                                key={lesson.id}
                                href={`/courses/${courseId}/lessons/${lesson.id}`}
                                className="block card card-interactive p-0 overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row items-stretch">
                                    {/* Lesson Number */}
                                    <div className="hidden md:flex flex-shrink-0 w-24 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center">
                                        <span className="text-3xl font-bold text-white">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 md:p-8">
                                        <div className="flex items-start gap-4">
                                            {/* Mobile lesson number */}
                                            <div className="md:hidden flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                                                <span className="text-lg font-bold text-white">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                                                    {lesson.description}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-4">
                                                    <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>{lesson.duration}</span>
                                                    </div>
                                                    <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>
                                                        <span>Beginner Friendly</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Arrow */}
                                            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 items-center justify-center group-hover:bg-blue-600 transition-colors">
                                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Help Section */}
                    <div className="mt-16 text-center">
                        <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100/50">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">New to Web Development?</h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                Start with Lesson 1 and work your way through. Each lesson builds on the previous one,
                                so take your time and practice along the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Generate static params
export async function generateStaticParams() {
    return [{ courseId: 'beginners-web-dev' }];
}
