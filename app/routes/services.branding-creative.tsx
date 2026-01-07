import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { PenTool, CheckCircle, ArrowLeft, Palette, FileImage, Eye, Layers, Compass, Sparkles } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "Branding & Creative Services - ABCDESIGN" }];
};

export default function BrandingCreative() {
    const features = [
        { icon: Palette, title: "Logo Design", desc: "Unique, memorable logos that capture your brand's essence." },
        { icon: FileImage, title: "Brand Guidelines", desc: "Comprehensive brand standards ensuring consistency across all touchpoints." },
        { icon: Eye, title: "Visual Identity", desc: "Complete visual systems including color palettes, typography, and imagery." },
        { icon: Layers, title: "Marketing Collateral", desc: "Professional designs for business cards, brochures, presentations, and more." },
        { icon: Compass, title: "Brand Strategy", desc: "Strategic positioning and messaging that resonates with your audience." },
        { icon: Sparkles, title: "Creative Direction", desc: "End-to-end creative leadership for campaigns and brand initiatives." }
    ];

    const benefits = [
        "Distinctive brand identity that stands out",
        "Consistent visual presence across all channels",
        "Professional designs that build credibility",
        "Strategic positioning in your market",
        "Increased brand recognition and recall",
        "Cohesive brand experience for customers"
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
                        <PenTool className="h-16 w-16" />
                        <h1 className="text-5xl font-bold">Branding & Creative</h1>
                    </div>
                    <p className="text-xl text-white/90 max-w-3xl">
                        Build a brand identity that resonates and endures through strategic design and creative excellence.
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Our Branding Services</h2>
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
                        { step: "01", title: "Discovery", desc: "Understanding your vision, values, and target audience" },
                        { step: "02", title: "Concept Creation", desc: "Developing initial brand concepts and directions" },
                        { step: "03", title: "Refinement", desc: "Iterating on feedback to perfect your brand" },
                        { step: "04", title: "Delivery", desc: "Complete brand assets and implementation guidelines" }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Brand?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's create a brand identity that captures hearts and minds.
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
