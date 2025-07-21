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
  Eye,
  Database,
  CheckSquare,
  Flag,
  Scale,
  Menu,
  X
} from 'lucide-react'

export default function GovernmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const governmentFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Government-Grade Security",
      description: "Enterprise security controls meeting federal standards with comprehensive audit trails and data protection protocols."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks ensuring adherence to federal, state, and local child protection regulations."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Evidence-Based Methodology",
      description: "ECPORA framework validated through 27+ years of child protection expertise and government agency implementations."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Comprehensive Reporting",
      description: "Executive-level reporting with detailed analytics for oversight, performance measurement, and stakeholder communication."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Agency Coordination", 
      description: "Seamless collaboration tools enabling coordination across departments, jurisdictions, and partner organizations."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Risk Assessment & Mitigation",
      description: "Advanced risk identification and prioritization with actionable recommendations for immediate implementation."
    }
  ]

  const governmentBenefits = [
    {
      metric: "Regulatory Compliance",
      description: "100% compliance with applicable federal and state child protection standards",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      metric: "Implementation Speed",
      description: "30-90 day assessment and recommendation implementation",
      icon: <Clock className="w-6 h-6" />
    },
    {
      metric: "Cost Effectiveness", 
      description: "Significant ROI through improved efficiency and risk reduction",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      metric: "Stakeholder Confidence",
      description: "Enhanced public trust through transparent assessment process",
      icon: <Flag className="w-6 h-6" />
    }
  ]

  const complianceStandards = [
    { name: "Federal Standards", description: "Compliance with federal child protection regulations" },
    { name: "State Regulations", description: "Adherence to state-specific requirements and protocols" },
    { name: "Data Security", description: "Government-grade data protection and privacy controls" },
    { name: "Audit Readiness", description: "Comprehensive documentation and audit trail systems" },
    { name: "Multi-Jurisdiction", description: "Coordination across multiple governmental levels" },
    { name: "Public Accountability", description: "Transparent reporting for public oversight" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-evans-cream-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center px-2">
                <img 
                  src="/images/evans-logo.png" 
                  alt="Evans National Safety Group" 
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Evans National Safety Group</div>
                <div className="text-sm text-evans-blue-500 font-medium">Government Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#compliance" className="nav-link">Compliance</a>
              <a href="#process" className="nav-link">Process</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Request Assessment Proposal
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-slate-200">
              <div className="px-4 py-6 space-y-4">
                <a href="/" className="block py-2 text-slate-600 hover:text-evans-blue-500">Home</a>
                <a href="#solutions" className="block py-2 text-slate-600 hover:text-evans-blue-500">Solutions</a>
                <a href="#compliance" className="block py-2 text-slate-600 hover:text-evans-blue-500">Compliance</a>
                <a href="#process" className="block py-2 text-slate-600 hover:text-evans-blue-500">Process</a>
                <a href="#contact" className="block py-2 text-slate-600 hover:text-evans-blue-500">Contact</a>
                <button className="btn-primary w-full">
                  Request Assessment Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 animate-fade-in-down">
              <Flag className="w-4 h-4 mr-2" />
              Trusted by Federal and State Agencies Nationwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Government-Trusted{' '}
              <span className="text-gradient bg-gradient-to-r from-evans-green-400 to-evans-orange-400 bg-clip-text text-transparent">
                Child Protection
              </span>{' '}
              Assessments
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Evans National Safety Group delivers comprehensive ECPORA assessments designed specifically 
              for government agencies, ensuring regulatory compliance, transparency, and measurable outcomes 
              in child protection services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
              <button className="btn-primary btn-lg group">
                Request Federal Contract Proposal
                <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-secondary btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Government Capability Statement
                <Building2 className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Government Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {governmentBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-lg font-bold mb-1">{benefit.metric}</div>
                  <div className="text-slate-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Solutions */}
      <section id="solutions" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue-50 text-evans-blue-600 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Government Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Government Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our ECPORA methodology is specifically designed to meet the unique challenges, 
              regulatory requirements, and accountability standards of government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentFeatures.map((feature, index) => (
              <div key={index} className="card-hover p-8 group">
                <div className="flex items-center justify-center w-16 h-16 bg-evans-gradient rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section id="compliance" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              <Lock className="w-4 h-4 mr-2" />
              Regulatory Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meeting Government Standards
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures full compliance with federal, state, and local 
              regulations while providing the transparency and accountability government agencies require.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="card-hover p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{standard.name}</h3>
                <p className="text-slate-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Process */}
      <section id="process" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-green-50 text-evans-green-600 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Assessment Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Streamlined for Government Efficiency
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our government assessment process is designed to minimize disruption while maximizing 
              insight and value for your agency and the communities you serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Initial Consultation</h3>
              <p className="text-slate-600">Confidential assessment of current capabilities, challenges, and regulatory requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Review</h3>
              <p className="text-slate-600">Detailed ECPORA assessment across all operational domains with stakeholder interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Recommendations</h3>
              <p className="text-slate-600">Prioritized action plan with timeline, budget considerations, and compliance roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Implementation Support</h3>
              <p className="text-slate-600">Ongoing guidance and progress monitoring to ensure successful implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Pricing */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange-50 text-evans-orange-600 rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Government Investment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Government Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand government budget processes and provide transparent, competitive pricing 
              with flexible contracting options to meet your agency's procurement requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-evans p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Government Assessment Program</h3>
              <div className="text-5xl font-bold text-evans-blue-500 mb-4">
                Contact for Pricing
              </div>
              <p className="text-xl text-slate-600 mb-8">
                Custom proposals based on agency size, scope, and specific requirements
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h4 className="text-lg font-bold mb-4">Assessment Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Comprehensive ECPORA Evaluation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Regulatory Compliance Review</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Executive Presentation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Implementation Roadmap</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h4 className="text-lg font-bold mb-4">Contracting Options:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Federal Contract Vehicles</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>State Procurement Compliance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Multi-Year Service Agreements</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span>Emergency Response Provisions</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn-primary btn-lg">
                Request Government Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-evans-gradient text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Strengthen Your Agency's Child Protection Capabilities?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your agency's specific needs and learn how ECPORA assessments 
            can help you achieve your child protection goals while ensuring regulatory compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-lg bg-white text-evans-blue-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Schedule Confidential Consultation
              <Calendar className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-evans-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Request Capability Statement
              <Phone className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-2">
                  <img 
                    src="/images/evans-logo.png" 
                    alt="Evans National Safety Group" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold">Evans National Safety Group</div>
                  <div className="text-evans-blue-400 font-medium">Government Solutions</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Trusted partner for government agencies nationwide, delivering comprehensive ECPORA 
                assessments with 27+ years of child protection expertise, ensuring regulatory compliance, 
                transparency, and measurable outcomes.
              </p>
              <div className="text-sm text-slate-400">
                <div className="mb-2"><strong>Federal Contracting:</strong> GSA Schedule Available</div>
                <div><strong>Security Clearance:</strong> Available for Sensitive Assessments</div>
              </div>
            </div>

            {/* Government Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Government Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Federal Agency Assessments</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">State Government Solutions</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Multi-Jurisdiction Coordination</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Compliance Consulting</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Emergency Response Planning</a></li>
              </ul>
            </div>

            {/* Government Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Government Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Federal Capability Statement</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contract Vehicles</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Procurement Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Compliance Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security Protocols</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Evans National Safety Group. All rights reserved. | Government Contracting Available
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
