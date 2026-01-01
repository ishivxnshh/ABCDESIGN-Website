import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { BarChart, Globe, Megaphone, PenTool, Search } from "lucide-react";

export function meta() {
    return [{ title: "Our Services - ABCDESIGN" }];
}

export default function Services() {
    const services = [
        { icon: Megaphone, title: "Digital Marketing", desc: "Comprehensive strategies to reach your target audience and drive conversions.", items: ["Social Media Marketing", "Email Campaigns", "PPC Advertising"] },
        { icon: Search, title: "SEO & Performance", desc: "Optimize your digital presence to dominate search results and improve ROI.", items: ["Technical SEO", "Content Strategy", "Performance Audits"] },
        { icon: PenTool, title: "Branding & Creative", desc: "Build a brand identity that resonates and endures.", items: ["Logo Design", "Brand Guidelines", "Visual Identity"] },
        { icon: Globe, title: "Web Development", desc: "Scalable, secure, and high-performance websites built for enterprise.", items: ["Custom Web Apps", "CMS Implementation", "E-commerce Solutions"] },
        { icon: BarChart, title: "Growth Consulting", desc: "Data-backed insights to unlock new revenue streams.", items: ["Market Analysis", "Process Optimization", "Digital Transformation"] },
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
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-slate-50" asChild>
                                    <Link to="/contact">Learn More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
