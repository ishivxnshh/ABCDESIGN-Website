import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { Search, CheckCircle, ArrowLeft, Code, FileText, Users, Link2, MapPin, BarChart } from "lucide-react";

export function meta() {
    return [{ title: "SEO & Performance Services - ABCDESIGN" }];
}

export default function SEOPerformance() {
    const features = [
        { icon: Code, title: "Technical SEO", desc: "Optimize your site's technical foundation for better crawlability and indexing." },
        { icon: FileText, title: "Content Strategy", desc: "Data-driven content plans that rank and convert your target keywords." },
        { icon: Users, title: "Performance Audits", desc: "Comprehensive site audits identifying opportunities for improvement." },
        { icon: Link2, title: "Link Building", desc: "High-quality backlink acquisition to boost your domain authority." },
        { icon: MapPin, title: "Local SEO", desc: "Dominate local search results and attract nearby customers." },
        { icon: BarChart, title: "Analytics & Reporting", desc: "Detailed insights and transparent reporting on your SEO performance." }
    ];

    const benefits = [
        "Higher search engine rankings",
        "Increased organic traffic",
        "Better user experience and site speed",
        "Improved conversion rates",
        "Long-term sustainable growth",
        "Comprehensive competitor analysis"
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-deep to-subheading text-white py-20">
                <div className="container mx-auto px-4">
                    <Button variant="ghost" className="text-white hover:bg-white/10 mb-8" asChild>
                        <Link to="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                    </Button>
                    <div className="flex items-center gap-4 mb-6">
                        <Search className="h-16 w-16" />
                        <h1 className="text-5xl font-bold">SEO & Performance</h1>
                    </div>
                    <p className="text-xl text-white/90 max-w-3xl">
                        Optimize your digital presence to dominate search results and improve ROI through proven SEO strategies.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Our SEO Services</h2>
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
                        { step: "01", title: "Site Audit", desc: "Comprehensive analysis of your current SEO standing" },
                        { step: "02", title: "Keyword Research", desc: "Identifying high-value target keywords" },
                        { step: "03", title: "Implementation", desc: "On-page and technical SEO optimizations" },
                        { step: "04", title: "Monitor & Refine", desc: "Ongoing tracking and strategy adjustments" }
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-16 h-16 rounded-full bg-subheading text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
                <Card className="bg-deep text-white border-none">
                    <CardContent className="pt-12 pb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's optimize your website for maximum visibility and organic growth.
                        </p>
                        <Button asChild size="lg" className="bg-white text-deep hover:bg-white/90">
                            <Link to="/contact">Get Started Today</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
