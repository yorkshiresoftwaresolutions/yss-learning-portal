import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/yorkshire_logo.png"
                            alt="Yorkshire Software Solutions"
                            width={180}
                            height={50}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    <nav className="flex gap-6">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-yss-primary font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                        >
                            Home
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
