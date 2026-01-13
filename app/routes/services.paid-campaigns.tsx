import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { BarChart, Check, Mail, MessageCircle, Smartphone, TrendingUp, Users, Megaphone, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Paid Campaigns & Marketing - ABCDESIGN" },
        { name: "description", content: "Data-driven advertising campaigns across multiple channels." }
    ];
};

export default function PaidCampaigns() {
    const channels = [
        {
            icon: TrendingUp,
            name: "Google Ads",
            description: "Search and display advertising to capture high-intent customers",
            features: ["Search campaigns", "Display network", "Shopping ads", "YouTube ads"]
        },
        {
            icon: Users,
            name: "Meta (FB/Insta) Ads",
            description: "Reach your target audience on Facebook and Instagram",
            features: ["Feed ads", "Stories ads", "Reels ads", "Carousel ads"]
        },
        {
            icon: Mail,
            name: "Email Marketing",
            description: "Targeted email campaigns to nurture leads and drive conversions",
            features: ["Campaign design", "List segmentation", "Automation", "Analytics"]
        },
        {
            icon: MessageCircle,
            name: "WhatsApp Marketing",
            description: "Direct communication with customers on their preferred platform",
            features: ["Broadcast messages", "Catalog sharing", "Customer support", "Automated flows"]
        },
        {
            icon: Smartphone,
            name: "SMS Marketing",
            description: "High-open-rate text message campaigns for urgent promotions",
            features: ["Bulk SMS", "Transactional SMS", "OTP services", "Link tracking"]
        },
        {
            icon: Megaphone,
            name: "Influencer Marketing",
            description: "Partner with influencers to expand reach and build credibility",
            features: ["Influencer matching", "Campaign management", "Content oversight", "ROI tracking"]
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
                        <BarChart className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Paid Campaigns & Marketing</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Data-driven advertising campaigns across multiple channels for maximum ROI.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Pricing Card */}
                <Card className="mb-12 border border-slate-200 shadow-lg bg-white">
                    <CardHeader className="text-center bg-slate-50 border-b border-slate-100 py-8">
                        <CardTitle className="text-4xl text-slate-900 mb-4">Campaign Management Fee</CardTitle>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <p className="text-5xl font-bold text-primary">₹5,000</p>
                                <p className="text-slate-600 mt-2">Minimum Fee</p>
                            </div>
                            <div className="text-3xl font-bold text-slate-400">+</div>
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <p className="text-5xl font-bold text-primary">5%</p>
                                <p className="text-slate-600 mt-2">of Ad Spend</p>
                            </div>
                        </div>
                        <p className="text-slate-500 mt-4 text-lg">*Per campaign basis</p>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 max-w-4xl mx-auto">
                            <h3 className="font-bold text-slate-900 mb-6 text-center text-xl">What's Included:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Campaign strategy & setup</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Ad creative development</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Audience targeting & optimization</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Daily monitoring & adjustments</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">A/B testing & experimentation</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Detailed performance reports</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Available Channels */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Available Campaign Channels</h2>
                    <p className="text-center text-slate-600 mb-12 text-lg">
                        Choose the right channels to reach your target audience where they are
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {channels.map((channel, index) => (
                            <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                                <CardHeader>
                                    <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-3">
                                        <channel.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl text-slate-900">{channel.name}</CardTitle>
                                    <CardDescription className="text-base text-slate-600">{channel.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {channel.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                                <span className="text-sm text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Why Paid Advertising */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-3xl text-slate-900">Why Invest in Paid Advertising?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Immediate Results</h3>
                                <p className="text-slate-600">
                                    Start seeing traffic and conversions as soon as your campaigns go live
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Precise Targeting</h3>
                                <p className="text-slate-600">
                                    Reach exactly the right audience with detailed demographic and interest targeting
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Measurable ROI</h3>
                                <p className="text-slate-600">
                                    Track every rupee spent and measure exact returns on your investment
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Important Note */}
                <Card className="mb-12 border border-slate-200 bg-slate-50">
                    <CardHeader>
                        <CardTitle className="text-2xl text-slate-900">Important Note</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <p className="text-slate-700 text-lg">
                                    <strong>Ad Spend is separate:</strong> Our management fee covers strategy, setup, and optimization.
                                    The actual advertising budget (what you spend on Google, Facebook, etc.) is paid directly by you to the platforms.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <p className="text-slate-700 text-lg">
                                    <strong>Flexible budgets:</strong> We work with businesses of all sizes. Minimum recommended ad spend varies by channel and industry.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Add-On Notice */}
                <Card className="border border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Exclusive Add-On Services</CardTitle>
                        <CardDescription className="text-base text-slate-600">
                            Paid campaign management is available as an add-on to our monthly retainer packages
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-700">
                            Combine paid advertising with our Standard Plan (₹30,000/mo) or Growth Plan (₹60,000/mo) for a complete
                            digital marketing solution that includes organic social media, content creation, SEO, and more.
                        </p>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        Ready to Scale with Paid Advertising?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pricing">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
                                View All Packages
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                                Discuss Your Campaign
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
