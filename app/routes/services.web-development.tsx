import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Globe, CheckCircle, ArrowLeft, Smartphone, Database, ShoppingCart, Zap, Code2, Cloud } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "Web Development Services - ABCDESIGN" }];
};

export default function WebDevelopment() {
    const features = [
        { icon: Code2, title: "Custom Web Apps", desc: "Tailored web applications built to your exact specifications and requirements." },
        { icon: Database, title: "CMS Implementation", desc: "Content management systems that give you full control over your content." },
        { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Secure, scalable online stores that drive sales and conversions." },
        { icon: Smartphone, title: "Progressive Web Apps", desc: "Fast, reliable web apps that work offline and feel like native apps." },
        { icon: Zap, title: "API Development", desc: "Robust APIs for seamless integration and data exchange." },
        { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable cloud solutions for reliability and performance." }
    ];

    const benefits = [
        "Modern, responsive designs",
        "Lightning-fast performance",
        "Secure and reliable architecture",
        "Scalable infrastructure",
        "SEO-optimized from the start",
        "Ongoing maintenance and support"
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-brand-blue py-12 sm:py-16 md:py-20 lg:py-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark-navy/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="container mx-auto px-4 relative z-10">
                    <Button variant="ghost" className="text-white hover:bg-white/10 mb-8 pl-0 hover:pl-2 transition-all" asChild>
                        <Link to="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                    </Button>
                    <div className="flex items-center gap-4 mb-6">
                        <Globe className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Web Development</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Scalable, secure, and high-performance websites built for enterprise success.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <Card key={i} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <CardHeader>
                                <feature.icon className="h-12 w-12 text-primary mb-4" />
                                <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">{feature.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white py-16 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Our Development Services</h2>
                    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-slate-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Approach</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Planning", desc: "Requirements gathering and technical architecture" },
                        { step: "02", title: "Design", desc: "UI/UX design and interactive prototypes" },
                        { step: "03", title: "Development", desc: "Agile development with regular milestones" },
                        { step: "04", title: "Launch", desc: "Testing, deployment, and post-launch support" }
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <Card className="bg-primary text-white border-none">
                    <CardContent className="pt-12 pb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's create a website that drives results and grows with your business.
                        </p>
                        <Button asChild size="lg" className="bg-white text-primary hover:bg-tata-light-grey">
                            <Link to="/contact">Get Started Today</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
