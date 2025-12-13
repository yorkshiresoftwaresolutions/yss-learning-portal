'use client';

import Link from 'next/link';
import { useState, use } from 'react';

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
                    title: 'Getting Started',
                    content: 'First, let\'s set up your coding environment. CodePen is a free online code editor where you can write HTML, CSS, and JavaScript and see the results instantly.',
                    steps: [
                        {
                            title: 'Create a Free CodePen Account',
                            content: 'Go to CodePen and sign up for a free account. This allows you to save your projects (called "Pens") and share them.',
                            link: 'https://codepen.io/',
                            tip: 'CodePen is popular with web developers for quickly testing ideas and sharing code snippets. Your account is free forever!',
                        },
                        {
                            title: 'Start a New Pen',
                            content: 'Once signed in, click "Create" in the top navigation and select "New Pen." You\'ll see three panels at the top: HTML (left), CSS (middle), and JS (right). The bottom shows your live preview.',
                            image: '/codepen.jpg',
                            tip: 'You\'ll mainly work in the HTML and JS panels today. The CSS panel is for styling — we\'ll keep it simple for now.',
                        },
                    ],
                },
                {
                    title: 'Step 1: Displaying Text',
                    content: 'Let\'s start with the basics — displaying text on a web page using HTML.',
                    steps: [
                        {
                            title: 'Add a Heading',
                            content: 'Click in the HTML panel (top-left) and type the following code:',
                            code: `<h1>Hello World</h1>`,
                            codeLanguage: 'HTML',
                            tip: 'The <h1> tag creates a "heading level 1" — the biggest heading. The text goes between the opening <h1> and closing </h1> tags.',
                        },
                        {
                            title: 'Check Your Result',
                            content: 'Look at the preview area at the bottom. You should see large bold text that says "Hello World". The <h1> tag creates a main heading.',
                            preview: {
                                type: 'step1-heading',
                                caption: 'Your first HTML heading!',
                            },
                            tip: 'If nothing appears, make sure you typed the code exactly as shown, including the angle brackets < and >.',
                        },
                    ],
                    learnMore: {
                        content: 'HTML uses "tags" like <h1> to tell the browser what to display. Tags usually come in pairs: an opening tag <h1> and a closing tag </h1>. There are 6 heading levels (<h1> to <h6>), with <h1> being the largest.',
                        link: 'https://www.w3schools.com/html/html_headings.asp',
                        linkText: 'W3Schools: HTML Headings',
                    },
                },
                {
                    title: 'Step 2: Adding a Greeting Message',
                    content: 'Now let\'s add a paragraph with a greeting message below the heading.',
                    steps: [
                        {
                            title: 'Add a Paragraph',
                            content: 'Add this code below your <h1> tag:',
                            code: `<p>Hello friend, nice to meet you!</p>`,
                            codeLanguage: 'HTML',
                            tip: 'The <p> tag creates a paragraph. Your HTML panel should now have two lines: the <h1> on top and the <p> below it.',
                        },
                        {
                            title: 'Check Your Result',
                            content: 'You should now see the heading and a greeting message below it. The <p> tag creates a paragraph of text.',
                            preview: {
                                type: 'step2-greeting',
                                caption: 'A heading with a greeting message',
                            },
                            tip: 'Notice the paragraph text is smaller than the heading. HTML uses different tags to show the importance and size of text.',
                        },
                    ],
                    learnMore: {
                        content: 'The <p> tag defines a paragraph. Browsers automatically add some space (margin) before and after each paragraph. Your HTML panel should now have two lines: the <h1> heading and the <p> paragraph.',
                        link: 'https://www.w3schools.com/html/html_paragraphs.asp',
                        linkText: 'W3Schools: HTML Paragraphs',
                    },
                },
                {
                    title: 'Step 3: Creating a Button to Show/Hide the Message',
                    content: 'Let\'s make things interactive! We\'ll add a button that shows and hides the greeting message.',
                    steps: [
                        {
                            title: 'Add an ID to the Paragraph',
                            content: 'First, update your paragraph to give it a unique name (called an "id") so JavaScript can find it. Change your paragraph to:',
                            code: `<p id="greeting">Hello friend, nice to meet you!</p>`,
                            codeLanguage: 'HTML',
                            tip: 'An "id" is like giving your element a name tag. JavaScript will use this name to find and change the element. IDs must be unique — no two elements should have the same id.',
                        },
                        {
                            title: 'Add a Button',
                            content: 'Add this button code between your <h1> and <p> tags:',
                            code: `<button onclick="toggleGreeting()">Show/Hide Greeting</button>`,
                            codeLanguage: 'HTML',
                            tip: 'The onclick="toggleGreeting()" tells the browser: "When someone clicks this button, run the function called toggleGreeting."',
                        },
                        {
                            title: 'Add the JavaScript',
                            content: 'Now click in the JS panel (top-right) and add this code that runs when the button is clicked:',
                            code: `function toggleGreeting() {
  var greeting = document.getElementById("greeting");

  if (greeting.style.display === "none") {
    greeting.style.display = "block";
  } else {
    greeting.style.display = "none";
  }
}`,
                            codeLanguage: 'JavaScript',
                            tip: 'This code creates a "function" — a reusable block of code. It finds our paragraph by its id, then checks if it\'s hidden. If hidden, show it; if visible, hide it.',
                        },
                        {
                            title: 'Test It!',
                            content: 'Click the "Show/Hide Greeting" button. The message should disappear and reappear each time you click!',
                            preview: {
                                type: 'step3-button',
                                caption: 'Click the button to toggle the greeting',
                            },
                            tip: 'If clicking does nothing, check that the function name in onclick matches exactly what you wrote in the JS panel (toggleGreeting).',
                        },
                    ],
                    learnMore: {
                        content: 'The "id" attribute gives an element a unique name. JavaScript uses document.getElementById() to find elements by their id. The style.display property controls whether an element is visible ("block") or hidden ("none").',
                        link: 'https://www.w3schools.com/js/js_htmldom_html.asp',
                        linkText: 'W3Schools: JavaScript HTML DOM',
                    },
                },
                {
                    title: 'Step 4: Adding a Text Box for the User\'s Name',
                    content: 'Now let\'s personalize the greeting by letting users enter their name!',
                    steps: [
                        {
                            title: 'Add a Text Input',
                            content: 'Add this input box after your <h1> tag and before the button:',
                            code: `<input type="text" id="nameInput" placeholder="Enter your name">`,
                            codeLanguage: 'HTML',
                            tip: 'The <input> tag creates a text box. The placeholder text shows what to type but disappears when you start typing. We gave it an id so JavaScript can read what the user types.',
                        },
                        {
                            title: 'Update the Button',
                            content: 'Change your button to call a new function:',
                            code: `<button onclick="showGreeting()">Say Hello</button>`,
                            codeLanguage: 'HTML',
                            tip: 'We\'re changing the button to call a new function (showGreeting) that will do something different — update the greeting with the user\'s name.',
                        },
                        {
                            title: 'Update the JavaScript',
                            content: 'Replace all the code in your JS panel with this new code:',
                            code: `function showGreeting() {
  var name = document.getElementById("nameInput").value;
  var greeting = document.getElementById("greeting");

  greeting.innerHTML = "Hello " + name + ", nice to meet you!";
}`,
                            codeLanguage: 'JavaScript',
                            tip: 'The .value property reads what was typed in the input box. The .innerHTML property changes the text inside an element. The + symbol joins text pieces together.',
                        },
                        {
                            title: 'Test It!',
                            content: 'Type your name in the text box and click "Say Hello". The greeting should now include your name!',
                            preview: {
                                type: 'step4-personalized',
                                caption: 'A personalized greeting with your name!',
                            },
                            tip: 'Try clicking "Say Hello" without typing a name — you\'ll see "Hello , nice to meet you!" This is normal! In real apps, we\'d add checks for empty inputs.',
                        },
                    ],
                    learnMore: {
                        content: 'The <input> element creates a text box. The .value property gets whatever the user typed. We use .innerHTML to change what text appears inside an element. The "placeholder" attribute shows hint text when the input is empty.',
                        link: 'https://www.w3schools.com/html/html_form_input_types.asp',
                        linkText: 'W3Schools: HTML Input Types',
                    },
                },
                {
                    title: 'Step 5: Save Your Work',
                    content: 'Don\'t lose your creation! Save it to your CodePen account.',
                    steps: [
                        {
                            title: 'Save Your Pen',
                            content: 'Click the "Save" button in the top-right corner of CodePen. Your Pen will be saved to your account and you\'ll get a unique URL you can share.',
                            tip: 'Once saved, you can share the URL with friends or family to show them what you built! They\'ll be able to see and try your greeting card.',
                        },
                        {
                            title: 'Give It a Title',
                            content: 'Click on "Untitled" at the top of the page and rename your Pen to something like "My Greeting Card" so you can find it later.',
                            tip: 'Good naming helps you stay organized. As you create more Pens, descriptive titles make it easy to find your work.',
                        },
                    ],
                    learnMore: {
                        content: 'CodePen automatically saves your work as you type, but clicking Save ensures everything is stored. You can find all your saved Pens by clicking your profile picture and selecting "Your Work".',
                        link: 'https://blog.codepen.io/documentation/your-work/',
                        linkText: 'CodePen: Managing Your Work',
                    },
                },
            ],
            exercise: {
                title: 'Practice Challenges',
                description: 'Now that your greeting card works, try these modifications to learn more:',
                tasks: [
                    'Change the greeting to say "Welcome" instead of "Hello"',
                    'Add a second paragraph below the greeting with a fun fact about yourself',
                    'Try adding a "Clear" button that resets the greeting to its original message',
                    'Change "Hello World" to your own custom heading',
                ],
                hint: 'Don\'t be afraid to experiment! If something breaks, you can always undo with Ctrl+Z (or Cmd+Z on Mac).',
                solution: `=== HTML Panel ===
<h1>Hello World</h1>

<input type="text" id="nameInput" placeholder="Enter your name">
<button onclick="showGreeting()">Say Hello</button>

<p id="greeting">Hello friend, nice to meet you!</p>


=== JS Panel ===
function showGreeting() {
  var name = document.getElementById("nameInput").value;
  var greeting = document.getElementById("greeting");

  greeting.innerHTML = "Hello " + name + ", nice to meet you!";
}`,
                solutionNote: 'Copy each section into the corresponding panel in CodePen. The code is separated by panel for clarity.',
            },
            summary: [
                '<strong>HTML tags</strong> create content: &lt;h1&gt; for headings, &lt;p&gt; for paragraphs, &lt;button&gt; for buttons, and &lt;input&gt; for text boxes.',
                '<strong>The id attribute</strong> gives elements unique names so JavaScript can find and change them.',
                '<strong>JavaScript functions</strong> run when events happen (like clicking a button). They can read input values and change what\'s displayed on the page.',
            ],
            nextSteps: {
                title: 'What\'s Next?',
                description: 'You\'re ready for a comprehensive, structured learning path! We recommend freeCodeCamp\'s Responsive Web Design Certification — a completely free, self-paced course with hundreds of interactive exercises. Upon completion, you\'ll earn a verified certification that you can add to your LinkedIn profile or CV to showcase your skills.',
                resources: [
                    {
                        name: 'freeCodeCamp Responsive Web Design Certification',
                        url: 'https://www.freecodecamp.org/learn/responsive-web-design-v9',
                        description: 'Free • Self-paced • Earn a certificate',
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

// Preview component to show what the user should see
function CodePreview({ type, caption }: { type: string; caption: string }) {
    const PreviewWrapper = ({ children }: { children: React.ReactNode }) => (
        <div className="mt-4 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
            <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-300 flex items-center gap-2">
                <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-500 font-medium">Preview</span>
            </div>
            <div className="bg-white p-6">
                {children}
            </div>
            <div className="bg-gray-50 px-3 py-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic">{caption}</p>
            </div>
        </div>
    );

    // Step 1: Just a heading
    if (type === 'step1-heading') {
        return (
            <PreviewWrapper>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: 'black', margin: 0 }}>Hello World</h1>
            </PreviewWrapper>
        );
    }

    // Step 2: Heading + greeting paragraph
    if (type === 'step2-greeting') {
        return (
            <PreviewWrapper>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>Hello World</h1>
                <p style={{ color: 'black', margin: 0 }}>Hello friend, nice to meet you!</p>
            </PreviewWrapper>
        );
    }

    // Step 3: Heading + button + greeting (toggleable)
    if (type === 'step3-button') {
        return (
            <PreviewWrapper>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>Hello World</h1>
                <button
                    disabled
                    className="bg-gray-200 border border-gray-400 px-3 py-1 mb-4"
                    style={{ fontSize: '16px', color: 'black' }}
                >
                    Show/Hide Greeting
                </button>
                <p style={{ color: 'black', margin: 0 }}>Hello friend, nice to meet you!</p>
            </PreviewWrapper>
        );
    }

    // Step 4: Full personalized greeting
    if (type === 'step4-personalized') {
        return (
            <PreviewWrapper>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>Hello World</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value="Sarah"
                        disabled
                        className="border border-gray-300 px-2 py-1 mr-2"
                        style={{ fontSize: '16px', color: 'black' }}
                    />
                    <button
                        disabled
                        className="bg-gray-200 border border-gray-400 px-3 py-1"
                        style={{ fontSize: '16px', color: 'black' }}
                    >
                        Say Hello
                    </button>
                </div>
                <p style={{ color: 'black', margin: 0 }}>Hello Sarah, nice to meet you!</p>
            </PreviewWrapper>
        );
    }

    return null;
}

// Learn More toggle component
function LearnMoreToggle({ content, link, linkText }: { content: string; link: string; linkText: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            >
                <span className="flex items-center gap-2 text-blue-600 font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn more
                </span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-4 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 mb-3">{content}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {linkText}
                    </a>
                </div>
            )}
        </div>
    );
}

export default function LessonPage({
    params,
}: {
    params: Promise<{ courseId: string; lessonId: string }>;
}) {
    const { courseId, lessonId } = use(params);
    const [showSolution, setShowSolution] = useState(false);

    const lesson = lessonContent[courseId]?.[lessonId];

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
                            href={`/courses/${courseId}/lessons`}
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


                                {section.steps && (
                                    <div className="space-y-6">
                                        {section.steps.map((step: any, stepIndex: number) => (
                                            <div key={stepIndex} className="card p-4 md:p-6 lg:p-8 overflow-hidden">
                                                <div className="flex items-start gap-3 md:gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                                                        {stepIndex + 1}
                                                    </div>
                                                    <div className="flex-grow min-w-0">
                                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                                                            {step.content}
                                                        </p>
                                                        {step.code && (
                                                            <div className="code-block -mx-4 md:mx-0 rounded-none md:rounded-lg">
                                                                <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-700/50">
                                                                    <span className="text-xs text-gray-400 font-medium">{step.codeLanguage || 'HTML'}</span>
                                                                    <div className="flex gap-1.5">
                                                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                                                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                                                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                                                                    </div>
                                                                </div>
                                                                <pre className="p-3 md:p-5 overflow-x-auto custom-scrollbar">
                                                                    <code className="text-xs md:text-sm leading-relaxed">{step.code}</code>
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
                                                        {step.image && (
                                                            <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                                                <img
                                                                    src={step.image}
                                                                    alt="CodePen interface"
                                                                    className="w-full h-auto"
                                                                />
                                                            </div>
                                                        )}
                                                        {step.preview && (
                                                            <CodePreview type={step.preview.type} caption={step.preview.caption} />
                                                        )}
                                                        {step.tip && (
                                                            <div className="mt-4 flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                                                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                                </svg>
                                                                <p className="text-sm text-amber-800">{step.tip}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.learnMore && (
                                    <LearnMoreToggle
                                        content={section.learnMore.content}
                                        link={section.learnMore.link}
                                        linkText={section.learnMore.linkText}
                                    />
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
                                href={`/courses/${courseId}/lessons`}
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
