import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { PenTool, Check, Image, FileText, Video, Edit, Sparkles, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Content & Creative Services - ABCDESIGN" },
        { name: "description", content: "Professional content creation and creative services for your brand." }
    ];
};

export default function ContentCreative() {
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
                        <PenTool className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Content & Creative</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Compelling content and creative assets that capture attention and drive engagement.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <Image className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Graphic Artworks (JPEG)</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Professional graphic designs for all your digital needs
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Social media posts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Instagram & Facebook stories</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Official announcements</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Marketing banners</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <FileText className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Content Writing</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Engaging written content that resonates with your audience
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Blog articles & posts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Social media captions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Email newsletters</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Website content</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <Video className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Video Content Creation</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Engaging video content for maximum social impact
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Instagram & TikTok reels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">YouTube shorts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Promotional snippets</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Product showcases</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <Edit className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Raw Video Editing</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Professional editing of your raw footage into polished content
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Color grading & correction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Audio enhancement</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Transitions & effects</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Subtitles & captions</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white md:col-span-2 lg:col-span-1">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <Sparkles className="h-10 w-10 text-primary mb-3" />
                            <CardTitle className="text-2xl text-slate-900">Advanced Copywriting</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 mb-4">
                                Persuasive copy that converts visitors into customers
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Sales funnel copy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Landing page content</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Ad copy & headlines</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">Email sequences</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Why Quality Content Matters */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-3xl text-slate-900">Why Quality Content Matters</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Storytelling</h3>
                                <p className="text-slate-700">
                                    Every piece of content tells your brand story and builds emotional connections with your audience. Quality creative work sets you apart from competitors and creates lasting impressions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Engagement & Reach</h3>
                                <p className="text-slate-700">
                                    Well-crafted content drives higher engagement rates, shares, and organic reach. The right mix of visuals, copy, and video keeps your audience coming back for more.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Included in Retainer */}
                <Card className="border border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Included in Monthly Retainer Packages</CardTitle>
                        <CardDescription className="text-base text-slate-600">
                            All content and creative services are included in both our Standard and Growth plans
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 bg-white p-4 rounded-lg border border-slate-200">
                                <p className="text-sm text-slate-500 mb-1">Standard Plan</p>
                                <p className="text-2xl font-bold text-slate-900">₹30,000/mo</p>
                            </div>
                            <div className="flex-1 bg-white p-4 rounded-lg border-2 border-primary/20">
                                <p className="text-sm text-slate-500 mb-1">Growth Plan</p>
                                <p className="text-2xl font-bold text-primary">₹60,000/mo</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        Ready to Create Amazing Content?
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
