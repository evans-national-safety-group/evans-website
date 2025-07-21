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
  Crown,
  Target,
  TrendingUp,
  Eye,
  AlertTriangle,
  MessageCircle,
  Lightbulb,
  HandHeart,
  Menu,
  X
} from 'lucide-react'

export default function ExecutiveGuidancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('guidance')

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-slate-200')
          header.classList.remove('bg-transparent')
        } else {
          header.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-slate-200')
          header.classList.add('bg-transparent')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const guidancePrograms = [
    {
      name: "Executive Guidance Access",
      price: "$2,500",
      period: "per month",
      description: "Strategic decision support for complex child protection challenges",
      features: [
        "Direct access to senior child protection experts",
        "Strategic guidance for organizational decisions",
        "Expert consultation within 4 hours",
        "Monthly strategic planning session",
        "Crisis decision support protocols",
        "Leadership best practices guidance"
      ],
      highlighted: false,
      cta: "Establish Partnership"
    },
    {
      name: "Priority Leadership Support",
      price: "$5,000",
      period: "per month",
      description: "Enhanced strategic partnership with priority expert access",
      features: [
        "All Executive Guidance Access benefits",
        "Priority expert response within 2 hours",
        "Bi-weekly strategic advisory sessions",
        "Board presentation support",
        "Crisis leadership protocols",
        "Regulatory guidance and compliance",
        "Executive team development support",
        "Strategic planning facilitation"
      ],
      highlighted: true,
      cta: "Secure Priority Access"
    },
    {
      name: "Strategic Partnership Program",
      price: "$10,000",
      period: "per month",
      description: "Comprehensive executive partnership with immediate expert access",
      features: [
        "All Priority Leadership Support benefits",
        "Immediate expert response (within 1 hour)",
        "Weekly strategic advisory sessions",
        "Direct access to Cheryl Evans",
        "24/7 mission-critical support",
        "Board-level strategic consulting",
        "Crisis response team activation",
        "Executive leadership coaching",
        "Industry intelligence and insights",
        "Competitive advantage strategies"
      ],
      highlighted: false,
      cta: "Begin Strategic Partnership"
    }
  ]

  const decisionScenarios = [
    {
      icon: AlertTriangle,
      title: "Crisis Decision Points",
      description: "When allegations arise, regulatory investigations begin, or media attention threatens organizational reputation",
      value: "Immediate expert guidance prevents costly missteps and protects organizational integrity"
    },
    {
      icon: Building2,
      title: "Strategic Organizational Changes",
      description: "Mergers, acquisitions, leadership transitions, or policy overhauls affecting child protection protocols",
      value: "Strategic counsel ensures continuity and compliance throughout organizational transformation"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance Challenges",
      description: "New regulations, audit requirements, or compliance gaps requiring immediate expert interpretation",
      value: "Expert guidance ensures regulatory alignment and reduces legal and reputational risk"
    },
    {
      icon: Target,
      title: "Board-Level Presentations",
      description: "Executive reporting, board meetings, or stakeholder presentations requiring expert credibility",
      value: "Strategic support elevates executive confidence and organizational decision-making"
    }
  ]

  const executiveOutcomes = [
    {
      metric: "Decision Confidence",
      description: "Executives gain strategic clarity for complex child protection decisions",
      icon: TrendingUp
    },
    {
      metric: "Risk Mitigation", 
      description: "Proactive expert guidance reduces organizational and reputational risk",
      icon: Shield
    },
    {
      metric: "Competitive Advantage",
      description: "Industry insights and strategic counsel create organizational excellence",
      icon: Crown
    },
    {
      metric: "Leadership Development",
      description: "Ongoing partnership builds internal expertise and organizational capability",
      icon: Lightbulb
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="header fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center px-2">
                <img 
                  src="/images/evans-logo.png" 
                  alt="Evans National Safety Group" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-800">Evans National Safety Group</h1>
                <p className="text-sm text-slate-600">Executive Strategic Guidance</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-700 hover:text-evans-blue transition-colors">Home</a>
              <a href="/#services" className="text-slate-700 hover:text-evans-blue transition-colors">Services</a>
              <a href="/#about" className="text-slate-700 hover:text-evans-blue transition-colors">About</a>
              <a href="/#contact" className="text-slate-700 hover:text-evans-blue transition-colors">Contact</a>
              <a 
                href="#partnership" 
                className="btn-evans"
              >
                Explore Partnership
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-md p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">Home</a>
              <a href="/#services" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">Services</a>
              <a href="/#about" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">About</a>
              <a href="/#contact" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">Contact</a>
              <a href="#partnership" className="block px-3 py-2 rounded-md btn-evans">Explore Partnership</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-evans-blue via-slate-800 to-evans-slate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-evans-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-evans-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange/10 backdrop-blur-sm rounded-full text-evans-orange text-sm font-medium mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Executive Strategic Guidance Programs
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic Decision
              <span className="block bg-gradient-to-r from-evans-orange to-evans-green bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Executive leadership partnership providing immediate access to 27+ years of child protection expertise. 
              Strategic guidance when critical decisions arise. Competitive advantage through expert counsel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#partnership" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Explore Executive Partnership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#scenarios" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20"
              >
                View Decision Scenarios
              </a>
            </div>

            {/* Executive Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {executiveOutcomes.map((outcome, index) => {
                const Icon = outcome.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-evans-orange" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{outcome.metric}</h3>
                    <p className="text-slate-300 text-sm">{outcome.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Decision Scenarios Section */}
      <section id="scenarios" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              When Executive Leadership Requires 
              <span className="text-evans-blue block">Immediate Expert Guidance</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complex child protection decisions demand expert counsel. Our strategic guidance programs provide immediate access to senior expertise when critical organizational decisions arise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {decisionScenarios.map((scenario, index) => {
              const Icon = scenario.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-evans-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{scenario.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{scenario.description}</p>
                      <div className="bg-evans-green/5 border-l-4 border-evans-green rounded-r-lg p-4">
                        <p className="text-evans-green font-medium">{scenario.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategic Partnership Programs */}
      <section id="partnership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Executive Strategic Guidance 
              <span className="text-evans-blue block">Partnership Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the level of strategic partnership that aligns with your executive leadership needs. Immediate expert guidance, ongoing strategic counsel, and mission-critical decision support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {guidancePrograms.map((program, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  program.highlighted 
                    ? 'bg-gradient-to-br from-evans-blue to-slate-700 text-white shadow-2xl border-2 border-evans-blue' 
                    : 'bg-white border-2 border-slate-200 hover:border-evans-blue shadow-lg hover:shadow-xl'
                }`}
              >
                {program.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-evans-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-3 ${program.highlighted ? 'text-white' : 'text-slate-800'}`}>
                    {program.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${program.highlighted ? 'text-white' : 'text-evans-blue'}`}>
                      {program.price}
                    </span>
                    <span className={`text-lg ml-2 ${program.highlighted ? 'text-slate-200' : 'text-slate-600'}`}>
                      {program.period}
                    </span>
                  </div>
                  <p className={`${program.highlighted ? 'text-slate-200' : 'text-slate-600'}`}>
                    {program.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        program.highlighted ? 'text-evans-green' : 'text-evans-green'
                      }`} />
                      <span className={`${program.highlighted ? 'text-white' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                    program.highlighted
                      ? 'bg-white text-evans-blue hover:bg-slate-100'
                      : 'bg-evans-blue text-white hover:bg-evans-blue/90'
                  }`}
                >
                  {program.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-evans-blue to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Strategic Partnership Value
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
              Executive leadership partnership that transforms organizational decision-making, reduces risk, and creates competitive advantage through expert guidance.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-evans-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
                <p className="text-slate-200">
                  Proactive expert guidance prevents costly mistakes and reduces organizational vulnerability through strategic decision support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-evans-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Advantage</h3>
                <p className="text-slate-200">
                  Industry insights and expert counsel create competitive differentiation and organizational excellence in child protection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-evans-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Leadership Excellence</h3>
                <p className="text-slate-200">
                  Executive confidence through immediate access to 27+ years of child protection expertise and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Establish Your Strategic Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to enhance your executive decision-making with immediate access to child protection expertise? Let's discuss your strategic partnership needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Executive Partnership Inquiry</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Executive Name
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Chief Executive Officer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Organization
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Executive Email
                    </label>
                    <input 
                      type="email" 
                      className="input w-full"
                      placeholder="executive@organization.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Strategic Partnership Interest
                    </label>
                    <select className="input w-full">
                      <option>Executive Guidance Access ($2,500/month)</option>
                      <option>Priority Leadership Support ($5,000/month)</option>
                      <option>Strategic Partnership Program ($10,000/month)</option>
                      <option>Custom Partnership Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Strategic Guidance Needs
                    </label>
                    <textarea 
                      className="input w-full h-32"
                      placeholder="Describe your executive decision support requirements and strategic guidance needs..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn-evans text-center py-4"
                  >
                    Request Strategic Partnership Discussion
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Partnership Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Immediate expert guidance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Strategic decision confidence</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Risk mitigation strategies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Competitive advantage insights</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Executive Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Executive Line: (505) 555-0199</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">executives@evansnationalsafety.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Priority response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-evans-blue/5 border border-evans-blue/20 rounded-xl p-6">
                  <h4 className="font-bold text-evans-blue mb-2">Strategic Partnership Commitment</h4>
                  <p className="text-sm text-slate-700">
                    Executive partnerships require mutual commitment to strategic excellence. All programs include confidentiality agreements and strategic partnership terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-2">
                  <img 
                    src="/images/evans-logo.png" 
                    alt="Evans National Safety Group" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Evans National Safety Group</h3>
                  <p className="text-slate-400">Executive Strategic Guidance</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Strategic partnership programs providing executive leadership with immediate access to 27+ years of child protection expertise and strategic guidance.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Partnership Programs</h4>
              <ul className="space-y-3">
                <li><a href="#partnership" className="text-slate-400 hover:text-white transition-colors">Executive Guidance Access</a></li>
                <li><a href="#partnership" className="text-slate-400 hover:text-white transition-colors">Priority Leadership Support</a></li>
                <li><a href="#partnership" className="text-slate-400 hover:text-white transition-colors">Strategic Partnership Program</a></li>
                <li><a href="#scenarios" className="text-slate-400 hover:text-white transition-colors">Decision Scenarios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Executive Resources</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors">ECPORA Assessments</a></li>
                <li><a href="/enterprise" className="text-slate-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
                <li><a href="/government" className="text-slate-400 hover:text-white transition-colors">Government Partnerships</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Strategic Consultation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Evans National Safety Group LLC. All rights reserved. | Executive Strategic Guidance Programs
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
