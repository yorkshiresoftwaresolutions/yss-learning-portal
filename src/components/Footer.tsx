export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
            {/* Main Footer Content */}
            <div className="container-wide py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">
                            Yorkshire Software Solutions
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            Empowering beginners to learn web development through clear,
                            practical, and engaging lessons. Start your coding journey with us.
                        </p>
                        <a
                            href="https://yorkshiresoftwaresolutions.co.uk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-medium group"
                        >
                            <span>Visit our main site</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                >
                                    MDN Web Docs
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.w3schools.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                >
                                    W3Schools
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://code.visualstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                >
                                    VS Code Editor
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://codepen.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                >
                                    CodePen
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://jsfiddle.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                                >
                                    JSFiddle
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-wide py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {currentYear} Yorkshire Software Solutions Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <span className="text-gray-500">
                                Made with care in Yorkshire
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
