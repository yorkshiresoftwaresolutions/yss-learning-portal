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
            <section className="bg-gradient-to-r from-yss-primary to-yss-primary-dark text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
                    <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed">{course.description}</p>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                            <span className="text-2xl">📚</span>
                            <span className="font-medium">{course.lessons.length} lesson</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                            <span className="text-2xl">⏱</span>
                            <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                            <span className="text-2xl">🎓</span>
                            <span className="font-medium">{course.level}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                    {/* About Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About This Course</h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{course.longDescription}</p>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                            <p className="text-base md:text-lg text-gray-800">
                                <strong className="font-semibold">Prerequisites:</strong> {course.prerequisites}
                            </p>
                        </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
                        <div className="space-y-4">
                            {course.whatYouLearn.map((item: string, index: number) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="flex-shrink-0 w-8 h-8 bg-yss-primary rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                    <span className="text-base md:text-lg text-gray-800 pt-1">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center pt-8">
                        <Link
                            href={`/courses/${courseId}/lessons`}
                            className="inline-block bg-yss-primary text-white font-bold px-12 py-5 rounded-lg hover:bg-yss-primary-dark transition-all transform hover:scale-105 shadow-lg text-lg md:text-xl"
                        >
                            View Lessons
                        </Link>
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
