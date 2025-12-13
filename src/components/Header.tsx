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
                    <nav className="flex items-center">
                        <Link
                            href="/"
                            className="relative px-4 py-2 text-gray-600 hover:text-blue-700 font-medium text-sm transition-colors rounded-lg hover:bg-blue-50"
                        >
                            Home
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
