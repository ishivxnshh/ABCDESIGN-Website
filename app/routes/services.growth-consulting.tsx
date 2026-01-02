import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { BarChart, CheckCircle, ArrowLeft, TrendingUp, Target, LineChart, Cpu, PieChart, Activity } from "lucide-react";

export function meta() {
    return [{ title: "Growth Consulting Services - ABCDESIGN" }];
}

export default function GrowthConsulting() {
    const features = [
        { icon: PieChart, title: "Market Analysis", desc: "In-depth market research and competitive intelligence for strategic decisions." },
        { icon: Target, title: "Process Optimization", desc: "Streamline operations and eliminate bottlenecks for maximum efficiency." },
        { icon: Cpu, title: "Digital Transformation", desc: "Modernize your business with cutting-edge digital solutions." },
        { icon: TrendingUp, title: "CRO Strategy", desc: "Conversion rate optimization to maximize your revenue per visitor." },
        { icon: LineChart, title: "Business Intelligence", desc: "Data-driven insights that power strategic business decisions." },
        { icon: Activity, title: "KPI Tracking", desc: "Custom dashboards and metrics to measure what matters most." }
    ];

    const benefits = [
        "Data-driven strategic roadmaps",
        "Measurable growth metrics",
        "Scalable business processes",
        "Competitive market insights",
        "ROI-focused recommendations",
        "Ongoing advisory and support"
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
                        <BarChart className="h-16 w-16" />
                        <h1 className="text-5xl font-bold">Growth Consulting</h1>
                    </div>
                    <p className="text-xl text-white/90 max-w-3xl">
                        Data-backed insights to unlock new revenue streams and accelerate your business growth.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Our Consulting Services</h2>
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
                        { step: "01", title: "Assessment", desc: "Comprehensive analysis of your current state" },
                        { step: "02", title: "Strategy", desc: "Custom growth roadmap based on data insights" },
                        { step: "03", title: "Implementation", desc: "Guided execution with hands-on support" },
                        { step: "04", title: "Measurement", desc: "Ongoing tracking and continuous optimization" }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's unlock new opportunities and drive sustainable business growth.
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
