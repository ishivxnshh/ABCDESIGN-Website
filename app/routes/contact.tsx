import { Form, useActionData, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardContent } from "~/components/ui/card";
import { MapPin, Mail, Phone, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function meta() {
    return [{ title: "Contact Us - ABCDESIGN" }];
}

export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    // Simulate processing
    await new Promise(r => setTimeout(r, 1000));
    return { success: true };
}

export default function Contact() {
    const actionData = useActionData<{ success: boolean }>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-deep text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Ready to start your project? We'd love to hear from you. Fill out the form or reach out through any of our contact channels.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border border-slate-200 shadow-sm">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                                <p className="text-slate-600 mb-8">We typically respond within 24 hours</p>

                                {actionData?.success ? (
                                    <div className="p-6 bg-green-50 text-green-700 rounded-md mb-6 border border-green-200">
                                        <h3 className="font-semibold mb-2">Thank you for reaching out!</h3>
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
                                            <select id="service" name="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
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

                                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </Form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Office Locations */}
                        <Card className="border border-slate-200 shadow-sm">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Offices</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-slate-900 mb-1">New York (HQ)</h4>
                                                <p className="text-sm text-slate-600">
                                                    123 Business Avenue<br />
                                                    New York, NY 10001<br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-slate-900 mb-1">London</h4>
                                                <p className="text-sm text-slate-600">
                                                    45 Tech Street<br />
                                                    London EC1A 1BB<br />
                                                    United Kingdom
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-slate-900 mb-1">Singapore</h4>
                                                <p className="text-sm text-slate-600">
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
                        <Card className="border border-slate-200 shadow-sm">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">Email</p>
                                            <a href="mailto:contact@abcdesign.com" className="text-sm text-subheading hover:underline">
                                                contact@abcdesign.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">Phone</p>
                                            <a href="tel:+12125551234" className="text-sm text-subheading hover:underline">
                                                +1 (212) 555-1234
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">Business Hours</p>
                                            <p className="text-sm text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Media */}
                        <Card className="border border-slate-200 shadow-sm">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* FAQ or Additional Info */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Prefer to Talk First?</h2>
                        <p className="text-slate-600 mb-8">
                            Schedule a free 30-minute consultation with our team to discuss your project needs and explore how we can help you achieve your goals.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
