'use client';

import Link from 'next/link';
import { useState } from 'react';

// Lesson 1 content only
const lessonContent: Record<string, Record<string, any>> = {
    'beginners-web-dev': {
        '1': {
            id: '1',
            title: 'Creating Your First Program',
            courseTitle: 'A Beginner\'s Guide to Web Development',
            introduction: 'Welcome to your first lesson! In this lesson, you\'ll learn what HTML is and how to write your first simple web page. By the end, you\'ll have created a working HTML file that displays content in a web browser.',
            sections: [
                {
                    title: 'What is HTML?',
                    content: 'HTML stands for HyperText Markup Language. It\'s the standard language used to create web pages. HTML uses "tags" to structure content and tell browsers how to display it.',
                    note: 'HTML is not a programming language - it\'s a markup language. It describes the structure and content of web pages.',
                },
                {
                    title: 'Your First HTML Page',
                    content: 'Every HTML page starts with a basic structure. Let\'s build one step by step.',
                    steps: [
                        {
                            title: 'Step 1: Create a new file',
                            content: 'Create a new file on your computer and name it index.html. You can use any text editor like Notepad (Windows), TextEdit (Mac), or a code editor like VS Code.',
                        },
                        {
                            title: 'Step 2: Add the basic HTML structure',
                            content: 'Type the following code into your file:',
                            code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
</body>
</html>`,
                        },
                        {
                            title: 'Step 3: Save and open in a browser',
                            content: 'Save your file, then open it in a web browser (like Chrome, Firefox, or Safari). You should see your heading and paragraph displayed!',
                        },
                    ],
                },
                {
                    title: 'Understanding the Code',
                    content: 'Let\'s break down what each part does:',
                    list: [
                        '<code>&lt;!DOCTYPE html&gt;</code> - Tells the browser this is an HTML5 document',
                        '<code>&lt;html&gt;</code> - The root element that contains all other elements',
                        '<code>&lt;head&gt;</code> - Contains information about the page (not displayed)',
                        '<code>&lt;title&gt;</code> - Sets the page title (shown in browser tab)',
                        '<code>&lt;body&gt;</code> - Contains all visible content',
                        '<code>&lt;h1&gt;</code> - A main heading',
                        '<code>&lt;p&gt;</code> - A paragraph',
                    ],
                },
            ],
            exercise: {
                title: 'Practice Exercise',
                description: 'Create a web page about yourself with:',
                tasks: [
                    'A title of your choice',
                    'A main heading with your name',
                    'Two or three paragraphs about your interests',
                ],
                hint: 'Try it yourself before revealing the solution!',
                solution: `<!DOCTYPE html>
<html>
<head>
    <title>About Me</title>
</head>
<body>
    <h1>Sarah Johnson</h1>
    <p>I'm a student learning web development. I've always been curious about how websites work.</p>
    <p>In my free time, I enjoy reading, hiking, and photography.</p>
    <p>I'm excited to learn more about coding and build my own projects!</p>
</body>
</html>`,
                solutionNote: 'Your solution doesn\'t need to match this exactly. The important part is understanding the structure!',
            },
            summary: [
                'What HTML is and what it\'s used for',
                'The basic structure of an HTML document',
                'How to create headings and paragraphs',
                'How to open an HTML file in a browser',
            ],
        },
    },
};

export default function LessonPage({
    params,
}: {
    params: { courseId: string; lessonId: string };
}) {
    const [showSolution, setShowSolution] = useState(false);

    const lesson = lessonContent[params.courseId]?.[params.lessonId];

    if (!lesson) {
        return (
            <div className="bg-white min-h-screen">
                <section className="relative overflow-hidden bg-hero-pattern">
                    <div className="relative container-wide py-20">
                        <h1 className="text-3xl font-bold text-white">Lesson Not Found</h1>
                        <p className="text-white/80 mt-4">The lesson you're looking for doesn't exist.</p>
                        <Link href="/" className="btn-primary mt-6 inline-flex">
                            Return Home
                        </Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Lesson Header */}
            <section className="relative overflow-hidden bg-hero-pattern">
                <div className="absolute inset-0 bg-hero-mesh opacity-50" />

                <div className="relative container-wide py-16 md:py-20">
                    {/* Breadcrumb */}
                    <nav className="mb-6">
                        <Link
                            href={`/courses/${params.courseId}/lessons`}
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Lessons
                        </Link>
                    </nav>

                    <div className="flex items-start gap-5">
                        {/* Lesson Number Badge */}
                        <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center">
                            <span className="text-2xl font-bold text-white">{lesson.id}</span>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium uppercase tracking-wider">
                                    Lesson {lesson.id}
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                {lesson.title}
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
                                {lesson.introduction}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Lesson Content */}
            <section className="py-12 md:py-16">
                <div className="container-narrow">
                    <article className="space-y-16">
                        {lesson.sections.map((section: any, index: number) => (
                            <div key={index} className="scroll-mt-header">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    {section.title}
                                </h2>

                                {section.content && (
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {section.content}
                                    </p>
                                )}

                                {section.note && (
                                    <div className="info-box info-box-blue mb-8">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-gray-700">
                                                <span className="font-semibold text-gray-900">Key Point:</span> {section.note}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {section.steps && (
                                    <div className="space-y-6">
                                        {section.steps.map((step: any, stepIndex: number) => (
                                            <div key={stepIndex} className="card p-6 md:p-8">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-yss-primary rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                                                        {stepIndex + 1}
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-gray-600 leading-relaxed mb-4">
                                                            {step.content}
                                                        </p>
                                                        {step.code && (
                                                            <div className="code-block">
                                                                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50">
                                                                    <span className="text-xs text-gray-400 font-medium">HTML</span>
                                                                    <div className="flex gap-1.5">
                                                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                                    </div>
                                                                </div>
                                                                <pre className="p-5 overflow-x-auto custom-scrollbar">
                                                                    <code className="text-sm leading-relaxed">{step.code}</code>
                                                                </pre>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.list && (
                                    <div className="space-y-3">
                                        {section.list.map((item: string, itemIndex: number) => (
                                            <div key={itemIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                                <div className="flex-shrink-0 w-6 h-6 bg-yss-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                                    <div className="w-2 h-2 bg-yss-primary rounded-full" />
                                                </div>
                                                <span
                                                    className="text-gray-700 leading-relaxed [&_code]:bg-gray-200 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Exercise Section */}
                        {lesson.exercise && (
                            <div className="pt-8 border-t border-gray-200">
                                <div className="info-box info-box-orange p-8 mb-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{lesson.exercise.title}</h3>
                                    </div>

                                    <p className="text-lg text-gray-700 mb-6">{lesson.exercise.description}</p>

                                    <ul className="space-y-3 mb-6">
                                        {lesson.exercise.tasks.map((task: string, index: number) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 font-medium">{task}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-white/60 rounded-lg p-4">
                                        <p className="text-gray-600 text-sm flex items-center gap-2">
                                            <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                            {lesson.exercise.hint}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowSolution(!showSolution)}
                                    className="btn-outline mb-6"
                                >
                                    {showSolution ? (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                            Hide Solution
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                            Show Solution
                                        </>
                                    )}
                                </button>

                                {showSolution && (
                                    <div className="info-box info-box-green p-8 animate-fade-in">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-2xl font-bold text-gray-900">Example Solution</h4>
                                        </div>

                                        <div className="code-block mb-6">
                                            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50">
                                                <span className="text-xs text-gray-400 font-medium">HTML</span>
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                </div>
                                            </div>
                                            <pre className="p-5 overflow-x-auto custom-scrollbar">
                                                <code className="text-sm leading-relaxed">{lesson.exercise.solution}</code>
                                            </pre>
                                        </div>

                                        <div className="bg-white/60 rounded-lg p-4">
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                                <span><strong>Tip:</strong> {lesson.exercise.solutionNote}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Summary */}
                        <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-yss-primary rounded-2xl flex items-center justify-center">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Lesson Complete</p>
                                    <h2 className="text-2xl font-bold text-gray-900">Congratulations!</h2>
                                </div>
                            </div>

                            <p className="text-lg text-gray-600 mb-6">
                                You've completed this lesson. Here's what you learned:
                            </p>

                            <div className="space-y-3">
                                {lesson.summary.map((item: string, index: number) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
                            <Link
                                href={`/courses/${params.courseId}/lessons`}
                                className="btn-outline w-full sm:w-auto"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Lessons
                            </Link>

                            <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-500 font-medium">
                                End of Course
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
