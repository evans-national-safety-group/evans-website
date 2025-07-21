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
  Target,
  TrendingUp,
  Eye,
  UserCheck,
  Menu,
  X
} from 'lucide-react'

export default function GovernmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('federal')

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-slate-200')
          header.classList.remove('bg-white')
        } else {
          header.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-slate-200')
          header.classList.add('bg-white')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const governmentServices = [
    {
      name: "Federal Agencies",
      description: "Comprehensive ECPORA assessments for federal departments and multi-agency initiatives",
      features: [
        "Federal contracting capabilities",
        "Multi-agency coordination protocols",
        "Congressional reporting standards",
        "Federal compliance frameworks",
        "Interagency collaboration tools",
        "National policy alignment"
      ],
      highlighted: false,
      cta: "Request Federal Proposal"
    },
    {
      name: "State & Regional Agencies",
      description: "Coordinated assessments for state departments and regional government partnerships",
      features: [
        "All Federal Agency benefits",
        "Multi-state coordination",
        "Regional policy development",
        "State-specific compliance",
        "Legislative alignment support",
        "Cross-jurisdiction protocols",
        "Governor office briefings",
        "State budget integration"
      ],
      highlighted: true,
      cta: "Schedule State Consultation"
    },
    {
      name: "Local Government",
      description: "Tailored assessments for municipalities, counties, and local government entities",
      features: [
        "All State & Regional benefits",
        "Community stakeholder engagement",
        "Local policy development",
        "Municipal compliance support",
        "Council presentation materials",
        "Public transparency protocols",
        "Media communication support",
        "Community partnership facilitation",
        "Local budget considerations",
        "Citizen engagement strategies"
      ],
      highlighted: false,
      cta: "Begin Local Partnership"
    }
  ]

  const complianceStandards = [
    {
      standard: "Federal Regulations",
      requirements: "Federal Information Security Management Act (FISMA), Federal Risk Authorization and Management Program (FedRAMP)",
      scope: "Contact for compliance details",
      timeline: "3-12 months based on agency requirements"
    },
    {
      standard: "State Compliance",
      requirements: "State-specific child protection regulations, mandatory reporting protocols, legislative requirements",
      scope: "Contact for state-specific frameworks",
      timeline: "2-8 months based on state complexity"
    },
    {
      standard: "Data Security",
      requirements: "NIST Cybersecurity Framework, SOC 2 Type II, encryption standards, audit trails",
      scope: "Contact for security assessment",
      timeline: "Ongoing monitoring and reporting"
    },
    {
      standard: "Audit Readiness",
      requirements: "Government Accountability Office (GAO) standards, Inspector General requirements, transparency protocols",
      scope: "Contact for audit preparation",
      timeline: "Continuous compliance maintenance"
    }
  ]

  const governmentOutcomes = [
    {
      metric: "Regulatory Compliance",
      description: "Full adherence to federal, state, and local child protection regulations",
      icon: Shield
    },
    {
      metric: "Public Accountability", 
      description: "Transparent, evidence-based practices that maintain public trust and confidence",
      icon: Eye
    },
    {
      metric: "Operational Efficiency",
      description: "Streamlined processes that maximize taxpayer value and program effectiveness",
      icon: TrendingUp
    },
    {
      metric: "Multi-Agency Coordination",
      description: "Enhanced collaboration across government departments and jurisdictions",
      icon: Building2
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="header fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 bg-slate-50 rounded-lg flex items-center justify-center px-2">
                <img 
                  src="/images/evans-logo.png" 
                  alt="Evans National Safety Group" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-800">Evans National Safety Group</h1>
                <p className="text-sm text-slate-600">Government Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-700 hover:text-evans-blue transition-colors">Home</a>
              <a href="/#services" className="text-slate-700 hover:text-evans-blue transition-colors">Services</a>
              <a href="/#about" className="text-slate-700 hover:text-evans-blue transition-colors">About</a>
              <a href="/#contact" className="text-slate-700 hover:text-evans-blue transition-colors">Contact</a>
              <a 
                href="#assessment" 
                className="btn-evans"
              >
                Request Assessment
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
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">Home</a>
              <a href="/#services" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">Services</a>
              <a href="/#about" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">About</a>
              <a href="/#contact" className="block px-3 py-2 rounded-md text-slate-700 hover:text-evans-blue hover:bg-slate-50">Contact</a>
              <a href="#assessment" className="block px-3 py-2 rounded-md btn-evans">Request Assessment</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue/10 rounded-full text-evans-blue text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Government Partner
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Government-Grade
              <span className="block text-evans-blue">
                Child Protection
              </span>
              <span className="block text-slate-600">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              ECPORA assessments designed for federal, state, and local government agencies. 
              Evidence-based methodology with full regulatory compliance and transparent public accountability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#assessment" 
                className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Request Government Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#compliance" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Compliance Framework
              </a>
            </div>

            {/* Government Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {governmentOutcomes.map((outcome, index) => {
                const Icon = outcome.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-evans-blue" />
                    </div>
                    <h3 className="text-slate-800 font-semibold mb-1">{outcome.metric}</h3>
                    <p className="text-slate-600 text-sm">{outcome.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Government Services */}
      <section id="assessment" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Government Child Protection 
              <span className="text-evans-blue block">Assessment Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive ECPORA assessments tailored for government agencies at all levels. Investment varies based on agency scope, multi-jurisdiction requirements, and compliance complexity. Contact us to discuss government contracting and proposal development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {governmentServices.map((service, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  service.highlighted 
                    ? 'bg-evans-blue text-white shadow-2xl border-2 border-evans-blue' 
                    : 'bg-white border-2 border-slate-200 hover:border-evans-blue shadow-lg hover:shadow-xl'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-evans-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Requested
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-3 ${service.highlighted ? 'text-white' : 'text-slate-800'}`}>
                    {service.name}
                  </h3>
                  <div className="mb-4">
                    <div className={`text-lg font-semibold px-4 py-2 rounded-lg inline-block ${
                      service.highlighted 
                        ? 'bg-white/10 text-white' 
                        : 'bg-evans-blue/10 text-evans-blue'
                    }`}>
                      Contact for Proposal
                    </div>
                  </div>
                  <p className={`${service.highlighted ? 'text-slate-200' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        service.highlighted ? 'text-evans-green' : 'text-evans-green'
                      }`} />
                      <span className={`${service.highlighted ? 'text-white' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                    service.highlighted
                      ? 'bg-white text-evans-blue hover:bg-slate-100'
                      : 'bg-evans-blue text-white hover:bg-evans-blue/90'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section id="compliance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Government Compliance 
              <span className="text-evans-blue block">Framework & Standards</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ECPORA assessments meet all federal, state, and local regulatory requirements. Our comprehensive compliance framework ensures full adherence to government standards and audit requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceStandards.map((compliance, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-evans-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{compliance.standard}</h3>
                    <p className="text-slate-600 mb-3">{compliance.requirements}</p>
                    <div className="bg-evans-blue/5 border-l-4 border-evans-blue rounded-r-lg p-4 mb-3">
                      <p className="text-sm text-slate-700"><strong>Scope:</strong> {compliance.scope}</p>
                    </div>
                    <p className="text-sm text-slate-600"><strong>Timeline:</strong> {compliance.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Value Proposition */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-800">
            <h2 className="text-4xl font-bold mb-6">
              Government Partnership Value
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Comprehensive child protection assessments that enhance public accountability, ensure regulatory compliance, and demonstrate responsible stewardship of taxpayer resources.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-evans-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Regulatory Excellence</h3>
                <p className="text-slate-600">
                  Full compliance with federal, state, and local regulations ensuring audit readiness and public accountability.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-evans-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Efficiency</h3>
                <p className="text-slate-600">
                  Streamlined processes and evidence-based practices that maximize program effectiveness and taxpayer value.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-evans-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Agency Coordination</h3>
                <p className="text-slate-600">
                  Enhanced collaboration across departments and jurisdictions for comprehensive child protection coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Establish Government Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to enhance your agency's child protection practices? Let's discuss how ECPORA assessments can meet your regulatory requirements and serve your constituents effectively.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Government Assessment Request</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Agency Name
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Department/Agency name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Contact
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Director / Administrator"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Official Email
                    </label>
                    <input 
                      type="email" 
                      className="input w-full"
                      placeholder="director@agency.gov"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Government Level
                    </label>
                    <select className="input w-full">
                      <option>Federal Agencies</option>
                      <option>State & Regional Agencies</option>
                      <option>Local Government</option>
                      <option>Multi-jurisdiction Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Assessment Requirements
                    </label>
                    <textarea 
                      className="input w-full h-32"
                      placeholder="Describe your agency's child protection assessment needs, compliance requirements, and any specific government contracting considerations..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn-evans text-center py-4"
                  >
                    Request Government Assessment Proposal
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Government Partnership Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Full regulatory compliance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Government contracting experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Public accountability standards</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Multi-agency coordination</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Government Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Government Line: (505) 555-0179</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">government@evansnationalsafety.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Priority response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-evans-blue/5 border border-evans-blue/20 rounded-xl p-6">
                  <h4 className="font-bold text-evans-blue mb-2">Government Partnership Investment</h4>
                  <p className="text-sm text-slate-700">
                    Investment varies based on agency scope, multi-jurisdiction requirements, and compliance complexity. Government contracting terms and competitive pricing will be discussed during your consultation.
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
                  <p className="text-slate-400">Government Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Comprehensive ECPORA assessments for federal, state, and local government agencies. Regulatory compliance, public accountability, and evidence-based child protection excellence.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Government Services</h4>
              <ul className="space-y-3">
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Federal Agencies</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">State & Regional</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Local Government</a></li>
                <li><a href="#compliance" className="text-slate-400 hover:text-white transition-colors">Compliance Framework</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Government Resources</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors">ECPORA Assessments</a></li>
                <li><a href="/enterprise" className="text-slate-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
                <li><a href="/education" className="text-slate-400 hover:text-white transition-colors">Education Partnerships</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Government Consultation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Evans National Safety Group LLC. All rights reserved. | Government Child Protection Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
