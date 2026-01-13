import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Camera, Check, Drone, Image as ImageIcon, Video, User, Sparkles, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Production & Branding Services - ABCDESIGN" },
        { name: "description", content: "Professional photography, videography, and branding services." }
    ];
};

export default function ProductionBranding() {
    const services = [
        {
            icon: User,
            title: "Personal Branding",
            description: "LinkedIn/Twitter thought leadership",
            price: "₹20,000",
            period: "/Month",
            features: [
                "Thought leadership content strategy",
                "Professional profile optimization",
                "Regular engaging posts",
                "Industry insights & commentary",
                "Network growth tactics",
                "Brand positioning"
            ]
        },
        {
            icon: Drone,
            title: "Drone Shooting",
            description: "Aerial footage (1 Shoot)",
            price: "₹30,000",
            period: "/Shoot",
            features: [
                "Professional drone cinematography",
                "4K aerial footage",
                "Location scouting",
                "Safety compliance",
                "Raw footage delivery",
                "Basic color grading"
            ]
        },
        {
            icon: ImageIcon,
            title: "Product Photography",
            description: "Professional shoot + Editing",
            price: "₹20,000",
            period: "/Shoot",
            features: [
                "Professional studio setup",
                "Multiple angles & compositions",
                "High-resolution images",
                "Advanced retouching",
                "Background removal",
                "Web-optimized versions"
            ]
        },
        {
            icon: Video,
            title: "Product Videography",
            description: "Video shoot + Editing",
            price: "₹20,000",
            period: "/Day/Shoot",
            features: [
                "Professional video production",
                "Multiple camera angles",
                "Professional lighting setup",
                "Video editing & post-production",
                "Motion graphics integration",
                "Multiple format exports"
            ]
        }
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
                        <Camera className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Production & Branding</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Professional photography, videography, and branding services to elevate your visual presence.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => (
                        <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <CardHeader className="bg-slate-50 border-b border-slate-100">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-3">
                                            <service.icon className="h-8 w-8" />
                                        </div>
                                        <CardTitle className="text-2xl text-slate-900 mb-2">{service.title}</CardTitle>
                                        <CardDescription className="text-base text-slate-600">{service.description}</CardDescription>
                                    </div>
                                    <div className="text-right ml-4">
                                        <p className="text-3xl font-bold text-primary">{service.price}</p>
                                        <p className="text-sm text-slate-500">{service.period}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Why Professional Production Matters */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-3xl text-slate-900">Why Professional Production Matters</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">First Impressions</h3>
                                <p className="text-slate-600">
                                    Professional visuals create instant credibility and make your brand stand out in crowded markets
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Brand Consistency</h3>
                                <p className="text-slate-600">
                                    Unified visual language across all platforms strengthens brand recognition and recall
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Higher Conversions</h3>
                                <p className="text-slate-600">
                                    Quality visuals boost engagement rates, build trust, and directly impact sales performance
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Use Cases */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-2xl text-slate-900">Perfect For</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">E-commerce Businesses</p>
                                    <p className="text-sm text-slate-600">Professional product shots that sell</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">Real Estate</p>
                                    <p className="text-sm text-slate-600">Stunning aerial and interior photography</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">Personal Brands</p>
                                    <p className="text-sm text-slate-600">Thought leadership and authority building</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">Corporate Events</p>
                                    <p className="text-sm text-slate-600">Professional coverage and documentation</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Add-On Notice */}
                <Card className="border border-slate-200 bg-slate-50">
                    <CardHeader>
                        <CardTitle className="text-2xl text-slate-900">Exclusive Add-On Services</CardTitle>
                        <CardDescription className="text-base text-slate-600">
                            These premium production services are available as add-ons to our monthly retainer packages
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-700">
                            Combine these production services with our Standard Plan (₹30,000/mo) or Growth Plan (₹60,000/mo)
                            for comprehensive marketing solutions that include ongoing social media management, content creation, and SEO.
                        </p>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        Ready to Elevate Your Visual Brand?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pricing">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
                                View All Packages
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                                Request Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
