import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Globe, Check, Shield, Zap, Server, Lock, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Technical & Web Services - ABCDESIGN" },
        { name: "description", content: "Professional website maintenance and technical support services." }
    ];
};

export default function TechnicalWeb() {
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
                        <Globe className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Technical & Web Services</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Keep your website running smoothly with professional maintenance and technical support.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Main Service Card */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-3xl text-slate-900">Website Maintenance</CardTitle>
                        <CardDescription className="text-lg text-slate-600">
                            Comprehensive maintenance services to ensure your website stays secure, updated, and performing optimally
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Server className="h-6 w-6 text-primary" />
                                    Core Services Included
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-slate-900">Plugin Updates</p>
                                            <p className="text-sm text-slate-600">Regular updates to keep all plugins current and secure</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-slate-900">Backups</p>
                                            <p className="text-sm text-slate-600">Automated daily backups stored securely offsite</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-slate-900">Minor Text Edits</p>
                                            <p className="text-sm text-slate-600">Quick content updates and text modifications as needed</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Shield className="h-6 w-6 text-primary" />
                                    Additional Benefits
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Security monitoring and malware scanning</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Uptime monitoring and instant alerts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Broken link detection and fixes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Database optimization</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* SEO & Speed Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <CardTitle className="text-2xl text-slate-900">Search Engine Optimization (SEO)</CardTitle>
                            <CardDescription className="text-slate-600">Dominate search results and improve visibility</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Globe className="h-5 w-5 text-primary" />
                                        On-Page SEO
                                    </h4>
                                    <ul className="space-y-2 ml-7">
                                        <li className="text-sm text-slate-700 list-disc">Meta tag optimization</li>
                                        <li className="text-sm text-slate-700 list-disc">Heading hierarchy (H1-H6)</li>
                                        <li className="text-sm text-slate-700 list-disc">Image alt text & compression</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Globe className="h-5 w-5 text-primary" />
                                        Off-Page SEO
                                    </h4>
                                    <ul className="space-y-2 ml-7">
                                        <li className="text-sm text-slate-700 list-disc">Basic backlinking strategies</li>
                                        <li className="text-sm text-slate-700 list-disc">Directory submissions</li>
                                        <li className="text-sm text-slate-700 list-disc">Google My Business optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-200 shadow-sm bg-white">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <CardTitle className="text-2xl text-slate-900">Website Speed Optimization</CardTitle>
                            <CardDescription className="text-slate-600">Lightning fast performance for better UX and rankings</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-primary" />
                                        Core Web Vitals
                                    </h4>
                                    <p className="text-sm text-slate-700 mb-3">
                                        We treat Google's Core Web Vitals as a priority, ensuring your site passes all performance metrics.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm text-slate-700">
                                            <Check className="h-4 w-4 text-green-600" />
                                            LCP (Largest Contentful Paint)
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-700">
                                            <Check className="h-4 w-4 text-green-600" />
                                            FID (First Input Delay)
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-700">
                                            <Check className="h-4 w-4 text-green-600" />
                                            CLS (Cumulative Layout Shift)
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <p className="font-semibold text-slate-900 text-sm mb-1">Performance Tuning Includes:</p>
                                    <p className="text-xs text-slate-600">Cache configuration, Code minification, Image optimization, CDN setup</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Included in Retainer */}
                <Card className="border border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Included in Monthly Retainer Packages</CardTitle>
                        <CardDescription className="text-base text-slate-600">
                            Technical, SEO, and Performance services are included in our monthly plans
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 bg-white p-4 rounded-lg border border-slate-200">
                                <p className="text-sm text-slate-500 mb-1">Standard Plan</p>
                                <p className="text-2xl font-bold text-slate-900">₹30,000/mo</p>
                                <ul className="mt-2 space-y-1">
                                    <li className="text-xs text-slate-600 flex items-center gap-1"><Check className="h-3 w-3 text-green-500" /> Website Maintenance</li>
                                    <li className="text-xs text-slate-600 flex items-center gap-1"><Check className="h-3 w-3 text-green-500" /> On-Page SEO</li>
                                </ul>
                            </div>
                            <div className="flex-1 bg-white p-4 rounded-lg border-2 border-primary/20">
                                <p className="text-sm text-slate-500 mb-1">Growth Plan</p>
                                <p className="text-2xl font-bold text-primary">₹60,000/mo</p>
                                <ul className="mt-2 space-y-1">
                                    <li className="text-xs text-slate-600 flex items-center gap-1"><Check className="h-3 w-3 text-green-500" /> Everything in Standard</li>
                                    <li className="text-xs text-slate-600 flex items-center gap-1"><Check className="h-3 w-3 text-green-500" /> Advanced Speed Opt</li>
                                    <li className="text-xs text-slate-600 flex items-center gap-1"><Check className="h-3 w-3 text-green-500" /> Core Web Vitals</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        Ready to Secure Your Website?
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
