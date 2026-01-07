import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Megaphone, CheckCircle, ArrowLeft, Users, Mail, Target, FileText, Zap, TrendingUp } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "Digital Marketing Services - ABCDESIGN" }];
};

export default function DigitalMarketing() {
    const features = [
        { icon: Users, title: "Social Media Marketing", desc: "Engage your audience across all major social platforms with data-driven campaigns." },
        { icon: Mail, title: "Email Campaigns", desc: "Personalized email marketing that converts subscribers into loyal customers." },
        { icon: Target, title: "PPC Advertising", desc: "Targeted paid advertising campaigns with optimized ROI and conversion tracking." },
        { icon: FileText, title: "Content Marketing", desc: "Compelling content that attracts, educates, and converts your target audience." },
        { icon: Zap, title: "Marketing Automation", desc: "Streamline your marketing workflows with intelligent automation tools." },
        { icon: TrendingUp, title: "Influencer Partnerships", desc: "Strategic collaborations with influencers to amplify your brand reach." }
    ];

    const benefits = [
        "Increased brand awareness and visibility",
        "Higher conversion rates and ROI",
        "Multi-channel campaign management",
        "Real-time analytics and reporting",
        "Targeted audience segmentation",
        "Scalable campaigns that grow with your business"
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-primary text-white py-20">
                <div className="container mx-auto px-4">
                    <Button variant="ghost" className="text-white hover:bg-white/10 mb-8" asChild>
                        <Link to="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                    </Button>
                    <div className="flex items-center gap-4 mb-6">
                        <Megaphone className="h-16 w-16" />
                        <h1 className="text-5xl font-bold">Digital Marketing</h1>
                    </div>
                    <p className="text-xl text-white/90 max-w-3xl">
                        Comprehensive strategies to reach your target audience and drive conversions through multiple digital channels.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Our Digital Marketing Services</h2>
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
                        { step: "01", title: "Audience Research", desc: "Understanding your target market and their behavior" },
                        { step: "02", title: "Strategy Development", desc: "Creating a tailored multi-channel marketing plan" },
                        { step: "03", title: "Campaign Launch", desc: "Executing campaigns across selected channels" },
                        { step: "04", title: "Optimization", desc: "Continuous monitoring and performance improvement" }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Digital Presence?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's create a digital marketing strategy that drives real results for your business.
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
