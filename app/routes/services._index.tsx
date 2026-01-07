import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link, useNavigate } from "@remix-run/react";
import { BarChart, Globe, Megaphone, PenTool, Search, CheckCircle, ArrowRight } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "Our Services - ABCDESIGN" }];
};

export default function Services() {
    const navigate = useNavigate();
    const services = [
        { 
            icon: Megaphone, 
            title: "Digital Marketing", 
            desc: "Comprehensive strategies to reach your target audience and drive conversions.", 
            items: ["Social Media Marketing", "Email Campaigns", "PPC Advertising", "Content Marketing", "Marketing Automation", "Influencer Partnerships"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            link: "/services/digital-marketing"
        },
        { 
            icon: Search, 
            title: "SEO & Performance", 
            desc: "Optimize your digital presence to dominate search results and improve ROI.", 
            items: ["Technical SEO", "Content Strategy", "Performance Audits", "Link Building", "Local SEO", "Analytics & Reporting"],
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop",
            link: "/services/seo-performance"
        },
        { 
            icon: PenTool, 
            title: "Branding & Creative", 
            desc: "Build a brand identity that resonates and endures.", 
            items: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Collateral", "Brand Strategy", "Creative Direction"],
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
            link: "/services/branding-creative"
        },
        { 
            icon: Globe, 
            title: "Web Development", 
            desc: "Scalable, secure, and high-performance websites built for enterprise.", 
            items: ["Custom Web Apps", "CMS Implementation", "E-commerce Solutions", "Progressive Web Apps", "API Development", "Cloud Infrastructure"],
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            link: "/services/web-development"
        },
        { 
            icon: BarChart, 
            title: "Growth Consulting", 
            desc: "Data-backed insights to unlock new revenue streams.", 
            items: ["Market Analysis", "Process Optimization", "Digital Transformation", "CRO Strategy", "Business Intelligence", "KPI Tracking"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            link: "/services/growth-consulting"
        },
    ];

    const process = [
        { step: "01", title: "Discovery", desc: "We start by understanding your business, goals, and challenges through in-depth consultation." },
        { step: "02", title: "Strategy", desc: "Our team develops a comprehensive roadmap tailored to your specific needs and objectives." },
        { step: "03", title: "Execution", desc: "We implement solutions with precision, keeping you informed at every milestone." },
        { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement ensure sustained growth and performance." }
    ];

    return (
        <div className="bg-white min-h-screen pb-12 sm:pb-16 md:pb-20">
            <div className="relative bg-brand-neutral-light/30 py-12 sm:py-16 md:py-20 border-b border-brand-neutral-light overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,61,122,0.05),transparent_70%)]" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                        Our <span className="text-brand-blue">Expertise</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                        We offer a suite of integrated services designed to elevate your business.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, i) => (
                        <Card key={i} className="group flex flex-col border-2 border-brand-neutral-light shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white hover:border-brand-accent-blue/30 overflow-hidden">
                            <CardHeader className="relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <div className="inline-flex p-2.5 sm:p-3 rounded-xl bg-brand-blue text-white mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-foreground group-hover:text-brand-blue transition-colors">{service.title}</CardTitle>
                                    <CardDescription className="text-foreground/70 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">{service.desc}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 pt-4 sm:pt-6">
                                <ul className="space-y-2 sm:space-y-3">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/70">
                                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-4 sm:pt-6">
                                <Button 
                                    variant="ghost" 
                                    className="w-full text-brand-blue hover:text-white hover:bg-brand-blue group/btn transition-all duration-300 text-sm sm:text-base"
                                    onClick={() => navigate(service.link)}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        Learn More 
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </span>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Our Process */}
            <div className="bg-brand-neutral-light/20 py-12 sm:py-16 md:py-24 border-y border-brand-neutral-light">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Our Process</h2>
                        <p className="text-base sm:text-lg text-foreground/70">A proven methodology that delivers results</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {process.map((item, i) => (
                            <div key={i} className="group text-center relative">
                                {i < 3 && (
                                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-brand-accent-blue/30 z-0" />
                                )}
                                <div className="relative z-10">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose ABCDESIGN</h2>
                        <p className="text-foreground/70">Enterprise-grade solutions backed by expertise</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Proven Track Record", desc: "Over 500 successful projects delivered to satisfied clients" },
                            { title: "Industry Expertise", desc: "Deep knowledge across finance, retail, healthcare, and tech sectors" },
                            { title: "Scalable Solutions", desc: "Built to grow with your business from startup to enterprise" },
                            { title: "Dedicated Support", desc: "24/7 support and ongoing optimization for continuous improvement" },
                            { title: "Data-Driven Approach", desc: "Every decision backed by analytics and measurable KPIs" },
                            { title: "Cutting-Edge Technology", desc: "Latest tools and frameworks for maximum performance" }
                        ].map((benefit, i) => (
                            <Card key={i} className="border-2 border-brand-neutral-light bg-white shadow-sm hover:shadow-lg hover:border-brand-accent-blue/30 transition-all duration-300">
                                <CardContent className="pt-6">
                                    <CheckCircle className="h-8 w-8 text-brand-blue mb-3" />
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-foreground/70 text-sm">{benefit.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <Card className="bg-brand-blue text-white border-none shadow-2xl">
                    <CardContent className="pt-12 pb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our services can help you achieve your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-white/90 transition-all duration-300">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all duration-300">
                                <Link to="/work">View Case Studies</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
