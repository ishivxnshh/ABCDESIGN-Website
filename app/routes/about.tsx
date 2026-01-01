import { Card, CardContent } from "~/components/ui/card";
import { Users, Target, Lightbulb, Award, TrendingUp, Shield } from "lucide-react";

export function meta() {
    return [{ title: "About Us - ABCDESIGN" }];
}

export default function About() {
    return (
        <div className="bg-white">
            <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 text-center">About ABCDESIGN</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto text-center">
                        A strategic partner for enterprises seeking digital transformation and sustainable growth.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            At ABCDESIGN, we believe in the power of technology to solve complex business challenges. Our mission is to empower enterprises with robust, scalable, and innovative digital solutions that drive measurable results.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Founded on principles of integrity and excellence, we operate with the precision of a top-tier consultancy and the agility of a tech forward-thinker. We don't just build websites; we build digital ecosystems.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            With over a decade of experience, we've partnered with Fortune 500 companies, scaling startups, and industry leaders across sectors including finance, retail, healthcare, and technology.
                        </p>
                    </div>
                    <div className="bg-slate-100/50 rounded-lg h-96 flex items-center justify-center border border-slate-200 overflow-hidden">
                        <img src="/team-illustration.svg" alt="ABCDESIGN Team" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Company Timeline */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                { year: "2014", title: "Founded", desc: "Started with a vision to bridge the gap between technology and business strategy" },
                                { year: "2017", title: "Enterprise Focus", desc: "Shifted focus to serve Fortune 500 companies with specialized solutions" },
                                { year: "2020", title: "Global Expansion", desc: "Opened offices in 3 continents, serving clients worldwide" },
                                { year: "2024", title: "Innovation Leader", desc: "Recognized as a top digital transformation partner by industry analysts" }
                            ].map((milestone, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-subheading text-white flex items-center justify-center font-bold text-lg">
                                        {milestone.year}
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                                        <p className="text-slate-600">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in all our engagements." },
                            { icon: Award, title: "Excellence", desc: "We are committed to delivering work that exceeds expectations and industry standards." },
                            { icon: Lightbulb, title: "Innovation", desc: "We constantly evolve, adopting the latest technologies to keep our clients ahead." }
                        ].map((val, i) => (
                            <Card key={i} className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <val.icon className="h-12 w-12 text-subheading mb-4" />
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                                    <p className="text-slate-600">{val.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Leadership Approach */}
                <div className="mt-24 bg-deep text-white rounded-2xl p-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
                        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            We combine strategic consulting with hands-on execution. Our multidisciplinary teams include strategists, designers, developers, and growth specialists who work collaboratively to deliver holistic solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {[
                                { icon: Target, label: "Strategy First", desc: "Every project begins with understanding your business goals" },
                                { icon: Users, label: "Collaborative", desc: "We work as an extension of your team" },
                                { icon: TrendingUp, label: "Results Focused", desc: "Success is measured by tangible business outcomes" }
                            ].map((approach, i) => (
                                <div key={i} className="text-center">
                                    <approach.icon className="h-10 w-10 mx-auto mb-3 text-subheading" />
                                    <div className="font-semibold mb-2">{approach.label}</div>
                                    <div className="text-sm text-white/70">{approach.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">By the Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Projects Delivered" },
                            { number: "150+", label: "Enterprise Clients" },
                            { number: "50+", label: "Team Members" },
                            { number: "12", label: "Countries Served" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-slate-50 rounded-lg">
                                <div className="text-4xl font-bold text-subheading mb-2">{stat.number}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
