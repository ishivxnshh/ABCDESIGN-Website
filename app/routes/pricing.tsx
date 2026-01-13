import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Check, Sparkles } from "lucide-react";

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
        },
        {
            name: "Growth Plan",
            price: "₹60,000",
            period: "/mo",
            description: "Comprehensive solution for businesses ready to scale and dominate",
            platformManagement: "All Platforms + More",
            popular: true,
        },
    ];

    const services = [
        {
            category: "Technical & Web",
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Monthly Retainer Packages
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Choose the perfect plan to elevate your brand and drive consistent growth
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.name}
                            className={`relative overflow-hidden ${
                                pkg.popular
                                    ? "border-2 border-indigo-500 shadow-2xl scale-105"
                                    : "border border-gray-200"
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold flex items-center gap-1">
                                    <Sparkles className="w-4 h-4" />
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="pb-8 pt-8">
                                <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-5xl font-bold text-indigo-600">{pkg.price}</span>
                                    <span className="text-gray-500 text-lg">{pkg.period}</span>
                                </div>
                                <CardDescription className="text-base">{pkg.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className={`p-4 rounded-lg ${
                                    pkg.popular ? "bg-indigo-50 border-2 border-indigo-200" : "bg-blue-50 border border-blue-200"
                                }`}>
                                    <p className="text-sm text-gray-600 mb-1">Platform Management</p>
                                    <p className={`font-bold text-lg ${pkg.popular ? "text-indigo-700" : "text-blue-700"}`}>
                                        {pkg.platformManagement}
                                    </p>
                                </div>
                                <Link to="/contact">
                                    <Button
                                        className={`w-full ${
                                            pkg.popular
                                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                                                : "bg-blue-600 hover:bg-blue-700"
                                        } text-white`}
                                        size="lg"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Detailed Features Comparison */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                        Detailed Features Comparison
                    </h2>
                    
                    {services.map((service, idx) => (
                        <Card key={idx} className="mb-8 overflow-hidden border-l-4 border-l-indigo-500">
                            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                <CardTitle className="text-2xl text-indigo-900">{service.category}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b">
                                            <tr>
                                                <th className="text-left p-4 font-semibold text-gray-700">Service / Feature</th>
                                                <th className="text-center p-4 font-semibold text-gray-700 w-48">
                                                    Standard Plan<br />
                                                    <span className="text-indigo-600">₹30,000/mo</span>
                                                </th>
                                                <th className="text-center p-4 font-semibold text-gray-700 w-48">
                                                    Growth Plan<br />
                                                    <span className="text-indigo-600">₹60,000/mo</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {service.features.map((feature, featureIdx) => (
                                                <tr
                                                    key={featureIdx}
                                                    className={`border-b ${
                                                        feature.highlight ? "bg-yellow-50" : "hover:bg-gray-50"
                                                    }`}
                                                >
                                                    <td className="p-4">
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{feature.name}</p>
                                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                                        </div>
                                                    </td>
                                                    <td className="text-center p-4">
                                                        {typeof feature.standard === "boolean" ? (
                                                            feature.standard ? (
                                                                <Check className="w-6 h-6 text-green-600 mx-auto" />
                                                            ) : (
                                                                <span className="text-gray-400">—</span>
                                                            )
                                                        ) : (
                                                            <span className={`font-semibold ${feature.highlight ? "text-indigo-700" : "text-gray-900"}`}>
                                                                {feature.standard}
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="text-center p-4">
                                                        {typeof feature.growth === "boolean" ? (
                                                            feature.growth ? (
                                                                <Check className="w-6 h-6 text-green-600 mx-auto" />
                                                            ) : (
                                                                <span className="text-gray-400">—</span>
                                                            )
                                                        ) : (
                                                            <span className={`font-semibold ${feature.highlight ? "text-indigo-700" : "text-gray-900"}`}>
                                                                {feature.growth}
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Add-On Services Section */}
                <Card className="max-w-6xl mx-auto mt-16 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                    <CardHeader>
                        <CardTitle className="text-3xl text-center text-purple-900">
                            Exclusive Add-On Services
                        </CardTitle>
                        <CardDescription className="text-center text-lg">
                            Enhance your package with premium production, development, and marketing services
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Production & Branding */}
                            <div className="bg-white p-6 rounded-lg border border-purple-200">
                                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">📸</span> Production & Branding
                                </h3>
                                <ul className="space-y-4">
                                    <li className="border-b pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-900">Personal Branding</p>
                                                <p className="text-sm text-gray-600">LinkedIn/Twitter thought leadership</p>
                                            </div>
                                            <p className="text-purple-700 font-bold whitespace-nowrap ml-4">₹20,000 <span className="text-sm">/Month</span></p>
                                        </div>
                                    </li>
                                    <li className="border-b pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-900">Drone Shooting</p>
                                                <p className="text-sm text-gray-600">Aerial footage (1 Shoot)</p>
                                            </div>
                                            <p className="text-purple-700 font-bold whitespace-nowrap ml-4">₹30,000 <span className="text-sm">/Shoot</span></p>
                                        </div>
                                    </li>
                                    <li className="border-b pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-900">Product Photography</p>
                                                <p className="text-sm text-gray-600">Professional shoot + Editing</p>
                                            </div>
                                            <p className="text-purple-700 font-bold whitespace-nowrap ml-4">₹20,000 <span className="text-sm">/Shoot</span></p>
                                        </div>
                                    </li>
                                    <li className="pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-900">Product Videography</p>
                                                <p className="text-sm text-gray-600">Video shoot + Editing</p>
                                            </div>
                                            <p className="text-purple-700 font-bold whitespace-nowrap ml-4">₹20,000 <span className="text-sm">/Day/Shoot</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Web Design & Development */}
                            <div className="bg-white p-6 rounded-lg border border-purple-200">
                                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">💻</span> Web Design & Development
                                </h3>
                                <ul className="space-y-4">
                                    <li className="border-b pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-900">Website Designing</p>
                                                <p className="text-sm text-gray-600">Corporate/Portfolio Website</p>
                                            </div>
                                            <p className="text-purple-700 font-bold whitespace-nowrap ml-4">₹25,000 <span className="text-sm">One-time</span></p>
                                        </div>
                                    </li>
                                    <li className="pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-900">Ecommerce Store Design</p>
                                                <p className="text-sm text-gray-600">Shopify/WooCommerce Setup</p>
                                            </div>
                                            <p className="text-purple-700 font-bold whitespace-nowrap ml-4">₹40,000 <span className="text-sm">One-time</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Paid Campaigns & Marketing */}
                        <div className="bg-white p-6 rounded-lg border border-purple-200">
                            <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                                <span className="text-2xl">📢</span> Paid Campaigns & Marketing
                            </h3>
                            <div className="mb-4">
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <p className="font-semibold text-gray-900 mb-2">Campaign Management Fee</p>
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="text-3xl font-bold text-purple-700">₹5,000</span>
                                        <span className="text-gray-600">Min. Fee</span>
                                        <span className="text-gray-500">+</span>
                                        <span className="text-3xl font-bold text-purple-700">5%</span>
                                        <span className="text-gray-600">of Ad Spend</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">*Per campaign basis</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="font-semibold text-gray-700 mb-3">AVAILABLE CAMPAIGN CHANNELS:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Google Ads</span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Meta (FB/Insta) Ads</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Email Marketing</span>
                                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">WhatsApp Marketing</span>
                                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">SMS Marketing</span>
                                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Influencer Marketing</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Terms & Conditions */}
                <Card className="max-w-6xl mx-auto mt-8 border border-gray-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-gray-900">Terms & Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span><strong>Payment Terms:</strong> 50% advance before the start of the month, 50% upon month completion.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span><strong>Third-party costs</strong> (Ad Spend, SMS credits, WhatsApp API fees, Hosting fees) are to be borne directly by the client.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span><strong>Minimum contract period</strong> of 3 months recommended for SEO results.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Raw video footage for the Growth Plan must be provided by the client in a timely manner.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>All prices are exclusive of GST (18%).</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss which package is right for your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg px-8"
                            >
                                Get Started Today
                            </Button>
                        </Link>
                        <Link to="/services">
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                            >
                                Explore Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
