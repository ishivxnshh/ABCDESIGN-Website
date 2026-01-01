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
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a7a] to-deep overflow-hidden flex items-center">
        {/* Dynamic Rotation Container (Layer 1 - Bottom) */}
        {/* Massive 180vmax size to ensure wings exceed viewport bounds at all angles */}
        <div className="absolute top-1/2 left-1/2 w-[180vmax] h-[180vmax] -mt-[90vmax] -ml-[90vmax] pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow origin-center relative opacity-25">
            <img
              src="/rotators-wing-1.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain scale-110 brightness-110 contrast-125 drop-shadow-2xl"
            />
            <img
              src="/rotators-wing-2.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain scale-110 brightness-110 contrast-125 drop-shadow-2xl"
              style={{ transform: 'rotate(120deg)' }}
            />
            <img
              src="/rotators-wing-3.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain scale-110 brightness-125 contrast-125 drop-shadow-2xl"
              style={{ transform: 'rotate(240deg)' }}
            />
          </div>
        </div>

        {/* Angular Background Overlay (Layer 2 - Top) */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-white/5 transform -skew-x-12 translate-x-1/4 pointer-events-none z-0" />



        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Building Trust Through <br className="hidden md:block" />
              <span className="text-white/90">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed">
              Enterprise-grade digital marketing, branding, and technology solutions built for scale, performance, and measurable impact.
            </p>

            {/* CTA Anchor Zone */}
            <div className="relative inline-flex flex-col sm:flex-row items-start gap-4 pt-4">
              {/* Subtle base visual anchor */}
              <div className="absolute -inset-6 -left-8 -right-8 bg-white/5 -z-10 -skew-x-6 rounded-sm pointer-events-none" />

              <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm border border-transparent">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base bg-transparent text-white border-white/30 hover:bg-white hover:text-deep rounded-sm transition-all hover:border-white">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-subheading mb-2">500+</div>
              <div className="text-foreground font-medium">Enterprise Projects</div>
            </div>
            <div className="p-6 border-l-0 md:border-l border-slate-200">
              <div className="text-4xl font-bold text-subheading mb-2">98%</div>
              <div className="text-foreground font-medium">Client Retention</div>
            </div>
            <div className="p-6 border-l-0 md:border-l border-slate-200">
              <div className="text-4xl font-bold text-subheading mb-2">10+</div>
              <div className="text-foreground font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-subheading mb-4">Why Leading Enterprises Choose ABCDESIGN</h2>
            <p className="text-foreground">We combine strategic insight with technical precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Data-Driven Growth", desc: "Every decision is backed by analytics and market intelligence." },
              { icon: CheckCircle, title: "Enterprise Standards", desc: "Security, scalability, and compliance are built into our DNA." },
              { icon: ArrowRight, title: "End-to-End Execution", desc: "From concept to deployment, we handle the entire lifecycle." }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="h-10 w-10 text-subheading mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
