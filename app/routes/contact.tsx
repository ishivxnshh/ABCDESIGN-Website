import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardContent } from "~/components/ui/card";
import { MapPin, Mail, Phone, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "Contact Us - ABCDESIGN" }];
};

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    // Simulate processing
    await new Promise(r => setTimeout(r, 1000));
    return json({ success: true });
}

export default function Contact() {
    const actionData = useActionData<{ success: boolean }>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative bg-brand-blue pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark-navy/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Get in Touch</h1>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        Ready to start your project? We'd love to hear from you. Fill out the form or reach out through any of our contact channels.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-2 border-brand-neutral-light shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-6 sm:p-8 md:p-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                                <p className="text-foreground/70 mb-6 sm:mb-8 text-base sm:text-lg">We typically respond within 24 hours</p>

                                {actionData?.success ? (
                                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 rounded-xl mb-6 border-2 border-green-200 shadow-md">
                                        <h3 className="font-bold mb-2 text-lg">Thank you for reaching out!</h3>
                                        <p>We've received your message and will be in touch shortly.</p>
                                    </div>
                                ) : (
                                    <Form method="post" className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input id="name" name="name" placeholder="John Doe" required />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Work Email *</Label>
                                                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company *</Label>
                                                <Input id="company" name="company" placeholder="Company Name" required />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="service">Service Interested In</Label>
                                            <select
                                                id="service"
                                                name="service"
                                                className="flex h-11 w-full rounded-lg border-2 border-input bg-white px-4 py-2 text-base shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary hover:border-primary/50 md:text-sm"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="digital-marketing">Digital Marketing</option>
                                                <option value="seo">SEO & Performance</option>
                                                <option value="branding">Branding & Creative</option>
                                                <option value="web-dev">Web Development</option>
                                                <option value="consulting">Growth Consulting</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Tell Us About Your Project *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Share your goals, challenges, and what you're looking to achieve..."
                                                className="min-h-[150px]"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full shadow-lg hover:shadow-xl"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="inline-flex items-center gap-2">
                                                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                    </Form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Office Locations */}
                        <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-foreground mb-6">Our Offices</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">New York (HQ)</h4>
                                                <p className="text-sm text-foreground/70">
                                                    123 Business Avenue<br />
                                                    New York, NY 10001<br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">London</h4>
                                                <p className="text-sm text-foreground/70">
                                                    45 Tech Street<br />
                                                    London EC1A 1BB<br />
                                                    United Kingdom
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">Singapore</h4>
                                                <p className="text-sm text-foreground/70">
                                                    88 Innovation Boulevard<br />
                                                    Singapore 018956<br />
                                                    Singapore
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Details */}
                        <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-foreground mb-6">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-brand-blue" />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Email</p>
                                            <a href="mailto:contact@abcdesign.com" className="text-sm text-brand-blue hover:text-brand-accent-blue hover:underline transition-colors">
                                                contact@abcdesign.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-brand-blue" />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Phone</p>
                                            <a href="tel:+12125551234" className="text-sm text-brand-blue hover:text-brand-accent-blue hover:underline transition-colors">
                                                +1 (212) 555-1234
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-brand-blue" />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Business Hours</p>
                                            <p className="text-sm text-foreground/70">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Media */}
                        <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-foreground mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-neutral-light hover:bg-brand-accent-blue hover:text-white flex items-center justify-center transition-all duration-300">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-neutral-light hover:bg-brand-accent-blue hover:text-white flex items-center justify-center transition-all duration-300">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-neutral-light hover:bg-brand-accent-blue hover:text-white flex items-center justify-center transition-all duration-300">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-neutral-light hover:bg-brand-accent-blue hover:text-white flex items-center justify-center transition-all duration-300">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div id="faqs" className="bg-brand-neutral-light/30 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-center">Frequently Asked Questions</h2>
                        <p className="text-foreground/70 mb-8 sm:mb-10 md:mb-12 text-center text-base sm:text-lg">Quick answers to common questions</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-4 sm:pt-6">
                                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">What is your response time?</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                                        We typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call us directly.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-4 sm:pt-6">
                                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">Do you offer free consultations?</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                                        Yes! We offer a free 30-minute consultation to discuss your project needs and explore how we can help achieve your goals.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-4 sm:pt-6">
                                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">What services do you provide?</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                                        We offer web development, digital marketing, SEO, branding & creative services, and growth consulting tailored to your business needs.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-4 sm:pt-6">
                                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">What is your project timeline?</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                                        Project timelines vary based on scope and complexity. We'll provide a detailed timeline during our initial consultation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-4 sm:pt-6">
                                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">Do you work with international clients?</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                                        Absolutely! We work with clients worldwide and have offices in New York, London, and Singapore to serve you better.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-brand-neutral-light shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-4 sm:pt-6">
                                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">What is your pricing model?</h3>
                                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                                        We offer flexible pricing based on project requirements. Contact us for a customized quote tailored to your specific needs.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Prefer to Talk First?</h2>
                        <p className="text-foreground/70 mb-6 sm:mb-8 text-sm sm:text-base">
                            Schedule a free 30-minute consultation with our team to discuss your project needs and explore how we can help you achieve your goals.
                        </p>
                        <Button size="lg" className="bg-brand-blue hover:bg-brand-dark-navy text-white transition-all duration-300">
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
