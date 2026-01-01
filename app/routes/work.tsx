import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function meta() {
    return [{ title: "Case Studies - ABCDESIGN" }];
}

export default function Work() {
    const cases = [
        {
            client: "Global Finance Corp",
            title: "Digital Transformation Initiative",
            category: "Growth Consulting",
            impact: "40% increase in operational efficiency",
            metrics: ["40% Efficiency", "$2M Cost Savings", "6 Month Timeline"],
            desc: "Partnered with a leading financial institution to modernize their legacy systems and implement agile workflows."
        },
        {
            client: "TechStream Solutions",
            title: "Rebranding & Web Overhaul",
            category: "Branding & Web",
            impact: "200% increase in lead generation",
            metrics: ["200% Leads", "3x Traffic", "Award Winning Design"],
            desc: "A complete brand refresh and high-performance website deployment for a B2B SaaS provider."
        },
        {
            client: "Retail Giants Ltd",
            title: "E-commerce Performance SEO",
            category: "SEO & Marketing",
            impact: "150% growth in organic revenue",
            metrics: ["150% Revenue", "#1 Rankings", "Global Reach"],
            desc: "Implemented a comprehensive technical SEO strategy for a multinational retailer."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-deep py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Our Impact</h1>
                    <p className="text-slate-300 max-w-2xl">
                        See how we help leading enterprises achieve their goals through innovation and execution.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="space-y-12">
                    {cases.map((project, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-100 pb-12 last:border-0">
                            <div className="md:w-1/3">
                                <Badge variant="secondary" className="mb-4 bg-muted text-foreground hover:bg-muted/80">{project.category}</Badge>
                                <h2 className="text-2xl font-bold text-foreground mb-2">{project.client}</h2>
                                <h3 className="text-lg text-subheading font-medium mb-4">{project.title}</h3>
                                <p className="text-foreground/80">{project.desc}</p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {project.metrics.map((metric, idx) => (
                                    <Card key={idx} className="bg-slate-50 border-none shadow-sm">
                                        <CardContent className="flex items-center justify-center p-6 text-center h-full">
                                            <span className="font-bold text-foreground">{metric}</span>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
