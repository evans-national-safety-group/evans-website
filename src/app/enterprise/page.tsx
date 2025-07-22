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
  Factory,
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
      title: "Fortune 500 Enterprise Program",
      subtitle: "Global Corporation Excellence",
      description: "Comprehensive ECPORA assessments designed for large-scale enterprises with complex organizational structures and global operations.",
      features: [
        "Multi-location assessment coordination",
        "Executive leadership integration",
        "Corporate governance alignment",
        "Stakeholder reporting frameworks",
        "Global compliance standardization"
      ],
      cta: "Request Enterprise Proposal",
      highlight: false
    },
    {
      title: "Mid-Market Corporate Program", 
      subtitle: "Scalable Business Protection",
      description: "Specialized ECPORA assessments for growing companies requiring robust child protection frameworks without enterprise complexity.",
      features: [
        "Scalable protection protocols",
        "Department-specific implementation",
        "Growth-oriented frameworks",
        "Cost-effective compliance solutions",
        "Leadership development support"
      ],
      cta: "Schedule Corporate Consultation",
      highlight: true
    },
    {
      title: "Industry-Specific Program",
      subtitle: "Sector-Tailored Solutions", 
      description: "Customized assessments for specific industries with unique child protection requirements and regulatory environments.",
      features: [
        "Industry-specific risk assessment",
        "Sector compliance expertise",
        "Peer benchmarking analysis",
        "Regulatory landscape navigation",
        "Best practice implementation"
      ],
      cta: "Begin Industry Partnership",
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
              <a href="/#contact" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Contact</a>
              <a href="/executive-guidance" className="bg-evans-blue text-white px-4 py-2 rounded-lg hover:bg-evans-blue/90 transition-colors">Executive Guidance</a>
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
                <a href="/#contact" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Contact</a>
                <a href="/executive-guidance" className="block px-3 py-2 bg-evans-blue text-white rounded-lg">Executive Guidance</a>
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
                Leadership
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Strategic ECPORA organizational assessments designed for corporate enterprises, Fortune 500 companies, 
              and industry leaders committed to comprehensive child protection excellence across all operations.
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
                View Enterprise Programs
              </a>
            </div>
            
            {/* Enterprise Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">200+</h3>
                <p className="text-white/80 text-sm">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">25+</h3>
                <p className="text-white/80 text-sm">Global Markets</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
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
              Understanding the unique operational complexities and strategic requirements facing large-scale enterprise organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Global Operations</h3>
              <p className="text-slate-600 text-sm">
                Multi-location, multi-country operations requiring standardized child protection 
                protocols across diverse regulatory environments and cultural contexts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Stakeholder Expectations</h3>
              <p className="text-slate-600 text-sm">
                Managing expectations from shareholders, board members, customers, and communities 
                requiring transparent child protection governance and reporting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Risk Management</h3>
              <p className="text-slate-600 text-sm">
                Enterprise-level risk assessment and mitigation strategies requiring comprehensive 
                frameworks for reputation, legal, and operational risk management.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Operational Complexity</h3>
              <p className="text-slate-600 text-sm">
                Large-scale organizational structures with multiple divisions, departments, 
                and business units requiring coordinated child protection implementation.
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
              Strategic ECPORA assessment solutions for enterprise organizations at all scales. 
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
                      Most Scalable
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
                    <div className="text-lg font-semibold text-slate-800 mb-1">Contact for Enterprise Investment</div>
                    <p className="text-sm text-slate-600">Customized proposals based on organizational scale and complexity</p>
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
              Strategic advantages designed for enterprise organizations committed to child protection leadership and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Brand Protection</h3>
              <p className="text-slate-600">
                Comprehensive child protection frameworks protect enterprise reputation and brand value 
                while demonstrating corporate responsibility and stakeholder commitment to safety excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Competitive Advantage</h3>
              <p className="text-slate-600">
                Industry-leading child protection practices create differentiation in the marketplace, 
                enhance customer trust, and support premium positioning in competitive environments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Operational Excellence</h3>
              <p className="text-slate-600">
                Streamlined processes and enterprise-grade frameworks improve operational efficiency 
                while maintaining the highest standards of child protection across all business units.
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
              Ready to elevate your organization's child protection capabilities? 
              Contact our enterprise assessment specialists to discuss your strategic needs and receive a customized proposal.
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
                    placeholder="Corporation/Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Executive Contact
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                    placeholder="C-Suite/VP/Director Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Corporate Email
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
                  Company Size
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Company Size</option>
                  <option>Fortune 500</option>
                  <option>Large Enterprise (1000+ employees)</option>
                  <option>Mid-Market (250-999 employees)</option>
                  <option>Growth Company (100-249 employees)</option>
                  <option>Small Business (50-99 employees)</option>
                  <option>Startup/Emerging (Under 50 employees)</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Assessment Requirements
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-orange focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your organization's child protection assessment needs, operational scope, global/multi-location requirements, timeline, specific industry considerations, and any regulatory or stakeholder requirements..."
                ></textarea>
              </div>

              <div className="bg-evans-orange/5 border border-evans-orange/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-orange mb-2">Enterprise Proposal Process</h4>
                <p className="text-sm text-slate-700">
                  We provide comprehensive enterprise proposals including detailed assessment scope, implementation strategy, 
                  timeline, and investment structure designed for enterprise budgets and procurement processes.
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
