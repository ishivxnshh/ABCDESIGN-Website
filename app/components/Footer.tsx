import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="inline-block mb-4">
                        <img src="/logo.svg" alt="ABCDESIGN" className="h-8 w-auto bg-white rounded-md px-2 py-1" />
                    </Link>
                    <p className="text-slate-400 max-w-sm">
                        Empowering enterprises with digital excellence. Trusted by industry leaders for marketing, technology, and growth solutions.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-slate-200">Company</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-slate-200">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} ABCDESIGN. All rights reserved.
            </div>
        </footer>
    );
}
