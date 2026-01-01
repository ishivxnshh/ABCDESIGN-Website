import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export function meta() {
  return [
    { title: "ABCDESIGN - Enterprise Digital Solutions" },
    { name: "description", content: "Trusted digital marketing and technology solutions for enterprise growth." },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Building Trust Through <span className="text-primary">Digital Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We deliver enterprise-grade marketing, branding, and technology solutions designed for scalability, performance, and measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-sm">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-white">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-slate-600 font-medium">Enterprise Projects</div>
            </div>
            <div className="p-6 border-l-0 md:border-l border-slate-100">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-slate-600 font-medium">Client Retention</div>
            </div>
            <div className="p-6 border-l-0 md:border-l border-slate-100">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-slate-600 font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Leading Enterprises Choose ABCDESIGN</h2>
            <p className="text-slate-600">We combine strategic insight with technical precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Data-Driven Growth", desc: "Every decision is backed by analytics and market intelligence." },
              { icon: CheckCircle, title: "Enterprise Standards", desc: "Security, scalability, and compliance are built into our DNA." },
              { icon: ArrowRight, title: "End-to-End Execution", desc: "From concept to deployment, we handle the entire lifecycle." }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
