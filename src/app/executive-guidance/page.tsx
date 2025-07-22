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
  MessageCircle,
  Lightbulb,
  Heart,
  Menu,
  X,
  AlertTriangle
} from 'lucide-react'

export default function ExecutiveGuidancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const guidancePrograms = [
    {
      title: "Executive Guidance Access",
      subtitle: "Strategic Decision Support",
      description: "Immediate expert guidance for critical leadership decisions, regulatory compliance, and organizational challenges.",
      features: [
        "Direct expert consultation access",
        "Strategic decision framework support",
        "Risk mitigation guidance",
        "Regulatory compliance counsel",
        "Leadership development insights"
      ],
      cta: "Discuss Partnership Details",
      highlight: false
    },
    {
      title: "Priority Leadership Support", 
      subtitle: "Enhanced Executive Partnership",
      description: "Priority access to senior experts with expedited response times for mission-critical organizational needs.",
      features: [
        "Priority expert access (4-hour response)",
        "Dedicated strategic consultant assignment",
        "Crisis decision support protocols",
        "Executive coaching integration",
        "Strategic planning facilitation"
      ],
      cta: "Schedule Consultation",
      highlight: true
    },
    {
      title: "Strategic Partnership Program",
      subtitle: "Comprehensive Leadership Alliance", 
      description: "Complete executive support ecosystem with immediate expert access and strategic organizational development.",
      features: [
        "24/7 expert response capability",
        "Dedicated senior consultant team",
        "Strategic organizational assessment",
        "Executive crisis response protocols",
        "Ongoing strategic development support"
      ],
      cta: "Begin Strategic Discussion",
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
              <span className="ml-2 text-xl font-bold text-slate-800">Evans National Safety Group</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-700 hover:text-evans-blue transition-colors">Home</a>
              <a href="/#platform" className="text-slate-700 hover:text-evans-blue transition-colors">Platform</a>
              <a href="/#ecosystem" className="text-slate-700 hover:text-evans-blue transition-colors">Sectors</a>
              <a href="/#contact" className="text-slate-700 hover:text-evans-blue transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-evans-blue"
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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue/10 rounded-full text-evans-blue text-sm font-medium mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Executive Strategic Guidance Programs
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Strategic Decision
              <span className="block text-evans-blue">
                Confidence
              </span>
              <span className="block text-slate-600">
                for Leaders
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              When critical decisions can't wait and organizational success depends on immediate expert guidance, 
              Evans Executive Strategic Guidance Programs provide C-suite leaders with instant access to seasoned expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Explore Executive Partnership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Partnership Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Scenarios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              When Executive Decision Confidence Matters Most
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic guidance for the moments when leadership decisions define organizational futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Crisis Response</h3>
              <p className="text-slate-600 text-sm">
                Immediate expert guidance during organizational crises, regulatory investigations, 
                or public relations emergencies requiring decisive leadership.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Strategic Pivots</h3>
              <p className="text-slate-600 text-sm">
                Expert counsel for major organizational changes, mergers, restructuring, 
                or strategic direction shifts requiring confident executive decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Compliance Decisions</h3>
              <p className="text-slate-600 text-sm">
                Strategic guidance for complex regulatory compliance decisions, 
                policy development, and risk management requiring expert interpretation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Board Presentations</h3>
              <p className="text-slate-600 text-sm">
                Executive preparation for critical board meetings, investor presentations, 
                or stakeholder communications requiring strategic positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Executive Partnership Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic leadership support structured as exclusive partnerships for organizational decision confidence. 
              Partnership investment varies based on organizational scope and strategic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guidancePrograms.map((program, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  program.highlight 
                    ? 'border-evans-blue bg-gradient-to-br from-evans-blue/5 to-white' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-8">
                  {program.highlight && (
                    <div className="bg-evans-blue text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{program.title}</h3>
                  <p className="text-lg text-evans-blue font-semibold mb-4">{program.subtitle}</p>
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
                    <div className="text-lg font-semibold text-slate-800 mb-1">Partnership Investment Varies</div>
                    <p className="text-sm text-slate-600">Customized based on organizational requirements</p>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    program.highlight
                      ? 'bg-evans-blue text-white hover:bg-evans-blue/90'
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

      {/* Strategic Value */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Strategic Executive Value
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Partnership benefits designed to enhance leadership effectiveness and organizational resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Risk Mitigation</h3>
              <p className="text-slate-600">
                Expert guidance reduces decision-making risks and provides confidence in critical moments 
                when organizational reputation and success are at stake.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Advantage</h3>
              <p className="text-slate-600">
                Access to seasoned expertise provides competitive advantages in decision-making speed, 
                accuracy, and strategic positioning within your industry.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Leadership Excellence</h3>
              <p className="text-slate-600">
                Continuous access to expert counsel enhances leadership capabilities and builds 
                long-term strategic thinking and decision confidence.
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
              Establish Strategic Partnership
            </h2>
            <p className="text-xl text-slate-600">
              Ready to secure executive decision confidence for your organization? 
              Contact our strategic partnership team to discuss your leadership support needs and customized investment options.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organization Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your Organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Executive Title
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="CEO, COO, etc."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Direct Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="executive@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Direct Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Organization Sector
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Primary Sector</option>
                  <option>Fortune 500 Enterprise</option>
                  <option>Federal Government</option>
                  <option>State/Local Government</option>
                  <option>Higher Education</option>
                  <option>Healthcare System</option>
                  <option>Financial Services</option>
                  <option>Non-Profit (Large)</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Strategic Partnership Requirements
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your executive decision support needs, critical challenges you're facing, timeline requirements, and any specific strategic guidance areas where partnership would be most valuable..."
                ></textarea>
              </div>

              <div className="bg-evans-blue/5 border border-evans-blue/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-blue mb-2">Strategic Partnership Investment</h4>
                <p className="text-sm text-slate-700">
                  Partnership investment details will be discussed during your strategic consultation. 
                  Investment varies based on organizational scope, decision support requirements, and partnership tier.
                </p>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Begin Strategic Partnership Discussion
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
