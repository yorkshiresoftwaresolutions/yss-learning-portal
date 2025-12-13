import Link from 'next/link';

// Sample course data - in a real app, this would come from a database or CMS
const courses = [
    {
        id: 'html-basics',
        title: 'HTML Basics',
        description: 'Learn the fundamentals of HTML and create your first web pages.',
        lessonsCount: 5,
        level: 'Beginner',
        duration: '2-3 hours',
    },
    {
        id: 'css-fundamentals',
        title: 'CSS Fundamentals',
        description: 'Style your web pages with CSS and make them look beautiful.',
        lessonsCount: 6,
        level: 'Beginner',
        duration: '3-4 hours',
    },
    {
        id: 'javascript-intro',
        title: 'JavaScript Introduction',
        description: 'Add interactivity to your websites with JavaScript basics.',
        lessonsCount: 8,
        level: 'Beginner',
        duration: '4-5 hours',
    },
];

export default function CoursesPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-yss-primary to-yss-primary-dark text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
                    <p className="text-xl opacity-90">
                        Choose a course to start your web development journey
                    </p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-yss-primary hover:shadow-lg transition-all"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h2>
                                <p className="text-gray-700 mb-4">{course.description}</p>

                                <div className="flex gap-4 mb-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                        <span className="mr-1">📚</span>
                                        {course.lessonsCount} lessons
                                    </span>
                                    <span className="flex items-center">
                                        <span className="mr-1">⏱</span>
                                        {course.duration}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {course.level}
                                    </span>
                                </div>

                                <Link
                                    href={`/courses/${course.id}`}
                                    className="inline-block w-full bg-yss-primary text-white text-center font-semibold px-6 py-3 rounded-md hover:bg-yss-primary-dark transition-colors"
                                >
                                    View Course
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
