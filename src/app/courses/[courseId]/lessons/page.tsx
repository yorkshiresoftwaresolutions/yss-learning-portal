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
                title: 'Creating Your First Program',
                duration: '30 min',
                description: 'Learn the basics of HTML and create your very first web page from scratch. By the end of this lesson, you\'ll have a working HTML file displayed in your browser.'
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
            <section className="bg-gradient-to-r from-yss-primary to-yss-primary-dark text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="mb-6">
                        <Link href={`/courses/${courseId}`} className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2 text-lg">
                            <span>←</span>
                            <span>Back to Course</span>
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                    <p className="text-xl md:text-2xl opacity-90">
                        Ready to start your journey? Let's begin!
                    </p>
                </div>
            </section>

            {/* Lessons List */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Course Lesson</h2>

                    <div className="space-y-6">
                        {course.lessons.map((lesson: any, index: number) => (
                            <div
                                key={lesson.id}
                                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yss-primary hover:shadow-2xl transition-all group"
                            >
                                <div className="flex flex-col md:flex-row items-start p-8 gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-yss-primary to-yss-primary-dark text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <span className="text-3xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-yss-primary transition-colors">
                                            {lesson.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">{lesson.description}</p>

                                        <div className="flex flex-wrap items-center gap-6 mb-6">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <span className="text-xl">⏱</span>
                                                <span className="font-medium">{lesson.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <span className="text-xl">🎓</span>
                                                <span className="font-medium">Beginner Friendly</span>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/courses/${courseId}/lessons/${lesson.id}`}
                                            className="inline-block bg-yss-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-yss-primary-dark transition-all transform hover:scale-105 shadow-md text-lg"
                                        >
                                            Start Lesson →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
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
