import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Megaphone, Check, Users, MessageCircle, Bot, Sparkles, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Social Media Optimization - ABCDESIGN" },
        { name: "description", content: "Comprehensive social media management and optimization services." }
    ];
};

export default function SocialMedia() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-brand-blue pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark-navy/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="container mx-auto px-4 relative z-10">
                    <Button variant="ghost" className="text-white hover:bg-white/10 mb-8 pl-0 hover:pl-2 transition-all" asChild>
                        <Link to="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                    </Button>
                    <div className="flex items-center gap-4 mb-6">
                        <Megaphone className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Social Media Optimization</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Build and engage your audience across multiple platforms with strategic social media management.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <Users className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Platform Management</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Professional management of your social media presence across leading platforms
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-green-600" />
                                    <span className="text-slate-700">LinkedIn</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-green-600" />
                                    <span className="text-slate-700">Facebook</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-green-600" />
                                    <span className="text-slate-700">Instagram</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <p className="text-sm font-semibold text-slate-900 mb-2">Package Options:</p>
                                <p className="text-sm text-slate-700">
                                    <span className="font-bold">Standard:</span> Any 2 Platforms
                                </p>
                                <p className="text-sm text-slate-700">
                                    <span className="font-bold">Growth:</span> All Platforms + More
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <MessageCircle className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Community Engagement</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Active community management to build relationships and foster engagement
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Reply to comments across all platforms</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Respond to direct messages promptly</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Monitor brand mentions and engage</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Build community relationships</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <Bot className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">WhatsApp Bots Integration</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Automate customer interactions with intelligent WhatsApp business solutions
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Automated reply systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Product catalog integration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">FAQ automation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">24/7 customer support</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* What We Deliver */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-3xl text-slate-900">What We Deliver</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Consistent Posting Schedule</h3>
                                    <p className="text-slate-600">Regular, strategic content distribution across all managed platforms</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Engagement Analytics</h3>
                                    <p className="text-slate-600">Detailed reports on reach, engagement, and audience growth</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Audience Growth</h3>
                                    <p className="text-slate-600">Strategic tactics to increase followers and engagement rates</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Brand Voice Consistency</h3>
                                    <p className="text-slate-600">Unified messaging that strengthens your brand identity</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Included in Retainer */}
                <Card className="border border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Included in Monthly Retainer Packages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <p className="text-sm text-slate-500 mb-2">Standard Plan</p>
                                <p className="text-3xl font-bold text-slate-900 mb-4">₹30,000/mo</p>
                                <p className="text-slate-700 font-semibold mb-2">Platform Management:</p>
                                <p className="text-primary font-bold text-lg">Any 2 Platforms</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-2 border-primary/20">
                                <p className="text-sm text-slate-500 mb-2">Growth Plan</p>
                                <p className="text-3xl font-bold text-primary mb-4">₹60,000/mo</p>
                                <p className="text-slate-700 font-semibold mb-2">Platform Management:</p>
                                <p className="text-primary font-bold text-lg">All Platforms + More</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        Ready to Amplify Your Social Presence?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pricing">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
                                View Pricing Plans
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
