import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { BarChart, Globe, Megaphone, PenTool, Search, CheckCircle, ArrowRight } from "lucide-react";

export function meta() {
    return [{ title: "Our Services - ABCDESIGN" }];
}

export default function Services() {
    const services = [
        { 
            icon: Megaphone, 
            title: "Digital Marketing", 
            desc: "Comprehensive strategies to reach your target audience and drive conversions.", 
            items: ["Social Media Marketing", "Email Campaigns", "PPC Advertising", "Content Marketing", "Marketing Automation", "Influencer Partnerships"],
            image: "/service-digital-marketing.svg",
            link: "/services/digital-marketing"
        },
        { 
            icon: Search, 
            title: "SEO & Performance", 
            desc: "Optimize your digital presence to dominate search results and improve ROI.", 
            items: ["Technical SEO", "Content Strategy", "Performance Audits", "Link Building", "Local SEO", "Analytics & Reporting"],
            image: "/service-web-dev.svg",
            link: "/services/seo-performance"
        },
        { 
            icon: PenTool, 
            title: "Branding & Creative", 
            desc: "Build a brand identity that resonates and endures.", 
            items: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Collateral", "Brand Strategy", "Creative Direction"],
            image: "/hero-graphic.svg",
            link: "/services/branding-creative"
        },
        { 
            icon: Globe, 
            title: "Web Development", 
            desc: "Scalable, secure, and high-performance websites built for enterprise.", 
            items: ["Custom Web Apps", "CMS Implementation", "E-commerce Solutions", "Progressive Web Apps", "API Development", "Cloud Infrastructure"],
            image: "/service-web-dev.svg",
            link: "/services/web-development"
        },
        { 
            icon: BarChart, 
            title: "Growth Consulting", 
            desc: "Data-backed insights to unlock new revenue streams.", 
            items: ["Market Analysis", "Process Optimization", "Digital Transformation", "CRO Strategy", "Business Intelligence", "KPI Tracking"],
            image: "/hero-graphic.svg",
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
        <div className="bg-slate-50 min-h-screen pb-20">
            <div className="bg-white py-16 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We offer a suite of integrated services designed to elevate your business.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Card key={i} className="flex flex-col border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <CardHeader>
                                <service.icon className="h-10 w-10 text-primary mb-3" />
                                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                                <CardDescription className="text-slate-500 mt-2">{service.desc}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-slate-50" asChild>
                                    <Link to={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Our Process */}
            <div className="bg-white py-20 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
                        <p className="text-slate-600">A proven methodology that delivers results</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-subheading text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ABCDESIGN</h2>
                        <p className="text-slate-600">Enterprise-grade solutions backed by expertise</p>
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
                            <Card key={i} className="border border-slate-200 bg-white shadow-sm">
                                <CardContent className="pt-6">
                                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <Card className="bg-deep text-white border-none">
                    <CardContent className="pt-12 pb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our services can help you achieve your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-deep hover:bg-white/90">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep">
                                <Link to="/work">View Case Studies</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
