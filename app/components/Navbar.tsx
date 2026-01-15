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
        { name: "Pricing", path: "/pricing" },
    ];

    return (
        <nav
            className={cn(
                "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 border border-white/10",
                scrolled ? "top-2" : "top-4",
                isOpen
                    ? "w-[95%] rounded-3xl bg-brand-dark-navy" // Keep full width when mobile menu is open
                    : cn(
                        "rounded-full bg-brand-dark-navy/80 backdrop-blur-md",
                        scrolled ? "w-[90%] md:w-[65%]" : "w-[92%] md:w-[80%]" // Shrink width when scrolled and menu closed
                    ),
                scrolled ? "shadow-xl" : "shadow-lg"
            )}
        >
            <div className={cn("px-6 flex items-center justify-between md:gap-8 transition-all duration-300", scrolled ? "h-14" : "h-16")}>
                <Link
                    to="/"
                    className="flex items-center transition-transform duration-300 hover:scale-105 focus-ring rounded-md"
                >
                    <img
                        src="/logo.svg"
                        alt="ABCDESIGN"
                        className="h-6 w-auto brightness-0 invert"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-white/10 group focus-ring",
                                    isActive
                                        ? "text-white bg-white/10"
                                        : "text-white/80 hover:text-white"
                                )
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Button
                        asChild
                        className="ml-4 rounded-full bg-white text-brand-blue hover:bg-brand-soft-blue hover:text-white transition-all duration-300"
                    >
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white/90 hover:text-white rounded-full transition-colors focus-ring hover:bg-white/10"
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
                <div className="px-4 pb-6 space-y-2">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 focus-ring",
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
                        className="w-full mt-4 rounded-xl bg-white text-brand-blue hover:bg-white/90"
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
        </nav>
    );
}
