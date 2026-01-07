import { Link } from "@remix-run/react";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-brand-dark-navy text-white pt-20 pb-8 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Logo */}
                <div className="mb-12">
                    <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
                        <img 
                            src="/logo.svg" 
                            alt="ABCDESIGN" 
                            className="h-8 w-auto brightness-0 invert" 
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Featured Links */}
                    <div className="space-y-6">
                        <Link 
                            to="/services" 
                            className="group flex items-center justify-between text-brand-neutral-light font-bold tracking-wide uppercase pb-3 border-b border-white/10 hover:text-brand-accent-blue transition-all duration-300"
                        >
                            <span>Future of Digital</span>
                            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                        <Link 
                            to="/about" 
                            className="group flex items-center justify-between text-brand-neutral-light font-bold tracking-wide uppercase pb-3 border-b border-white/10 hover:text-brand-accent-blue transition-all duration-300"
                        >
                            <span>Our History</span>
                            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-white font-bold tracking-wide uppercase pb-3 border-b border-white/20 mb-6 text-sm">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm text-brand-neutral-light">
                            <li><Link to="/services" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Overview</Link></li>
                            <li><Link to="/services" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Digital Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Technology Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Branding & Design</Link></li>
                            <li><Link to="/services" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Growth Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-white font-bold tracking-wide uppercase pb-3 border-b border-white/20 mb-6 text-sm">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm text-brand-neutral-light">
                            <li><Link to="/about" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Overview</Link></li>
                            <li><Link to="/work" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Our Work</Link></li>
                            <li><Link to="/about" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Leadership</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">Careers</Link></li>
                            <li><Link to="/contact#faqs" className="hover:text-brand-accent-blue hover:translate-x-1 inline-block transition-all duration-200">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold tracking-wide uppercase pb-3 border-b border-white/20 mb-6 text-sm">
                            Contact
                        </h4>
                        <div className="text-sm text-brand-neutral-light space-y-3">
                            <p className="leading-relaxed">Get in touch with our enterprise team for a consultation.</p>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center gap-2 mt-4 text-white font-semibold hover:text-brand-accent-blue transition-colors duration-200 group"
                            >
                                Reach Out
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 w-full border-t border-white/10">
                    {/* Socials */}
                    <div className="mb-8">
                        <h5 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Follow Us</h5>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Instagram, label: "Instagram" },
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Youtube, label: "YouTube" }
                            ].map((social, idx) => (
                                <a 
                                    key={idx}
                                    href="#" 
                                    aria-label={social.label}
                                    className="group relative w-12 h-12 rounded-full bg-white/5 hover:bg-brand-accent-blue border border-white/20 hover:border-brand-accent-blue flex items-center justify-center transition-all duration-300"
                                >
                                    <social.icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright & Legal */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-brand-neutral-light/70 pt-8 border-t border-white/5">
                        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                            <Link to="/privacy" className="hover:text-brand-accent-blue transition-colors duration-200">Legal Disclaimer</Link>
                            <span className="text-white/20">•</span>
                            <Link to="/terms" className="hover:text-brand-accent-blue transition-colors duration-200">Open Source License Disclosure</Link>
                        </div>
                        <div className="font-medium">
                            &copy; {new Date().getFullYear()} ABCDESIGN. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
