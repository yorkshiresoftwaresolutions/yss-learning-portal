'use client';

import Link from 'next/link';
import { useState } from 'react';

// Lesson 1 content only
const lessonContent: Record<string, Record<string, any>> = {
    'beginners-web-dev': {
        '1': {
            id: '1',
            title: 'Your First Program (Interactive Greeting Card)',
            courseTitle: 'A Beginner\'s Guide to Web Development',
            duration: '1-2 Hours (Self-Paced)',
            introduction: 'Welcome to your first web development lesson! The goal is to get you coding immediately using three fundamental technologies that power the entire web: HTML for structure and content, CSS for style and appearance, and JavaScript for interactivity. You\'ll use CodePen to write and see your code results instantly—no setup required!',
            sections: [
                {
                    title: 'Pre-Requisites',
                    content: 'Before you begin, please complete the following setup steps:',
                    steps: [
                        {
                            title: 'Create a Free CodePen Account',
                            content: 'Go to CodePen and sign up for a free account. This allows you to save your projects (called "Pens") and share them for review.',
                            link: 'https://codepen.io/',
                        },
                        {
                            title: 'Start a New Pen',
                            content: 'Once signed in, click the "Create" menu in the top navigation and select "New Pen." This will open the three coding panels you need: HTML, CSS, and JS.',
                        },
                    ],
                },
                {
                    title: 'Task 1: The "Hello World" Foundation (HTML)',
                    content: 'Create the main title of your page.',
                    steps: [
                        {
                            title: 'Navigate to the HTML Panel',
                            content: 'Find the HTML panel in CodePen and type the following code:',
                            code: `<h1>Hello World</h1>`,
                            codeLanguage: 'HTML',
                        },
                        {
                            title: 'Check Your Result',
                            content: 'Look at the bottom half of the screen (the "Result" area). You should immediately see large text appear.',
                        },
                    ],
                },
                {
                    title: 'Task 2: Adding the Message and Input (HTML)',
                    content: 'Add the interactive parts—the text box for the name and the greeting message.',
                    steps: [
                        {
                            title: 'Add Interactive Elements',
                            content: 'In the HTML Panel, add the following code below the <h1> tag:',
                            code: `<input type="text" id="name-input" placeholder="Enter your name here">
<button onclick="greetUser()">Say Hello</button>

<p id="greeting-message">Hello Awais, nice to meet you.</p>`,
                            codeLanguage: 'HTML',
                        },
                    ],
                    note: 'We used the "id" attribute to give elements unique identifiers so our JavaScript can find them later. The button has an "onclick" action to run a JS function called greetUser().',
                },
                {
                    title: 'Task 3: Hiding the Message (CSS)',
                    content: 'Make the greeting message invisible until the button is clicked.',
                    steps: [
                        {
                            title: 'Navigate to the CSS Panel',
                            content: 'Type the following code. This targets the element with the ID "greeting-message" and sets its display property to none:',
                            code: `#greeting-message {
  display: none; /* This makes the message invisible by default */
}`,
                            codeLanguage: 'CSS',
                        },
                        {
                            title: 'Check Your Result',
                            content: 'The text "Hello Awais, nice to meet you" should disappear from the results screen.',
                        },
                    ],
                },
                {
                    title: 'Task 4: Implementing the Interactive Logic (JavaScript)',
                    content: 'Write the code that runs when the button is clicked to show the message and update the name.',
                    steps: [
                        {
                            title: 'Navigate to the JS Panel',
                            content: 'Define the greetUser() function that the button is looking for:',
                            code: `function greetUser() {
  // 1. Get the name the user typed in the box
  const userName = document.getElementById('name-input').value;

  // 2. Find the message element
  const messageElement = document.getElementById('greeting-message');

  // 3. Update the message content with the new name
  messageElement.innerHTML = "Hello " + userName + ", nice to meet you!";

  // 4. Make the message visible
  messageElement.style.display = 'block';
}`,
                            codeLanguage: 'JavaScript',
                        },
                        {
                            title: 'Test Your Code',
                            content: 'Type your name into the text box and click the "Say Hello" button. The greeting message should appear, customized with your name!',
                        },
                    ],
                },
                {
                    title: 'Task 5: Setting the Page Title (HTML Settings)',
                    content: 'Set the text that appears in the browser tab.',
                    steps: [
                        {
                            title: 'Open CodePen Settings',
                            content: 'Look for the "Settings" button (usually at the top right of the CodePen editor). Click "Settings" and go to the "HTML" tab.',
                        },
                        {
                            title: 'Add the Title',
                            content: 'In the box labeled "Stuff for <head>", type the following:',
                            code: `<title>My First Interactive Page</title>`,
                            codeLanguage: 'HTML',
                        },
                        {
                            title: 'Save Your Pen',
                            content: 'Save your Pen and observe the title of the Pen or your browser tab update.',
                        },
                    ],
                },
                {
                    title: 'Task 6: Adding Basic Style (CSS)',
                    content: 'Change the page background and text color to customize the look.',
                    steps: [
                        {
                            title: 'Add Styling',
                            content: 'Return to the CSS Panel and add the following code above or below your existing CSS rule:',
                            code: `body {
  background-color: #282c34; /* Dark gray background */
  color: #61dafb; /* Light blue text color */
  text-align: center; /* Center all content */
  padding-top: 50px;
}`,
                            codeLanguage: 'CSS',
                        },
                        {
                            title: 'Check Your Result',
                            content: 'The entire background should change to a dark color, and your text should be light blue and centered.',
                        },
                    ],
                },
            ],
            exercise: {
                title: 'Practice Exercise',
                description: 'Try modifying your greeting card with these challenges:',
                tasks: [
                    'Change the greeting message to say something different',
                    'Try different background and text colors in the CSS',
                    'Add another heading or paragraph to your page',
                ],
                hint: 'Experiment freely! You can always undo changes or start a new Pen.',
                solution: `<!-- HTML -->
<h1>Hello World</h1>
<input type="text" id="name-input" placeholder="Enter your name here">
<button onclick="greetUser()">Say Hello</button>
<p id="greeting-message">Hello Friend, nice to meet you!</p>

<!-- CSS -->
#greeting-message {
  display: none;
}

body {
  background-color: #282c34;
  color: #61dafb;
  text-align: center;
  padding-top: 50px;
}

<!-- JavaScript -->
function greetUser() {
  const userName = document.getElementById('name-input').value;
  const messageElement = document.getElementById('greeting-message');
  messageElement.innerHTML = "Hello " + userName + ", nice to meet you!";
  messageElement.style.display = 'block';
}`,
                solutionNote: 'This is the complete code for all three panels. Feel free to customize it further!',
            },
            summary: [
                '<strong>HTML:</strong> You learned how to define titles, paragraphs, buttons, and input fields using tags and unique ID attributes',
                '<strong>CSS:</strong> You learned how to target an element using its ID (#greeting-message) and control its appearance and visibility (display: none)',
                '<strong>JavaScript:</strong> You wrote your first function (greetUser()) which can read user input (.value) and dynamically change content (.innerHTML) and style (.style.display)',
            ],
            nextSteps: {
                title: 'What\'s Next?',
                description: 'You are now ready to move into a comprehensive, structured learning path. The next recommended step is to start the freeCodeCamp Responsive Web Design Certification, which will teach you HTML and CSS fundamentals in detail.',
                resources: [
                    {
                        name: 'freeCodeCamp Responsive Web Design',
                        url: 'https://www.freecodecamp.org/learn/responsive-web-design-v9',
                        description: 'Start Learning',
                    },
                ],
            },
            additionalResources: [
                {
                    topic: 'CodePen Basics',
                    url: 'https://www.youtube.com/watch?v=zbzTAXF1bOc',
                },
                {
                    topic: 'HTML Tag Reference',
                    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax',
                },
                {
                    topic: 'CSS Selectors Explained',
                    url: 'http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/css/css_syntax.asp.html',
                },
                {
                    topic: 'JavaScript getElementById',
                    url: 'https://www.youtube.com/watch?v=RSg2DroZINM',
                },
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
                                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
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
                                                                    <span className="text-xs text-gray-400 font-medium">{step.codeLanguage || 'HTML'}</span>
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
                                                        {step.link && (
                                                            <a
                                                                href={step.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-2 group"
                                                            >
                                                                <span>Visit {new URL(step.link).hostname}</span>
                                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                            </a>
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
                                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
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
                                                <span className="text-xs text-gray-400 font-medium">Complete Code</span>
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
                                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
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
                                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span
                                            className="text-gray-700 font-medium [&_strong]:text-gray-900"
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Steps */}
                        {lesson.nextSteps && (
                            <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-50/50 border-blue-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-600 font-medium uppercase tracking-wider">Continue Learning</p>
                                        <h2 className="text-2xl font-bold text-gray-900">{lesson.nextSteps.title}</h2>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 mb-6">
                                    {lesson.nextSteps.description}
                                </p>

                                <div className="space-y-3">
                                    {lesson.nextSteps.resources.map((resource: any, index: number) => (
                                        <a
                                            key={index}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                                <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{resource.name}</h3>
                                                <p className="text-sm text-gray-500">{resource.description}</p>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Additional Resources */}
                        {lesson.additionalResources && lesson.additionalResources.length > 0 && (
                            <div className="card p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
                                        <svg className="w-7 h-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Learn More</p>
                                        <h2 className="text-2xl font-bold text-gray-900">Additional Resources</h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {lesson.additionalResources.map((resource: any, index: number) => (
                                        <a
                                            key={index}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{resource.topic}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

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
