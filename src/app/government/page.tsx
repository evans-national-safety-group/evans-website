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
  AlertTriangle,
  Scale,
  Flag,
  Menu,
  X
} from 'lucide-react'

export default function GovernmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const governmentSolutions = [
    {
      title: "Federal Compliance Program",
      subtitle: "National Standards Assessment",
      description: "Comprehensive ECPORA assessments designed for federal agencies and departments requiring national-level child protection compliance.",
      features: [
        "Federal regulation compliance analysis",
        "Multi-jurisdiction assessment protocols",
        "Inter-agency coordination frameworks",
        "Congressional reporting compatibility",
        "Federal audit preparation support"
      ],
      cta: "Request Federal Proposal",
      highlight: false
    },
    {
      title: "State & Regional Program", 
      subtitle: "Multi-Jurisdictional Coordination",
      description: "Specialized assessments for state governments managing complex child protection requirements across multiple counties and regions.",
      features: [
        "State-wide assessment coordination",
        "County-level implementation guidance",
        "Regional compliance standardization",
        "State legislature reporting formats",
        "Cross-jurisdictional best practices"
      ],
      cta: "Schedule State Consultation",
      highlight: true
    },
    {
      title: "Local Government Program",
      subtitle: "Community-Level Implementation", 
      description: "Municipal and local government ECPORA assessments focused on community-specific child protection challenges and solutions.",
      features: [
        "Municipal compliance assessment",
        "Community-specific risk analysis",
        "Local resource optimization",
        "City council presentation materials",
        "Community stakeholder engagement"
      ],
      cta: "Begin Local Partnership",
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

      {/* Hero Section with Blue Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-evans-gradient-blue"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Flag className="w-4 h-4 mr-2" />
              Government ECPORA Assessment Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Government
              <span className="block text-evans-orange">
                Child Protection
              </span>
              <span className="block text-evans-green">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Specialized ECPORA organizational assessments designed for federal, state, and local government agencies 
              requiring comprehensive child protection compliance and regulatory excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Request Government Proposal
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Government Programs
              </a>
            </div>
            
            {/* Government Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">150+</h3>
                <p className="text-white/80 text-sm">Government Agencies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">50</h3>
                <p className="text-white/80 text-sm">States Served</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-white/80 text-sm">Compliance Rate</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">15+</h3>
                <p className="text-white/80 text-sm">Years Gov Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Challenges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Government-Specific Assessment Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the unique compliance requirements and operational complexities facing government agencies at all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-600 text-sm">
                Multi-layered federal, state, and local regulatory requirements requiring 
                precise documentation and adherence to complex compliance frameworks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Inter-Agency Coordination</h3>
              <p className="text-slate-600 text-sm">
                Coordination across multiple departments, jurisdictions, and agencies 
                requiring standardized protocols and communication frameworks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Public Accountability</h3>
              <p className="text-slate-600 text-sm">
                Transparent reporting requirements for legislative bodies, oversight committees, 
                and public disclosure mandates requiring comprehensive documentation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Resource Constraints</h3>
              <p className="text-slate-600 text-sm">
                Budget limitations and resource allocation challenges requiring 
                cost-effective solutions and maximized efficiency in assessment processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Government Assessment Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored ECPORA assessment solutions for federal, state, and local government agencies. 
              Investment details provided through customized government proposals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {governmentSolutions.map((program, index) => (
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
                      Most Requested
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
                    <div className="text-lg font-semibold text-slate-800 mb-1">Contact for Government Pricing</div>
                    <p className="text-sm text-slate-600">Customized proposals based on agency scope and requirements</p>
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

      {/* Government Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Government Partnership Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized advantages designed for government agencies committed to child protection excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Regulatory Confidence</h3>
              <p className="text-slate-600">
                Comprehensive compliance frameworks ensure government agencies meet all federal, 
                state, and local regulatory requirements with complete documentation and audit readiness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Public Trust</h3>
              <p className="text-slate-600">
                Demonstrated commitment to child protection excellence builds community confidence 
                and strengthens government credibility through transparent, evidence-based practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Operational Excellence</h3>
              <p className="text-slate-600">
                Streamlined processes and standardized protocols improve government efficiency 
                while maintaining the highest standards of child protection and safety.
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
              Request Government Assessment Proposal
            </h2>
            <p className="text-xl text-slate-600">
              Ready to enhance your agency's child protection capabilities? 
              Contact our government assessment specialists to discuss your compliance needs and receive a customized proposal.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Agency/Department Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Department/Agency Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Person
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Director/Administrator Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Official Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                    placeholder="contact@agency.gov"
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
                  Government Level
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Government Level</option>
                  <option>Federal Agency</option>
                  <option>State Government</option>
                  <option>County Government</option>
                  <option>Municipal/City Government</option>
                  <option>Regional Authority</option>
                  <option>Special District</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Assessment Requirements
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-blue focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your agency's child protection assessment needs, compliance requirements, timeline, jurisdictional scope, and any specific regulatory frameworks you must meet..."
                ></textarea>
              </div>

              <div className="bg-evans-blue/5 border border-evans-blue/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-blue mb-2">Government Proposal Process</h4>
                <p className="text-sm text-slate-700">
                  We provide customized government proposals including detailed scope, compliance frameworks, 
                  timeline, and investment structure tailored to your agency's budget and procurement requirements.
                </p>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Request Government Assessment Proposal
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
