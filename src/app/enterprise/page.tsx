'use client'

import React, { useState, useEffect } from 'react'
import { 
  Shield, 
  Users, 
  Award, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Globe, 
  Lock, 
  Zap,
  BarChart3,
  Building2,
  FileText,
  Clock,
  Phone,
  Calendar,
  TrendingUp,
  Briefcase,
  Target,
  Menu,
  X
} from 'lucide-react'

export default function EnterprisePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const enterpriseSolutions = [
    {
      title: "Fortune 500 Program",
      subtitle: "Enterprise-Scale Excellence",
      description: "Comprehensive ECPORA assessments designed for large corporations with complex organizational structures and multi-location operations.",
      features: [
        "Multi-location coordination frameworks",
        "Corporate governance integration",
        "Executive accountability systems",
        "Brand protection strategies",
        "Investor relations compliance"
      ],
      cta: "Request Enterprise Consultation",
      highlight: false
    },
    {
      title: "Mid-Market Business Program", 
      subtitle: "Scalable Protection Solutions",
      description: "Strategic ECPORA assessments for growing businesses requiring robust child protection frameworks without enterprise complexity.",
      features: [
        "Scalable implementation strategies",
        "Cost-effective assessment protocols",
        "Growth-oriented protection planning",
        "Industry-specific customization",
        "Regulatory compliance optimization"
      ],
      cta: "Schedule Business Assessment",
      highlight: true
    },
    {
      title: "Small Business Program",
      subtitle: "Focused Implementation Excellence", 
      description: "Streamlined ECPORA assessments for small businesses serving families and children with targeted protection needs.",
      features: [
        "Streamlined assessment process",
        "Resource-efficient implementation",
        "Small business budget optimization",
        "Community-focused strategies",
        "Simplified compliance frameworks"
      ],
      cta: "Begin Small Business Partnership",
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-evans-blue" />
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-slate-800' : 'text-white'}`}>Evans National Safety Group</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Home</a>
              <a href="/#platform" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Platform</a>
              <a href="/#ecosystem" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Sectors</a>
              <a href="/about" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>About</a>
              <a href="/#contact" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Contact</a>
              <a href="/executive-guidance" className="bg-evans-orange text-white px-4 py-2 rounded-lg hover:bg-evans-orange/90 transition-colors">Executive Guidance</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white hover:text-white/80'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Home</a>
                <a href="/#platform" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Platform</a>
                <a href="/#ecosystem" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Sectors</a>
                <a href="/about" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">About</a>
                <a href="/#contact" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Contact</a>
                <a href="/executive-guidance" className="block px-3 py-2 bg-evans-orange text-white rounded-lg">Executive Guidance</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Orange Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-evans-gradient-orange"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Enterprise ECPORA Assessment Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise
              <span className="block text-evans-blue">
                Child Protection
              </span>
              <span className="block text-evans-green">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Strategic ECPORA organizational assessments designed for corporations and businesses serving families and children, 
              creating competitive advantage through industry-leading child protection excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Request Enterprise Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Business Programs
              </a>
            </div>
            
            {/* Enterprise Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">250+</h3>
                <p className="text-white/80 text-sm">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">$50M+</h3>
                <p className="text-white/80 text-sm">Risk Mitigation Value</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">95%</h3>
                <p className="text-white/80 text-sm">ROI Achievement</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">12+</h3>
                <p className="text-white/80 text-sm">Years Enterprise Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Challenges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Enterprise Assessment Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the unique business requirements and competitive considerations facing enterprises in child protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Business Continuity</h3>
              <p className="text-slate-600 text-sm">
                Implementing comprehensive child protection without disrupting business operations 
                or impacting customer experience and revenue generation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Brand Protection</h3>
              <p className="text-slate-600 text-sm">
                Safeguarding corporate reputation and brand value through proactive child protection 
                measures that prevent incidents and demonstrate corporate responsibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Competitive Advantage</h3>
              <p className="text-slate-600 text-sm">
                Creating market differentiation through industry-leading child protection standards 
                that attract customers and enhance business development opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Stakeholder Confidence</h3>
              <p className="text-slate-600 text-sm">
                Building trust with investors, customers, and partners through demonstrated 
                commitment to child protection excellence and corporate social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Enterprise Assessment Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic ECPORA assessment solutions for businesses at all scales. 
              Investment details provided through customized enterprise proposals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {enterpriseSolutions.map((program, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  program.highlight 
                    ? 'border-evans-orange bg-gradient-to-br from-evans-orange/5 to-white' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-8">
                  {program.highlight && (
                    <div className="bg-evans-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{program.title}</h3>
                  <p className="text-lg text-evans-orange font-semibold mb-4">{program.subtitle}</p>
                  <p className="text-slate-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-lg font-semibold text-slate-800 mb-1">Contact for Enterprise Pricing</div>
                    <p className="text-sm text-slate-600">ROI-focused proposals with measurable business outcomes</p>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    program.highlight
                      ? 'bg-evans-orange text-white hover:bg-evans-orange/90'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}>
                    {program.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Enterprise Partnership Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic business advantages designed for enterprises committed to child protection excellence and market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Competitive Differentiation</h3>
              <p className="text-slate-600">
                Industry-leading child protection standards create significant competitive advantages, 
                enhancing market position and attracting customers who value corporate responsibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Risk Mitigation</h3>
              <p className="text-slate-600">
                Comprehensive protection frameworks reduce liability exposure, insurance costs, 
                and reputational risks while strengthening overall enterprise risk management.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Stakeholder Value</h3>
              <p className="text-slate-600">
                Demonstrated commitment to child protection excellence builds investor confidence, 
                enhances ESG ratings, and creates sustainable business value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Request Enterprise Assessment Proposal
            </h2>
            <p className="text-xl text-slate-600">
              Ready to create competitive advantage through child protection excellence? 
              Contact our enterprise assessment specialists to discuss your business needs and receive a ROI-focused proposal.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Executive Contact
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                    placeholder="CEO/Executive Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Business Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                    placeholder="executive@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Direct Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Business Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Business Type</option>
                  <option>Fortune 500 Corporation</option>
                  <option>Large Enterprise (1000+ employees)</option>
                  <option>Mid-Market Business (100-999 employees)</option>
                  <option>Small Business (10-99 employees)</option>
                  <option>Startup/Emerging Business</option>
                  <option>Family Entertainment Business</option>
                  <option>Youth Services Organization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Assessment Requirements & Business Objectives
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your business's child protection assessment needs, industry sector, customer base, competitive objectives, timeline, and desired business outcomes..."
                ></textarea>
              </div>

              <div className="bg-evans-orange/5 border border-evans-orange/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-orange mb-2">Enterprise Proposal Process</h4>
                <p className="text-sm text-slate-700">
                  We provide strategic enterprise proposals including detailed ROI analysis, competitive positioning, 
                  implementation roadmap, and investment structure designed to deliver measurable business value.
                </p>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Request Enterprise Assessment Proposal
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
