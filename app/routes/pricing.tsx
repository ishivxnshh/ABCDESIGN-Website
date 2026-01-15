import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Check, Sparkles, Zap, Shield, Rocket, Target, ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
    return [
        { title: "Monthly Retainer Packages - ABCDESIGN" },
        { name: "description", content: "Flexible monthly retainer packages for your digital marketing and web development needs." }
    ];
};

export default function Pricing() {
    const packages = [
        {
            name: "Standard Plan",
            price: "₹30,000",
            period: "/mo",
            description: "Perfect for growing businesses looking to establish their digital presence",
            platformManagement: "Any 2 Platforms",
            popular: false,
            highlight: "border-gray-200",
        },
        {
            name: "Growth Plan",
            price: "₹60,000",
            period: "/mo",
            description: "Comprehensive solution for businesses ready to scale and dominate",
            platformManagement: "All Platforms + More",
            popular: true,
            highlight: "border-brand-blue shadow-lg ring-1 ring-brand-blue/5",
        },
    ];

    const services = [
        {
            category: "Technical & Web",
            icon: Shield,
            features: [
                {
                    name: "Website Maintenance",
                    description: "Plugin updates, backups, minor text edits",
                    standard: true,
                    growth: true,
                },
            ],
        },
        {
            category: "Search Engine Optimization (SEO)",
            icon: Target,
            features: [
                {
                    name: "On-Page SEO",
                    description: "Meta tags, heading optimization, image alt text",
                    standard: true,
                    growth: true,
                },
                {
                    name: "Off-Page SEO",
                    description: "Basic backlinking, directory submissions",
                    standard: true,
                    growth: true,
                },
                {
                    name: "Website Speed Optimization",
                    description: "Core Web Vitals & Performance Tuning",
                    standard: true,
                    growth: true,
                },
            ],
        },
        {
            category: "Social Media Optimization (SMO)",
            icon: Rocket,
            features: [
                {
                    name: "Platform Management",
                    description: "LinkedIn, Facebook, Instagram",
                    standard: "Any 2 Platforms",
                    growth: "All Platforms + More",
                    highlight: true,
                },
                {
                    name: "Community Engagement",
                    description: "Reply to comments & DMs",
                    standard: true,
                    growth: true,
                },
                {
                    name: "WhatsApp Bots Integration",
                    description: "Automated replies & catalogs",
                    standard: true,
                    growth: true,
                },
            ],
        },
        {
            category: "Content & Creative",
            icon: Zap,
            features: [
                {
                    name: "Graphic Artworks (JPEG)",
                    description: "Social posts, stories, official announcements",
                    standard: true,
                    growth: true,
                },
                {
                    name: "Content Writing",
                    description: "Blogs, captions, newsletters",
                    standard: true,
                    growth: true,
                },
                {
                    name: "Video Content Creation",
                    description: "Reels, shorts, promotional snippets",
                    standard: true,
                    growth: true,
                },
                {
                    name: "Raw Video Editing",
                    description: "Editing customer-provided raw footage",
                    standard: true,
                    growth: true,
                },
                {
                    name: "Advanced Copywriting",
                    description: "Sales funnels, landing pages, ad copy",
                    standard: true,
                    growth: true,
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Hero Section - Matched to About Us Page */}
            <div className="relative bg-brand-blue pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark-navy/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-white/90 text-sm font-medium">
                        <Sparkles className="h-4 w-4 text-white" />
                        Flexible Plans for Every Stage
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        Monthly Retainer Packages
                    </h1>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Choose the perfect plan to elevate your brand and drive consistent growth. Transparent pricing, no hidden fees.
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <section className="relative z-20 -mt-8 pb-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.name}
                            className={cn(
                                "relative overflow-hidden border transition-all duration-300 bg-white shadow-xl",
                                pkg.highlight
                            )}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-brand-blue text-white px-6 py-1.5 text-sm font-bold flex items-center gap-1 shadow-md z-10">
                                    <Sparkles className="w-4 h-4 fill-white" />
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="pb-6 pt-10 px-8 border-b border-gray-100">
                                <CardTitle className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">{pkg.name}</CardTitle>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">{pkg.price}</span>
                                    <span className="text-slate-500 text-lg font-medium">{pkg.period}</span>
                                </div>
                                <CardDescription className="text-base text-slate-600 leading-relaxed">{pkg.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8 px-8 py-8">
                                <div className={cn(
                                    "p-6 rounded-xl border",
                                    pkg.popular ? "bg-blue-50/50 border-blue-100" : "bg-slate-50 border-slate-100"
                                )}>
                                    <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Platform Management</p>
                                    <p className={cn("font-bold text-lg md:text-xl", pkg.popular ? "text-brand-blue" : "text-slate-800")}>
                                        {pkg.platformManagement}
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    className={cn(
                                        "w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 shadow-sm",
                                        pkg.popular
                                            ? "bg-brand-blue text-white hover:bg-brand-dark-navy hover:scale-[1.01]"
                                            : "bg-slate-900 text-white hover:bg-slate-800"
                                    )}
                                    size="lg"
                                >
                                    <Link to="/contact">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Detailed Features Comparison */}
            <section className="py-20 px-4 md:px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Detailed Breakdown</h2>
                        <p className="text-slate-500 text-lg">A feature-by-feature comparison of our offerings</p>
                    </div>

                    <div className="space-y-12">
                        {services.map((service, idx) => (
                            <div key={idx} className="rounded-2xl border border-dotted border-slate-300 overflow-hidden bg-white">
                                <div className="bg-slate-50 p-6 md:p-8 flex items-center gap-4 border-b border-slate-200">
                                    <div className="p-3 rounded-lg bg-blue-100 text-brand-blue">
                                        <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">{service.category}</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-200">
                                                <th className="p-6 md:p-8 font-semibold text-slate-500 w-1/2">Features</th>
                                                <th className="p-6 md:p-8 font-semibold text-slate-500 w-1/4 text-center">Standard</th>
                                                <th className="p-6 md:p-8 font-semibold text-brand-blue w-1/4 text-center bg-blue-50/30">Growth</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {service.features.map((feature, featureIdx) => (
                                                <tr
                                                    key={featureIdx}
                                                    className="hover:bg-slate-50/50 transition-colors"
                                                >
                                                    <td className="p-6 md:p-8">
                                                        <div className="space-y-1">
                                                            <p className="font-semibold text-slate-800 text-lg">{feature.name}</p>
                                                            <p className="text-sm text-slate-500">{feature.description}</p>
                                                        </div>
                                                    </td>
                                                    <td className="p-6 md:p-8 text-center">
                                                        {typeof feature.standard === "boolean" ? (
                                                            feature.standard ? (
                                                                <div className="flex justify-center"><div className="bg-green-100 p-1.5 rounded-full"><Check className="w-5 h-5 text-green-600" /></div></div>
                                                            ) : (
                                                                <span className="text-slate-300 text-2xl">—</span>
                                                            )
                                                        ) : (
                                                            <span className="font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full text-sm">
                                                                {feature.standard}
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="p-6 md:p-8 text-center bg-blue-50/30">
                                                        {typeof feature.growth === "boolean" ? (
                                                            feature.growth ? (
                                                                <div className="flex justify-center"><div className="bg-blue-100 p-1.5 rounded-full"><Check className="w-5 h-5 text-brand-blue" /></div></div>
                                                            ) : (
                                                                <span className="text-slate-300 text-2xl">—</span>
                                                            )
                                                        ) : (
                                                            <span className="font-semibold text-brand-blue bg-blue-100 border border-blue-200 px-3 py-1 rounded-full text-sm">
                                                                {feature.growth}
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-On Services Section */}
            <section className="py-20 px-4 md:px-6 relative overflow-hidden bg-slate-50">
                <Card className="relative z-10 max-w-6xl mx-auto border border-brand-blue/10 bg-white shadow-xl">
                    <CardHeader className="text-center pt-12 pb-8">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-50 mb-6 w-fit mx-auto">
                            <Sparkles className="w-6 h-6 text-brand-blue" />
                        </div>
                        <CardTitle className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            Exclusive Add-On Services
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-600">
                            Enhance your package with premium production, development, and marketing services
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                            {/* Production & Branding */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand-blue/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 text-xl">📸</span>
                                    Production & Branding
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Personal Branding", desc: "LinkedIn/Twitter thought leadership", price: "₹20,000", unit: "/Month" },
                                        { title: "Drone Shooting", desc: "Aerial footage (1 Shoot)", price: "₹30,000", unit: "/Shoot" },
                                        { title: "Product Photography", desc: "Professional shoot + Editing", price: "₹20,000", unit: "/Shoot" },
                                        { title: "Product Videography", desc: "Video shoot + Editing", price: "₹20,000", unit: "/Day" },
                                    ].map((item, i) => (
                                        <li key={i} className={cn("flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0")}>
                                            <div>
                                                <p className="font-semibold text-slate-800 text-lg">{item.title}</p>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-brand-blue font-bold text-xl whitespace-nowrap">{item.price}</p>
                                                <p className="text-xs text-slate-400">{item.unit}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Web Design & Development */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand-blue/30 transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-xl">💻</span>
                                    Web Design & Dev
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Website Designing", desc: "Corporate/Portfolio Website", price: "₹25,000", unit: "One-time" },
                                        { title: "Ecommerce Store", desc: "Shopify/WooCommerce Setup", price: "₹40,000", unit: "One-time" },
                                    ].map((item, i) => (
                                        <li key={i} className={cn("flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0")}>
                                            <div>
                                                <p className="font-semibold text-slate-800 text-lg">{item.title}</p>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-brand-blue font-bold text-xl whitespace-nowrap">{item.price}</p>
                                                <p className="text-xs text-slate-400">{item.unit}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Paid Campaigns & Marketing */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-xl">📢</span>
                                Paid Campaigns & Marketing
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                                    <p className="font-semibold text-slate-500 mb-3 uppercase text-sm tracking-wider">Campaign Management Fee</p>
                                    <div className="flex items-baseline gap-3 flex-wrap">
                                        <span className="text-4xl font-bold text-brand-blue">₹5,000</span>
                                        <span className="text-slate-400 text-sm">Min. Fee</span>
                                        <span className="text-slate-400">+</span>
                                        <span className="text-4xl font-bold text-brand-blue">5%</span>
                                        <span className="text-slate-400 text-sm">of Ad Spend</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-3 italic">*Charged on a per-campaign basis</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-600 mb-4 text-sm uppercase tracking-wide">Available Channels:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Google Ads", "Meta (FB/Insta)", "Email Marketing",
                                            "WhatsApp", "SMS", "Influencer"
                                        ].map((tag, i) => (
                                            <span key={i} className="bg-white hover:bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 shadow-sm transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Terms & Conditions */}
            <section className="py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-white border border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl text-slate-800">Terms & Conditions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <span><strong className="text-slate-900">Payment Terms:</strong> 50% advance before the start of the month, 50% upon month completion.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <span><strong className="text-slate-900">Third-party costs</strong> (Ad Spend, SMS credits, WhatsApp API fees, Hosting fees) live costs are to be borne directly by the client.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <span><strong className="text-slate-900">Minimum contract period</strong> of 3 months recommended for SEO results.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <span>Raw video footage for the Growth Plan must be provided by the client in a timely manner.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <span>All prices are exclusive of GST (18%).</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-blue text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Ready to Transform Your <span className="opacity-90">Digital Presence?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Let's discuss which package is right for your business strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-brand-blue hover:bg-white/90 text-lg px-8 h-14 rounded-full font-semibold px-8"
                        >
                            <Link to="/contact">Get Started Today</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 text-lg px-8 h-14 rounded-full font-semibold"
                        >
                            <Link to="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
