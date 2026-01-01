import { Card, CardContent } from "~/components/ui/card";

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
                        <p className="text-slate-600 leading-relaxed">
                            Founded on principles of integrity and excellence, we operate with the precision of a top-tier consultancy and the agility of a tech forward-thinker. We don't just build websites; we build digital ecosystems.
                        </p>
                    </div>
                    <div className="bg-slate-100/50 rounded-lg h-80 flex items-center justify-center border border-slate-200">
                        <span className="text-slate-400 font-medium">Team & Culture</span>
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in all our engagements." },
                            { title: "Excellence", desc: "We are committed to delivering work that exceeds expectations and industry standards." },
                            { title: "Innovation", desc: "We constantly evolve, adopting the latest technologies to keep our clients ahead." }
                        ].map((val, i) => (
                            <Card key={i} className="bg-slate-50 border-none shadow-sm">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                                    <p className="text-slate-600">{val.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
