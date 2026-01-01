import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

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
            desc: "Partnered with a leading financial institution to modernize their legacy systems and implement agile workflows.",
            image: "/project-1.svg",
            challenges: "Legacy infrastructure causing bottlenecks, disparate systems preventing data integration, manual processes reducing productivity.",
            solution: "Implemented a comprehensive digital transformation roadmap including cloud migration, API integration, and process automation.",
            results: ["Reduced processing time by 40%", "Eliminated $2M in annual operational costs", "Improved customer satisfaction by 35%"]
        },
        {
            client: "TechStream Solutions",
            title: "Rebranding & Web Overhaul",
            category: "Branding & Web",
            impact: "200% increase in lead generation",
            metrics: ["200% Leads", "3x Traffic", "Award Winning Design"],
            desc: "A complete brand refresh and high-performance website deployment for a B2B SaaS provider.",
            image: "/project-2.svg",
            challenges: "Outdated brand identity, low website conversion rates, poor mobile experience.",
            solution: "Complete rebrand with modern visual identity, rebuilt website on scalable architecture, implemented conversion optimization strategies.",
            results: ["Tripled organic traffic within 6 months", "Increased conversion rate from 1.2% to 4.8%", "Won 2 industry design awards"]
        },
        {
            client: "Retail Giants Ltd",
            title: "E-commerce Performance SEO",
            category: "SEO & Marketing",
            impact: "150% growth in organic revenue",
            metrics: ["150% Revenue", "#1 Rankings", "Global Reach"],
            desc: "Implemented a comprehensive technical SEO strategy for a multinational retailer.",
            image: "/project-3.svg",
            challenges: "Poor search visibility, technical SEO issues, international expansion needs.",
            solution: "Technical SEO overhaul, content strategy, international SEO implementation, and performance optimization.",
            results: ["Achieved #1 rankings for 200+ target keywords", "Expanded to 15 new international markets", "Increased organic revenue by 150%"]
        },
        {
            client: "HealthTech Innovations",
            title: "Healthcare Platform Development",
            category: "Web Development",
            impact: "100% HIPAA compliant system",
            metrics: ["100% Compliance", "50K Users", "99.9% Uptime"],
            desc: "Built a secure, scalable telemedicine platform serving thousands of patients daily.",
            image: "/project-1.svg",
            challenges: "HIPAA compliance requirements, real-time video communication, scalability for rapid growth.",
            solution: "Enterprise-grade platform with end-to-end encryption, HIPAA-compliant infrastructure, and real-time features.",
            results: ["Achieved full HIPAA compliance certification", "Scaled to 50,000+ active users", "Maintained 99.9% uptime"]
        },
        {
            client: "Manufacturing Pro",
            title: "Industrial IoT Integration",
            category: "Growth Consulting",
            impact: "30% reduction in downtime",
            metrics: ["30% Less Downtime", "20% Cost Reduction", "Real-time Monitoring"],
            desc: "Integrated IoT sensors and predictive analytics for a manufacturing facility.",
            image: "/project-2.svg",
            challenges: "Frequent equipment failures, lack of data visibility, reactive maintenance approach.",
            solution: "Deployed IoT sensor network, built predictive analytics dashboard, implemented automated alerts.",
            results: ["Reduced unplanned downtime by 30%", "Cut maintenance costs by 20%", "Improved overall equipment effectiveness by 25%"]
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

            {/* Featured Case Studies */}
            <div className="container mx-auto px-4 py-16">
                <div className="space-y-16">
                    {cases.map((project, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center border-b border-slate-100 pb-16 last:border-0`}>
                            {/* Project Image */}
                            <div className="lg:w-1/2">
                                <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200">
                                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                                </div>
                            </div>
                            
                            {/* Project Details */}
                            <div className="lg:w-1/2">
                                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                                    {project.category}
                                </Badge>
                                <h2 className="text-3xl font-bold text-foreground mb-2">{project.client}</h2>
                                <h3 className="text-xl text-subheading font-medium mb-4">{project.title}</h3>
                                <p className="text-foreground/80 mb-6">{project.desc}</p>
                                
                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {project.metrics.map((metric, idx) => (
                                        <Card key={idx} className="bg-slate-50 border-none shadow-sm">
                                            <CardContent className="flex items-center justify-center p-4 text-center h-full">
                                                <span className="font-bold text-foreground text-sm">{metric}</span>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                {/* Challenge & Solution */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <TrendingUp className="h-5 w-5 text-subheading" />
                                            Challenge
                                        </h4>
                                        <p className="text-sm text-foreground/70">{project.challenges}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <Users className="h-5 w-5 text-subheading" />
                                            Solution
                                        </h4>
                                        <p className="text-sm text-foreground/70">{project.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <DollarSign className="h-5 w-5 text-subheading" />
                                            Results
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                                                    <span className="text-subheading">•</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                                    <Link to="/contact">
                                        Discuss Your Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Industries Served */}
            <div className="bg-slate-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
                        <p className="text-foreground/70">Deep expertise across multiple sectors</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Finance & Banking",
                            "Healthcare",
                            "Retail & E-commerce",
                            "Technology",
                            "Manufacturing",
                            "Education",
                            "Real Estate",
                            "Professional Services"
                        ].map((industry, i) => (
                            <Card key={i} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-6 text-center">
                                    <p className="font-medium text-foreground">{industry}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-20">
                <Card className="bg-subheading text-white border-none">
                    <CardContent className="pt-12 pb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to achieve results like these for your business.
                        </p>
                        <Button asChild size="lg" className="bg-white text-subheading hover:bg-white/90">
                            <Link to="/contact">Start Your Project</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
