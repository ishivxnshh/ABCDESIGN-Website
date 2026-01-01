import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Zap, Award, Globe, Target } from "lucide-react";
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
        {/* Angular Background Overlay */}
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Leading Enterprises Choose ABCDESIGN</h2>
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

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-foreground/70">Comprehensive solutions tailored to enterprise needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Digital Marketing", desc: "Strategic campaigns that deliver measurable ROI" },
              { icon: Globe, title: "Web Development", desc: "High-performance platforms built for scale" },
              { icon: Award, title: "Branding", desc: "Identity systems that stand the test of time" },
              { icon: Zap, title: "Growth Consulting", desc: "Data-backed insights for business transformation" }
            ].map((service, i) => (
              <Card key={i} className="border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-subheading">
                <CardContent className="pt-6 text-center">
                  <service.icon className="h-12 w-12 text-subheading mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-deep text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white/70">Trusted by leading organizations worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "CTO, Global Finance Corp", quote: "ABCDESIGN transformed our digital infrastructure. Their enterprise-level expertise is unmatched." },
              { name: "Michael Rodriguez", role: "VP Marketing, TechStream", quote: "The ROI we've seen from their digital marketing campaigns has exceeded all expectations." },
              { name: "Emily Watson", role: "CEO, Retail Giants Ltd", quote: "Professional, strategic, and results-driven. They're true partners in our growth journey." }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-subheading flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">Certified & Trusted</h3>
            <p className="text-foreground/70">Industry-leading certifications and partnerships</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[
              { name: "ISO 27001", subtitle: "Security" },
              { name: "Google Partner", subtitle: "Premier" },
              { name: "AWS Certified", subtitle: "Solutions" },
              { name: "Microsoft Partner", subtitle: "Gold" }
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <Shield className="h-12 w-12 text-foreground mx-auto mb-2" />
                <div className="font-semibold text-foreground text-sm">{badge.name}</div>
                <div className="text-xs text-foreground/60">{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-subheading text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that trust ABCDESIGN for their digital success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-subheading hover:bg-white/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-subheading">
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
