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
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;!DOCTYPE html&gt;</code> - Tells the browser this is an HTML5 document',
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;html&gt;</code> - The root element that contains all other elements',
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code> - Contains information about the page (not displayed)',
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;title&gt;</code> - Sets the page title (shown in browser tab)',
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;body&gt;</code> - Contains all visible content',
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;h1&gt;</code> - A main heading',
                        '<code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;p&gt;</code> - A paragraph',
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
                <section className="bg-gradient-to-r from-yss-primary to-yss-primary-dark text-white py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <h1 className="text-4xl font-bold">Lesson Not Found</h1>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Lesson Header */}
            <section className="bg-gradient-to-r from-yss-primary to-yss-primary-dark text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="mb-6">
                        <Link href={`/courses/${params.courseId}/lessons`} className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2 text-lg">
                            <span>←</span>
                            <span>Back to Lessons</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <span className="text-3xl font-bold">{lesson.id}</span>
                        </div>
                        <div>
                            <p className="text-white/80 text-sm uppercase tracking-wide mb-1">Lesson {lesson.id}</p>
                            <h1 className="text-3xl md:text-4xl font-bold">{lesson.title}</h1>
                        </div>
                    </div>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed">{lesson.introduction}</p>
                </div>
            </section>

            {/* Lesson Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <article className="space-y-16">
                        {lesson.sections.map((section: any, index: number) => (
                            <div key={index} className="scroll-mt-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{section.title}</h2>
                                {section.content && (
                                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">{section.content}</p>
                                )}

                                {section.note && (
                                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                                        <p className="text-base md:text-lg text-gray-800">
                                            <strong className="font-semibold text-gray-900">Key Point:</strong> {section.note}
                                        </p>
                                    </div>
                                )}

                                {section.steps && (
                                    <div className="space-y-10">
                                        {section.steps.map((step: any, stepIndex: number) => (
                                            <div key={stepIndex} className="bg-gray-50 rounded-xl p-8">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">{step.content}</p>
                                                {step.code && (
                                                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto shadow-lg">
                                                        <pre className="text-sm md:text-base leading-relaxed"><code>{step.code}</code></pre>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.list && (
                                    <div className="space-y-3">
                                        {section.list.map((item: string, itemIndex: number) => (
                                            <div key={itemIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                                <span className="text-yss-primary text-xl flex-shrink-0">•</span>
                                                <span className="text-base md:text-lg text-gray-800" dangerouslySetInnerHTML={{ __html: item }} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Exercise Section */}
                        {lesson.exercise && (
                            <div className="border-t-2 border-gray-200 pt-16">
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 p-8 rounded-xl mb-8 shadow-md">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-4xl">🎯</span>
                                        <h3 className="text-3xl font-bold text-orange-900">{lesson.exercise.title}</h3>
                                    </div>
                                    <p className="text-lg text-gray-800 mb-6">{lesson.exercise.description}</p>
                                    <ul className="space-y-3 mb-6">
                                        {lesson.exercise.tasks.map((task: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-orange-600 text-xl flex-shrink-0">✓</span>
                                                <span className="text-base md:text-lg text-gray-800">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-gray-600 italic bg-white/50 p-4 rounded-lg">{lesson.exercise.hint}</p>
                                </div>

                                <button
                                    onClick={() => setShowSolution(!showSolution)}
                                    className="bg-yss-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-yss-primary-dark transition-all transform hover:scale-105 shadow-md text-lg mb-6"
                                >
                                    {showSolution ? 'Hide Solution ↑' : 'Show Solution ↓'}
                                </button>

                                {showSolution && (
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 p-8 rounded-xl shadow-md animate-fadeIn">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-4xl">✅</span>
                                            <h4 className="text-2xl font-bold text-green-900">Example Solution</h4>
                                        </div>
                                        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto shadow-lg mb-6">
                                            <pre className="text-sm md:text-base leading-relaxed"><code>{lesson.exercise.solution}</code></pre>
                                        </div>
                                        <div className="bg-green-200/50 p-6 rounded-lg">
                                            <p className="text-base text-gray-800">
                                                <strong className="font-semibold text-gray-900">💡 Tip:</strong> {lesson.exercise.solutionNote}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Summary */}
                        <div className="bg-gray-50 rounded-xl p-8 border-t-2 border-gray-200">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">🎉</span>
                                <h2 className="text-3xl font-bold text-gray-900">Congratulations!</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-700 mb-6">
                                You've completed this lesson! Here's what you learned:
                            </p>
                            <div className="space-y-4">
                                {lesson.summary.map((item: string, index: number) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                        <div className="flex-shrink-0 w-8 h-8 bg-yss-primary rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">✓</span>
                                        </div>
                                        <span className="text-base md:text-lg text-gray-800 pt-1">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
                            <Link
                                href={`/courses/${params.courseId}/lessons`}
                                className="inline-flex items-center gap-2 border-2 border-yss-primary text-yss-primary font-bold px-8 py-4 rounded-lg hover:bg-yss-primary hover:text-white transition-all"
                            >
                                <span>←</span>
                                <span>Back to Lessons</span>
                            </Link>
                            <div className="text-gray-400 font-medium px-8 py-4">
                                End of Course
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
