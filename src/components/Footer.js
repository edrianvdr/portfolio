import Navigation from '../components/Navigation';

function Footer() {

    return (
        <>
            <footer className="w-full border-t bg-blue-800 text-white py-4 text-center text-xs sm:text-sm md:text-lg mt-8">
                <Navigation />
                <p>
                    © 2024 All Rights Reserved | Edrian Delos Reyes
                </p>
                <div className="flex items-center justify-center text-2xl no-underline pt-4">
                    <a className="" href="https://www.facebook.com/edrianvdr21/">
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="pl-4" href="https://www.instagram.com/edrianvdr/">
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="pl-4" href="https://twitter.com/EdrianDR1999">
                        <span className="sr-only">X</span>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="pl-4" href="https://www.linkedin.com/in/edrian-delos-reyes-1a31151a6/">
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer;