import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Work", path: "/work" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="/logo.svg" alt="ABCDESIGN" className="h-8 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-slate-600"
                                )
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Button asChild>
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t bg-white p-4 absolute w-full shadow-lg">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm font-medium text-slate-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
