import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Globe, Check, Laptop, ShoppingCart, Layout, Code, ArrowLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Web Design & Development - ABCDESIGN" },
        { name: "description", content: "Custom website design and development services." }
    ];
};

export default function WebDesignDevelopment() {
    const services = [
        {
            icon: Layout,
            title: "Website Designing",
            subtitle: "Corporate/Portfolio Website",
            price: "₹25,000",
            period: "One-time",
            features: [
                "Custom responsive design",
                "Up to 5 pages",
                "Mobile-optimized",
                "Contact form integration",
                "Basic SEO setup",
                "1 month free maintenance"
            ]
        },
        {
            icon: ShoppingCart,
            title: "Ecommerce Store Design",
            subtitle: "Shopify/WooCommerce Setup",
            price: "₹40,000",
            period: "One-time",
            features: [
                "Complete store setup",
                "Product catalog integration",
                "Payment gateway integration",
                "Shopping cart & checkout",
                "Order management system",
                "3 months free maintenance"
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
                        <Globe className="h-12 w-12 sm:h-16 sm:w-16" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Web Design & Development</h1>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Custom websites and e-commerce solutions tailored to your business needs.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Services */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => (
                        <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <CardHeader className="bg-slate-50 border-b border-slate-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                                        <service.icon className="h-10 w-10" />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-4xl font-bold text-primary">{service.price}</p>
                                        <p className="text-sm text-slate-500">{service.period}</p>
                                    </div>
                                </div>
                                <CardTitle className="text-3xl text-slate-900 mb-2">{service.title}</CardTitle>
                                <CardDescription className="text-lg text-slate-600">{service.subtitle}</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-700 text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* What We Build */}
                <Card className="mb-12 border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-3xl text-slate-900">What We Build</CardTitle>
                        <CardDescription className="text-base text-slate-600">
                            Modern, responsive websites built with the latest technologies
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Laptop className="h-6 w-6 text-primary" />
                                    Corporate Websites
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Professional business websites</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Portfolio showcases</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Landing pages</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Service-based business sites</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <ShoppingCart className="h-6 w-6 text-primary" />
                                    E-commerce Solutions
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Shopify stores</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">WooCommerce setups</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Product catalog management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">Secure payment integration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Technologies */}
                <Card className="mb-12 border border-slate-200 bg-white shadow-sm">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                            <Code className="h-8 w-8 text-primary" />
                            Technologies We Use
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="font-semibold text-slate-900">WordPress</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="font-semibold text-slate-900">Shopify</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="font-semibold text-slate-900">WooCommerce</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="font-semibold text-slate-900">React</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Process */}
                <Card className="mb-12 border border-slate-200 bg-white shadow-sm">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-2xl text-slate-900">Our Development Process</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                                <h4 className="font-bold text-slate-900 mb-2">Discovery</h4>
                                <p className="text-sm text-slate-600">Understanding your goals and requirements</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                                <h4 className="font-bold text-slate-900 mb-2">Design</h4>
                                <p className="text-sm text-slate-600">Creating mockups and user experience flow</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                                <h4 className="font-bold text-slate-900 mb-2">Development</h4>
                                <p className="text-sm text-slate-600">Building your website with clean code</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                                <h4 className="font-bold text-slate-900 mb-2">Launch</h4>
                                <p className="text-sm text-slate-600">Testing, deployment, and training</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Add-On Notice */}
                <Card className="border border-slate-200 bg-slate-50">
                    <CardHeader>
                        <CardTitle className="text-2xl text-slate-900">Exclusive Add-On Services</CardTitle>
                        <CardDescription className="text-base text-slate-600">
                            These web development services are available as one-time add-ons to complement our monthly retainer packages
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-700">
                            Already have a website? Our Standard Plan (₹30,000/mo) or Growth Plan (₹60,000/mo) includes ongoing
                            maintenance, updates, and optimization to keep your site performing at its best.
                        </p>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        Ready to Build Your Website?
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
