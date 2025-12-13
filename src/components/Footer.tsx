export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()} Yorkshire Software Solutions Ltd. All rights reserved.
                    </p>
                    <p>
                        <a
                            href="https://yorkshiresoftwaresolutions.co.uk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yss-primary-light hover:text-white transition-colors"
                        >
                            Visit our main site
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
