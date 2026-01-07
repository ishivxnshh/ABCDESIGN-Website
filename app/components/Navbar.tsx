import { Link, NavLink } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Work", path: "/work" },
    ];

    return (
        <nav 
            className="sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300 bg-brand-dark-navy"
            style={{
                boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'
            }}
        >
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <Link 
                    to="/" 
                    className="flex items-center transition-transform duration-300 hover:scale-105 focus-ring rounded-md"
                >
                    <img src="/logo.svg" alt="ABCDESIGN" className="h-8 w-auto brightness-0 invert" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md group focus-ring",
                                    isActive 
                                        ? "text-white" 
                                        : "text-white/80 hover:text-white"
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-accent-blue rounded-full" />
                                    )}
                                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-accent-blue rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </>
                            )}
                        </NavLink>
                    ))}
                    <Button 
                        asChild 
                        className="ml-4 bg-white text-brand-blue hover:bg-white/90 transition-all duration-300"
                    >
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-2 text-white/90 hover:text-white rounded-md transition-colors focus-ring"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 transition-transform duration-200 rotate-90" />
                        ) : (
                            <Menu className="h-6 w-6 transition-transform duration-200" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div 
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen 
                        ? "max-h-96 opacity-100" 
                        : "max-h-0 opacity-0"
                )}
            >
                <div className="border-t border-white/20 bg-brand-dark-navy px-4 py-4 shadow-lg">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    cn(
                                        "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus-ring",
                                        isActive
                                            ? "text-white bg-white/20"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    )
                                }
                                onClick={() => setIsOpen(false)}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Button 
                            asChild 
                            className="w-full mt-4 bg-white text-brand-blue hover:bg-white/90"
                            style={{
                                animationDelay: `${navLinks.length * 50}ms`,
                                animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                            }}
                        >
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
