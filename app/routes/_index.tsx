import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Zap, Award, Globe, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import Antigravity from "~/components/Antigravity";
import Magnetic from "~/components/ui/Magnetic";

export const meta: MetaFunction = () => {
  return [
    { title: "ABCDESIGN - Enterprise Digital Solutions" },
    { name: "description", content: "Trusted digital marketing and technology solutions for enterprise growth." },
  ];
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:h-[85vh] bg-brand-blue overflow-hidden flex items-center py-12 sm:py-0">

        {/* Antigravity 3D Background */}
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={300}
            magnetRadius={15}
            ringRadius={12}
            color="#2F80ED" // Brand Accent Blue
            particleSize={2}
            autoAnimate={true}
          />
        </div>

        {/* Restore Original Background Elements (Square/Skew Design) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[70%] h-full bg-brand-dark-navy/20 transform -skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-dark-navy/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-dark-navy/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-brand-dark-navy/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-transparent pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 pointer-events-none">
          <div className="max-w-4xl">
            <div className={cn("transition-all duration-1000 delay-100", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 mb-6 text-white/90 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-white" />
                Trusted by 500+ Enterprise Clients
              </div>
            </div>

            <h1 className={cn("text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] transition-all duration-1000 delay-200", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              Building Trust Through{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10">
                  Digital Excellence
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-brand-accent-blue/30 blur-sm" />
              </span>
            </h1>

            <p className={cn("text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              Enterprise-grade digital marketing, branding, and technology solutions built for scale, performance, and measurable impact.
            </p>

            {/* CTA Buttons */}
            <div className={cn("flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 transition-all duration-1000 delay-400 pointer-events-auto", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              <Button
                asChild
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-white text-brand-blue hover:bg-white/90 rounded-lg transition-all duration-300 group"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Magnetic strength={0.3}>
                <Button
                  asChild
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-blue rounded-lg transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
                >
                  <Link to="/services" className="inline-flex items-center gap-2">
                    Explore Services
                    <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Decorative floating element */}
        <div className="absolute bottom-8 right-8 hidden lg:block opacity-20">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border-2 border-white/20 rounded-full animate-spin-slower" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-tata-light-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { number: "500+", label: "Enterprise Projects", delay: "0ms" },
              { number: "98%", label: "Client Retention", delay: "100ms" },
              { number: "10+", label: "Years of Excellence", delay: "200ms" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 text-center rounded-xl bg-white border-2 border-tata-silver/50 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 bg-tata-silver/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-foreground/80 font-medium text-base sm:text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 sm:py-16 md:py-24 bg-tata-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Why Leading Enterprises <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70">We combine strategic insight with technical precision.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: TrendingUp, title: "Data-Driven Growth", desc: "Every decision is backed by analytics and market intelligence." },
              { icon: CheckCircle, title: "Enterprise Standards", desc: "Security, scalability, and compliance are built into our DNA." },
              { icon: Users, title: "End-to-End Execution", desc: "From concept to deployment, we handle the entire lifecycle." }
            ].map((item, i) => (
              <Card
                key={i}
                className="group border-2 border-tata-silver/50 shadow-sm bg-white hover:shadow-2xl hover:border-primary transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-tata-silver/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="pt-8 pb-8 relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-primary mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Section - Alternating Layout */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Section <span className="text-primary">Title</span>
            </h2>
            <p className="text-lg text-foreground/70">Placeholder subtitle text goes here</p>
          </div>

          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {/* Item 1 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative rounded-2xl shadow-xl w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xl font-semibold">Image Placeholder</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold">
                  Category Tag
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Headline Text Goes Here
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point one placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point two placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point three placeholder text</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Item 2 - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 lg:order-1 order-2">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-blue/10 text-brand-blue rounded-full text-xs sm:text-sm font-semibold">
                  Category Tag
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Headline Text Goes Here
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point one placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point two placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point three placeholder text</span>
                  </li>
                </ul>
              </div>
              <div className="relative group lg:order-2 order-1">
                <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                <div className="relative rounded-2xl shadow-xl w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xl font-semibold">Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Item 3 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative rounded-2xl shadow-xl w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-base sm:text-xl font-semibold">Image Placeholder</span>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-blue/10 text-brand-blue rounded-full text-xs sm:text-sm font-semibold">
                  Category Tag
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Headline Text Goes Here
                </h3>
                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-foreground/70">Bullet point one placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-foreground/70">Bullet point two placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-foreground/70">Bullet point three placeholder text</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Item 4 - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 lg:order-1 order-2">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-blue/10 text-brand-blue rounded-full text-xs sm:text-sm font-semibold">
                  Category Tag
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Headline Text Goes Here
                </h3>
                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point one placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point two placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point three placeholder text</span>
                  </li>
                </ul>
              </div>
              <div className="relative group lg:order-2 order-1">
                <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                <div className="relative rounded-2xl shadow-xl w-full h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xl font-semibold">Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Item 5 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative rounded-2xl shadow-xl w-full h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xl font-semibold">Image Placeholder</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold">
                  Category Tag
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Headline Text Goes Here
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point one placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point two placeholder text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">Bullet point three placeholder text</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tata-silver/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-foreground/70">Comprehensive solutions tailored to enterprise needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Digital Marketing", desc: "Strategic campaigns that deliver measurable ROI" },
              { icon: Globe, title: "Web Development", desc: "High-performance platforms built for scale" },
              { icon: Award, title: "Branding", desc: "Identity systems that stand the test of time" },
              { icon: Zap, title: "Growth Consulting", desc: "Data-backed insights for business transformation" }
            ].map((service, i) => (
              <Card
                key={i}
                className="group border-2 border-tata-silver/50 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-500 hover:-translate-y-3 overflow-hidden relative bg-white"
              >
                <div className="absolute inset-0 bg-tata-light-grey opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="pt-8 pb-8 text-center relative z-10">
                  <div className="relative inline-block mb-6">
                    <service.icon className="relative h-14 w-14 text-tata-dark-grey mx-auto transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.desc}</p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link to="/services" className="inline-flex items-center gap-2">
                View All Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 sm:py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-white/80 text-base sm:text-lg">Trusted by leading organizations worldwide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Sarah Chen", role: "CTO, Global Finance Corp", quote: "ABCDESIGN transformed our digital infrastructure. Their enterprise-level expertise is unmatched.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
              { name: "Michael Rodriguez", role: "VP Marketing, TechStream", quote: "The ROI we've seen from their digital marketing campaigns has exceeded all expectations.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
              { name: "Emily Watson", role: "CEO, Retail Giants Ltd", quote: "Professional, strategic, and results-driven. They're true partners in our growth journey.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" }
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="group bg-brand-soft-blue border border-brand-accent-blue/15 hover:border-brand-accent-blue/30 transition-all duration-500 overflow-hidden"
              >
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 relative">
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-5xl sm:text-6xl text-white/10 font-serif">"</div>
                  <div className="flex items-center mb-4 sm:mb-6 relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/30"
                    />
                    <div className="ml-3 sm:ml-4">
                      <div className="font-bold text-white text-base sm:text-lg">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-white/70">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-white/90 italic leading-relaxed relative z-10 text-sm sm:text-base">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-tata-light-grey to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">Certified & Trusted</h3>
            <p className="text-base sm:text-lg text-foreground/70">Industry-leading certifications and partnerships</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "ISO 27001", subtitle: "Security" },
              { name: "Google Partner", subtitle: "Premier" },
              { name: "AWS Certified", subtitle: "Solutions" },
              { name: "Microsoft Partner", subtitle: "Gold" }
            ].map((badge, i) => (
              <div
                key={i}
                className="group text-center p-4 sm:p-6 rounded-xl bg-white border-2 border-tata-silver/50 hover:border-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative inline-block mb-3 sm:mb-4">
                  <Shield className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-tata-dark-grey group-hover:text-primary mx-auto transition-all duration-500 group-hover:scale-110" />
                </div>
                <div className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">{badge.name}</div>
                <div className="text-xs sm:text-sm text-foreground/60 mt-1">{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark-navy/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 sm:mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
            <Users className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of enterprises that trust ABCDESIGN for their digital success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-brand-blue hover:bg-white/90 transition-all duration-300 group"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 sm:h-14 px-6 sm:px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-blue transition-all duration-300"
            >
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
