import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Check, X, Star, Rocket, Shield, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Monthly Retainer Packages - ABCDESIGN" },
        { name: "description", content: "Comprehensive monthly retainer plans for digital growth and stability." }
    ];
};

export default function RetainerPackages() {
    const plans = [
        {
            name: "Standard Plan",
            price: "₹30,000",
            period: "/month",
            description: "Essential improvements for steady growth.",
            icon: Shield,
            features: [
                { category: "Technical & Web", items: ["Website Maintenance", "Basic SEO & Speed Opt"] },
                { category: "Social Media (SMO)", items: ["Any 2 Platforms", "Community Engagement"] },
                { category: "Content & Creative", items: ["Graphic Artworks (JPEG)", "Content Writing"] }
            ]
        },
        {
            name: "Growth Plan",
            price: "₹60,000",
            period: "/month",
            description: "Accelerated growth with comprehensive coverage.",
            icon: Rocket,
            highlight: true,
            features: [
                { category: "Technical & Web", items: ["Priority Maintenance", "Advanced SEO & Speed Opt", "Core Web Vitals Tuning"] },
                { category: "Social Media (SMO)", items: ["All Platforms + More", "Community Engagement", "WhatsApp Bots Integration"] },
                { category: "Content & Creative", items: ["Graphic Artworks + Stories", "Blogs, Captions, Newsletters", "Video Content Creation", "Raw Video Editing"] }
            ]
        }
    ];

    const comparison = [
        { feature: "Website Maintenance", standard: true, growth: true },
        { feature: "SEO (On-Page/Off-Page)", standard: true, growth: true },
        { feature: "Speed Optimization", standard: "Basic", growth: "Advanced" },
        { feature: "Social Platforms", standard: "Any 2", growth: "All + More" },
        { feature: "Community Engagement", standard: true, growth: true },
        { feature: "WhatsApp Bots", standard: false, growth: true },
        { feature: "Graphic Artworks", standard: true, growth: true },
        { feature: "Content Writing", standard: true, growth: true },
        { feature: "Video Content", standard: false, growth: true },
        { feature: "Raw Video Editing", standard: false, growth: true },
        { feature: "Advanced Copywriting", standard: false, growth: true }
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
                        <Star className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Monthly Retainer Packages</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Choose the perfect plan to fuel your digital presence. Focused on stability and growth.
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`relative overflow-hidden transition-shadow duration-300 hover:shadow-lg border bg-white ${plan.highlight ? 'border-primary shadow-md' : 'border-slate-200 shadow-sm'}`}>
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                            )}
                            <CardHeader className="border-b border-slate-100 pb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <plan.icon className="h-7 w-7" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</CardTitle>
                                <CardDescription className="text-slate-600 mb-6">{plan.description}</CardDescription>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 font-medium">{plan.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="space-y-6">
                                    {plan.features.map((section, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-3">{section.category}</h4>
                                            <ul className="space-y-3">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                                        <span className="text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="pt-6 pb-8">
                                <Button className={`w-full h-12 text-lg ${plan.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-slate-900 hover:bg-slate-800'}`} asChild>
                                    <Link to="/contact">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Detailed Comparison */}
            <div className="bg-white py-16 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Detailed Feature Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-slate-100">
                                    <th className="text-left py-4 px-4 text-slate-500 font-medium">Feature</th>
                                    <th className="text-center py-4 px-4 text-slate-900 font-bold text-lg">Standard</th>
                                    <th className="text-center py-4 px-4 text-primary font-bold text-lg">Growth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-4 text-slate-700 font-medium">{row.feature}</td>
                                        <td className="py-4 px-4 text-center">
                                            {row.standard === true ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                                                row.standard === false ? <X className="h-5 w-5 text-slate-300 mx-auto" /> :
                                                    <span className="text-sm font-medium text-slate-600">{row.standard}</span>}
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            {row.growth === true ? <Check className="h-5 w-5 text-primary mx-auto" /> :
                                                row.growth === false ? <X className="h-5 w-5 text-slate-300 mx-auto" /> :
                                                    <span className="text-sm font-bold text-primary">{row.growth}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add-Ons Teaser */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Need More Power?</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Enhance your plan with our exclusive add-on services including Personal Branding, Production, and specialized Web Development.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                            <Link to="/services/production-branding">Production Services</Link>
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                            <Link to="/services/web-design-development">Web & Ecommerce</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
