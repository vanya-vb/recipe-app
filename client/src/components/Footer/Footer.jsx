import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-night/80 text-white py-3">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-xs">
                <span>© 2025 Developed by Vanya</span>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/vanya-vb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-tangerine transition"
                    >
                        <FaGithub size={16} />
                    </a>
                    <a
                        href="https://linkedin.com/in/vanya-b-9893851bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-tangerine transition"
                    >
                        <FaLinkedin size={16} />
                    </a>
                    <a
                        href="https://vanya-vb.github.io/portfolio-page/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-tangerine transition"
                    >
                        <FaGlobe size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}