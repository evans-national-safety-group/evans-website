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
  Menu,
  X
} from 'lucide-react'

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ecosystemCards = [
    {
      title: "Government Agencies",
      description: "Federal, state, and local government ECPORA assessments with comprehensive compliance frameworks and regulatory excellence.",
      icon: Building2,
      href: "/government",
      gradient: "bg-evans-gradient-blue"
    },
    {
      title: "Educational Institutions", 
      description: "K-12 schools, universities, and educational organizations with specialized child protection assessment solutions.",
      icon: Users,
      href: "/education",
      gradient: "bg-evans-gradient-green"
    },
    {
      title: "Enterprise Organizations",
      description: "Corporate child protection assessments for businesses serving families and youth across all industry sectors.",
      icon: BarChart3,
      href: "/enterprise", 
      gradient: "bg-evans-gradient-orange"
    },
    {
      title: "Non-Profit Organizations",
      description: "Mission-aligned ECPORA assessments for non-profits, faith-based organizations, and community groups.",
      icon: Globe,
      href: "/nonprofit",
      gradient: "bg-evans-gradient-slate"
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
              <a href="#platform" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Platform</a>
              <a href="#ecosystem" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Sectors</a>
              <a href="/about" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>About</a>
              <a href="#contact" className={`${scrolled ? 'text-slate-700 hover:text-evans-blue' : 'text-white/90 hover:text-white'} transition-colors`}>Contact</a>
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
                <a href="#platform" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Platform</a>
                <a href="#ecosystem" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Sectors</a>
                <a href="/about" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">About</a>
                <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Contact</a>
                <a href="/executive-guidance" className="block px-3 py-2 bg-evans-orange text-white rounded-lg">Executive Guidance</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-evans-gradient-blue"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Technology-Enhanced Child Protection Excellence
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ECPORA Child
              <span className="block text-evans-orange">
                Protection
              </span>
              <span className="block text-evans-green">
                Assessments
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Evans National Safety Group delivers comprehensive ECPORA organizational assessments backed by 27+ years of child protection expertise, evidence-based methodology, and AI-enhanced analysis tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Schedule ECPORA Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#platform" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Learn About Our Approach
              </a>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">27+</h3>
                <p className="text-white/80 text-sm">Years Expertise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">500+</h3>
                <p className="text-white/80 text-sm">Organizations Served</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">99.5%</h3>
                <p className="text-white/80 text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">50</h3>
                <p className="text-white/80 text-sm">States Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              The ECPORA Assessment Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive organizational readiness assessments that go beyond compliance to create cultures of child protection excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-evans-blue/30 transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Evidence-Based Methodology</h3>
              <p className="text-slate-600">
                27+ years of child protection expertise distilled into a comprehensive assessment framework that identifies vulnerabilities before incidents occur.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-evans-green/30 transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">AI-Enhanced Analysis</h3>
              <p className="text-slate-600">
                Advanced technology integration provides deeper insights and pattern recognition to optimize organizational protection systems.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-evans-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Sector-Specific Solutions</h3>
              <p className="text-slate-600">
                Tailored assessments for government, education, enterprise, and non-profit organizations with industry-specific requirements and challenges.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-evans-slate/30 transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Executive Guidance</h3>
              <p className="text-slate-600">
                C-suite and senior leadership development programs that create accountability and drive organizational transformation from the top down.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-evans-blue/30 transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Comprehensive Reporting</h3>
              <p className="text-slate-600">
                Detailed assessment reports with actionable recommendations, implementation timelines, and ongoing measurement frameworks.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-evans-green/30 transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Continuous Improvement</h3>
              <p className="text-slate-600">
                Ongoing partnership and support to ensure sustained organizational excellence and continuous adaptation to emerging best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Comprehensive Sector Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized ECPORA assessments designed for the unique challenges and requirements of your organizational sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemCards.map((card, index) => (
              <a 
                key={index}
                href={card.href}
                className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 ${card.gradient}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed">{card.description}</p>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold mr-2">Explore Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Guidance CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-evans-gradient-primary rounded-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Guidance Programs
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Specialized consultation and development programs for C-suite executives and senior leadership teams committed to child protection excellence.
            </p>
            <a 
              href="/executive-guidance" 
              className="bg-white text-evans-blue hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
            >
              Explore Executive Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Ready to Begin Your ECPORA Assessment?
            </h2>
            <p className="text-xl text-slate-600">
              Contact Evans National Safety Group to discuss your organization's child protection needs and schedule your comprehensive ECPORA assessment.
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
                    Contact Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="contact@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
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
                  Organization Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Organization Type</option>
                  <option>Government Agency</option>
                  <option>Educational Institution</option>
                  <option>Enterprise/Corporate</option>
                  <option>Non-Profit Organization</option>
                  <option>Faith-Based Organization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Assessment Needs
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your organization's child protection assessment needs, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <div className="bg-evans-blue/5 border border-evans-blue/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-blue mb-2">Next Steps</h4>
                <p className="text-sm text-slate-700">
                  Our assessment specialists will contact you within 24 hours to discuss your needs and provide a customized proposal including timeline, scope, and investment details.
                </p>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Schedule ECPORA Assessment
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
