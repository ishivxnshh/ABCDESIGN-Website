import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link, useNavigate } from "@remix-run/react";
import { BarChart, Globe, Megaphone, PenTool, Image, Code, ArrowRight } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "Our Services - ABCDESIGN" }];
};

export default function Services() {
    const navigate = useNavigate();
    const services = [
        {
            icon: Megaphone,
            title: "Monthly Retainer Packages",
            desc: "Flexible monthly plans for continuous growth and digital marketing success.",
            items: ["Standard Plan ₹30,000/mo", "Growth Plan ₹60,000/mo", "All-in-one Solutions", "Scalable Services"],
            link: "/services/retainer-packages"
        },
        {
            icon: Globe,
            title: "Technical & Web",
            desc: "Complete website care including maintenance, SEO, and speed optimization.",
            items: ["Website Maintenance", "On-Page & Off-Page SEO", "Speed Optimization", "Core Web Vitals"],
            link: "/services/technical-web"
        },

        {
            icon: Megaphone,
            title: "Social Media Optimization",
            desc: "Build and engage your audience across multiple social media platforms.",
            items: ["Platform Management", "Community Engagement", "WhatsApp Bots Integration"],
            link: "/services/social-media"
        },
        {
            icon: PenTool,
            title: "Content & Creative",
            desc: "Compelling content and creative assets that capture attention and drive engagement.",
            items: ["Graphic Artworks", "Content Writing", "Video Content Creation", "Raw Video Editing", "Advanced Copywriting"],
            link: "/services/content-creative"
        },
        {
            icon: Image,
            title: "Production & Branding",
            desc: "Professional photography, videography, and branding services for your business.",
            items: ["Personal Branding", "Drone Shooting", "Product Photography", "Product Videography"],
            link: "/services/production-branding"
        },
        {
            icon: Code,
            title: "Web Design & Development",
            desc: "Custom websites and e-commerce solutions tailored to your business needs.",
            items: ["Corporate Websites", "Portfolio Websites", "E-commerce Solutions", "Shopify Setup"],
            link: "/services/web-design-development"
        },
        {
            icon: BarChart,
            title: "Paid Campaigns & Marketing",
            desc: "Data-driven advertising campaigns across multiple channels for maximum ROI.",
            items: ["Google Ads", "Meta (FB/Insta) Ads", "Email Marketing", "WhatsApp Marketing"],
            link: "/services/paid-campaigns"
        },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-brand-blue pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark-navy/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        Our Expertise
                    </h1>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        We offer a suite of integrated services designed to elevate your business.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Card key={i} className="group flex flex-col border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                            <CardHeader>
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 w-fit">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-base text-slate-600 mt-2">
                                    {service.desc}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-4 border-t border-slate-50">
                                <Button
                                    className="w-full bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                                    onClick={() => navigate(service.link)}
                                >
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Not sure where to start?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                        Book a free consultation with our digital experts to analyze your needs and find the perfect solution for your business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
                                Schedule Consultation
                            </Button>
                        </Link>
                        <Link to="/pricing">
                            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                                View Packages
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
