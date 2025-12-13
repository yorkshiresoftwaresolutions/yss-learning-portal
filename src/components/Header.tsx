import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container-wide">
                <div className="flex justify-between items-center h-18">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center group"
                    >
                        <div className="relative">
                            <Image
                                src="/yorkshire_logo.png"
                                alt="Yorkshire Software Solutions"
                                width={200}
                                height={54}
                                className="h-11 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-1">
                        <Link
                            href="/"
                            className="relative px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors rounded-lg hover:bg-gray-50"
                        >
                            Home
                        </Link>
                        <Link
                            href="/courses/beginners-web-dev"
                            className="relative px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors rounded-lg hover:bg-gray-50"
                        >
                            Course
                        </Link>
                        <div className="w-px h-6 bg-gray-200 mx-2" />
                        <Link
                            href="/courses/beginners-web-dev/lessons"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yss-primary text-white font-semibold text-sm rounded-xl hover:bg-yss-primary-dark transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            <span>Start Learning</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
