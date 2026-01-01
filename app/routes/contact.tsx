import { Form, useActionData, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

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
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h1>
                    <p className="text-slate-600 mb-8">Ready to start your project? Fill out the form below.</p>

                    {actionData?.success ? (
                        <div className="p-4 bg-green-50 text-green-700 rounded-md mb-6">
                            Thank you for your message. We'll be in touch shortly.
                        </div>
                    ) : (
                        <Form method="post" className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" name="name" placeholder="John Doe" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" name="company" placeholder="Company Name" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" required />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
}
