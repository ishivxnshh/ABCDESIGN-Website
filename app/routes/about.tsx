import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent } from "~/components/ui/card";
import { Users, Target, Lightbulb, Award, TrendingUp, Shield } from "lucide-react";

export const meta: MetaFunction = () => {
    return [{ title: "About Us - ABCDESIGN" }];
};

export default function About() {
    return (
        <div className="bg-white">
            <div className="relative bg-gradient-to-br from-tata-light-grey via-white to-tata-light-grey py-12 sm:py-16 md:py-20 lg:py-28 border-b border-tata-silver/50 overflow-hidden">
                <div className="absolute inset-0 bg-tata-silver/10" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tata-dark-grey mb-4 sm:mb-6 text-center leading-tight">
                        About <span className="text-primary">ABCDESIGN</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto text-center leading-relaxed">
                        A strategic partner for enterprises seeking digital transformation and sustainable growth.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Our Mission</h2>
                        <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                            At ABCDESIGN, we believe in the power of technology to solve complex business challenges. Our mission is to empower enterprises with robust, scalable, and innovative digital solutions that drive measurable results.
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                            Founded on principles of integrity and excellence, we operate with the precision of a top-tier consultancy and the agility of a tech forward-thinker. We don't just build websites; we build digital ecosystems.
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            With over a decade of experience, we've partnered with Fortune 500 companies, scaling startups, and industry leaders across sectors including finance, retail, healthcare, and technology.
                        </p>
                    </div>
                    <div className="bg-slate-100/50 rounded-lg h-64 sm:h-80 md:h-96 flex items-center justify-center border border-slate-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="ABCDESIGN Team" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                {/* Company Timeline */}
                <div className="mt-12 sm:mt-16 md:mt-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 md:mb-16 text-center">Our Journey</h2>
                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-subheading via-primary to-subheading hidden md:block" />
                        
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            {[
                                { year: "2014", title: "Founded", desc: "Started with a vision to bridge the gap between technology and business strategy" },
                                { year: "2017", title: "Enterprise Focus", desc: "Shifted focus to serve Fortune 500 companies with specialized solutions" },
                                { year: "2020", title: "Global Expansion", desc: "Opened offices in 3 continents, serving clients worldwide" },
                                { year: "2024", title: "Innovation Leader", desc: "Recognized as a top digital transformation partner by industry analysts" }
                            ].map((milestone, i) => (
                                <div key={i} className="flex gap-4 sm:gap-6 items-start group">
                                    <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 z-10">
                                        {milestone.year}
                                    </div>
                                    <div className="flex-1 pt-1 sm:pt-2 bg-tata-light-grey p-4 sm:p-6 rounded-xl border-2 border-tata-silver/50 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-xl sm:text-2xl font-bold text-tata-dark-grey mb-2 sm:mb-3 group-hover:text-primary transition-colors">{milestone.title}</h3>
                                        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-12 sm:mt-16 md:mt-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 md:mb-16 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in all our engagements." },
                            { icon: Award, title: "Excellence", desc: "We are committed to delivering work that exceeds expectations and industry standards." },
                            { icon: Lightbulb, title: "Innovation", desc: "We constantly evolve, adopting the latest technologies to keep our clients ahead." }
                        ].map((val, i) => (
                            <Card key={i} className="group bg-white border-2 border-tata-silver/50 shadow-md hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 relative">
                                    <div className="absolute inset-0 bg-tata-light-grey opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <div className="inline-flex p-2.5 sm:p-3 rounded-xl bg-primary mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <val.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-tata-dark-grey mb-2 sm:mb-3 group-hover:text-primary transition-colors">{val.title}</h3>
                                        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{val.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Leadership Approach */}
                <div className="mt-12 sm:mt-16 md:mt-24 relative bg-primary text-white rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-tata-dark-blue/30" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 sm:mb-6">
                            <Users className="h-16 w-16 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12">
                            We combine strategic consulting with hands-on execution. Our multidisciplinary teams include strategists, designers, developers, and growth specialists who work collaboratively to deliver holistic solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Target, label: "Strategy First", desc: "Every project begins with understanding your business goals" },
                                { icon: Users, label: "Collaborative", desc: "We work as an extension of your team" },
                                { icon: TrendingUp, label: "Results Focused", desc: "Success is measured by tangible business outcomes" }
                            ].map((approach, i) => (
                                <div key={i} className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-tata-silver/20 hover:bg-white/10 hover:border-tata-silver/40 transition-all duration-300 hover:-translate-y-2">
                                    <div className="inline-flex p-3 rounded-xl bg-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <approach.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="font-bold text-lg mb-2">{approach.label}</div>
                                    <div className="text-sm text-white/80 leading-relaxed">{approach.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-24">
                    <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">By the Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: "500+", label: "Projects Delivered" },
                            { number: "150+", label: "Enterprise Clients" },
                            { number: "50+", label: "Team Members" },
                            { number: "12", label: "Countries Served" }
                        ].map((stat, i) => (
                            <div key={i} className="group text-center p-8 bg-white border-2 border-tata-silver/50 rounded-2xl hover:border-primary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute inset-0 bg-tata-light-grey opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="text-5xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {stat.number}
                                    </div>
                                    <div className="text-foreground/70 font-semibold text-sm md:text-base">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
