import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-deep text-white pt-[30px] pb-[15px] md:pt-[40px] md:pb-[20px]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
                    {/* Column 1: Featured Links */}
                    <div className="space-y-6">
                        <Link to="/services" className="block text-subheading font-semibold tracking-wide uppercase pb-2 border-b border-white/10 hover:text-white transition-colors">
                            Future of Digital
                        </Link>
                        <Link to="/about" className="block text-subheading font-semibold tracking-wide uppercase pb-2 border-b border-white/10 hover:text-white transition-colors">
                            Our History
                        </Link>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-subheading font-semibold tracking-wide uppercase pb-2 border-b border-white/10 mb-6 text-sm">
                            Services
                        </h4>
                        <ul className="space-y-3 text-[13px] text-white/70">
                            <li><Link to="/services" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Technology Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Branding & Design</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Growth Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-subheading font-semibold tracking-wide uppercase pb-2 border-b border-white/10 mb-6 text-sm">
                            Company
                        </h4>
                        <ul className="space-y-3 text-[13px] text-white/70">
                            <li><Link to="/about" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link to="/work" className="hover:text-white transition-colors">Our Work</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Leadership</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <Link to="/contact" className="block text-subheading font-semibold tracking-wide uppercase pb-2 border-b border-white/10 mb-6 hover:text-white transition-colors text-sm">
                            Contact
                        </Link>
                        <div className="text-[13px] text-white/70 space-y-2">
                            <p>Get in touch with our enterprise team for a consultation.</p>
                            <Link to="/contact" className="inline-block mt-4 text-white font-medium hover:underline">
                                Reach Out &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 w-full">
                    {/* Socials */}
                    <div className="mb-6">
                        <h5 className="text-subheading text-xs font-semibold tracking-widest uppercase mb-4">Social Media</h5>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white hover:text-subheading transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-white hover:text-subheading transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-white hover:text-subheading transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-white hover:text-subheading transition-colors"><Youtube className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Copyright & Legal */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/60 pt-8 border-t border-white/10">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <Link to="/privacy" className="hover:text-white transition-colors">Legal Disclaimer</Link>
                            <span className="text-white/20">|</span>
                            <Link to="/terms" className="hover:text-white transition-colors">Open Source License Disclosure</Link>
                        </div>
                        <div>
                            &copy; {new Date().getFullYear()}. All rights reserved. ABCDESIGN.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
