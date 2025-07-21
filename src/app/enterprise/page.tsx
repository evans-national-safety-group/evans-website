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
  Target,
  Briefcase,
  DollarSign,
  Eye,
  Database,
  CheckSquare,
  AlertTriangle,
  Layers,
  Menu,
  X
} from 'lucide-react'

export default function EnterprisePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const enterpriseFeatures = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Enterprise Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies integrated with your existing enterprise risk management framework."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Location Coordination",
      description: "Seamless assessment coordination across multiple facilities, divisions, and geographic locations with centralized reporting."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Executive Dashboard Analytics",
      description: "Real-time insights and metrics designed for C-suite visibility with customizable KPIs and performance indicators."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Continuity Integration",
      description: "Child protection protocols that align with business continuity planning and operational resilience strategies."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Compliance Framework", 
      description: "Multi-jurisdictional compliance management supporting international operations and diverse regulatory environments."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "ROI Optimization",
      description: "Measurable return on investment through improved efficiency, reduced liability, and enhanced brand protection."
    }
  ]

  const enterpriseMetrics = [
    {
      metric: "Risk Reduction",
      description: "Measurable decrease in organizational liability exposure",
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: "Operational Efficiency",
      description: "Streamlined processes and improved resource allocation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "Brand Protection", 
      description: "Enhanced reputation management and stakeholder confidence",
      icon: <Award className="w-6 h-6" />
    },
    {
      metric: "Compliance Automation",
      description: "Reduced manual compliance oversight and reporting burden",
      icon: <CheckSquare className="w-6 h-6" />
    }
  ]

  const enterpriseSolutions = [
    {
      title: "Fortune 1000 Corporations",
      description: "Comprehensive enterprise-wide assessments",
      features: ["Multi-division coordination", "Global compliance management", "Executive oversight integration"],
      investment: "$500,000 - $1,000,000+",
      timeline: "6-12 months"
    },
    {
      title: "Mid-Market Organizations", 
      description: "Scalable solutions for growing companies",
      features: ["Regional facility assessments", "Growth-oriented protocols", "Scalability planning"],
      investment: "$200,000 - $500,000",
      timeline: "3-6 months"
    },
    {
      title: "Industry-Specific Solutions",
      description: "Specialized assessments for high-risk sectors",
      features: ["Sector-specific protocols", "Regulatory specialization", "Industry benchmarking"],
      investment: "$300,000 - $750,000",
      timeline: "4-8 months"
    }
  ]

  const enterpriseCompliance = [
    { name: "Corporate Governance", description: "Board-level oversight and accountability frameworks" },
    { name: "Risk Management", description: "Enterprise risk assessment and mitigation protocols" },
    { name: "Regulatory Compliance", description: "Multi-jurisdictional regulatory requirement management" },
    { name: "Data Security", description: "Enterprise-grade data protection and privacy controls" },
    { name: "Audit Readiness", description: "Comprehensive documentation and audit trail systems" },
    { name: "Brand Protection", description: "Reputation management and crisis communication planning" }
  ]

  const industryFocus = [
    { sector: "Youth Sports Organizations", risk: "High", specialization: "SafeSport compliance and athlete protection" },
    { sector: "Entertainment & Media", risk: "High", specialization: "Talent protection and production safety" },
    { sector: "Healthcare Systems", risk: "Medium", specialization: "Patient safety and staff protocols" },
    { sector: "Technology Companies", risk: "Medium", specialization: "Workplace safety and online protection" },
    { sector: "Retail & Hospitality", risk: "Medium", specialization: "Customer and employee safety protocols" },
    { sector: "Financial Services", risk: "Low", specialization: "Client interaction and facility security" }
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
                <div className="text-sm text-evans-blue-500 font-medium">Enterprise Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#industries" className="nav-link">Industries</a>
              <a href="#investment" className="nav-link">Investment</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Executive Consultation Request
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
                <a href="#industries" className="block py-2 text-slate-600 hover:text-evans-blue-500">Industries</a>
                <a href="#investment" className="block py-2 text-slate-600 hover:text-evans-blue-500">Investment</a>
                <a href="#contact" className="block py-2 text-slate-600 hover:text-evans-blue-500">Contact</a>
                <button className="btn-primary w-full">
                  Executive Consultation Request
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
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise Risk Management Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Enterprise{' '}
              <span className="text-gradient bg-gradient-to-r from-evans-green-400 to-evans-orange-400 bg-clip-text text-transparent">
                Child Protection
              </span>{' '}
              Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Evans National Safety Group delivers comprehensive enterprise-grade ECPORA assessments 
              that integrate child protection excellence with business continuity, risk management, 
              and operational efficiency for Fortune 1000 and growing companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
              <button className="btn-primary btn-lg group">
                Executive Consultation Request
                <Briefcase className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-secondary btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Enterprise Capability Overview
                <TrendingUp className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Enterprise Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {enterpriseMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-lg font-bold mb-1">{metric.metric}</div>
                  <div className="text-slate-300 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section id="solutions" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue-50 text-evans-blue-600 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Enterprise Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our ECPORA methodology scales to meet the complex needs of enterprise organizations, 
              integrating seamlessly with existing risk management and operational frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
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

      {/* Industry Focus */}
      <section id="industries" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-green-50 text-evans-green-600 rounded-full text-sm font-medium mb-4">
              <Layers className="w-4 h-4 mr-2" />
              Industry Specialization
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sector-Specific Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our enterprise assessments are tailored to the unique risks, regulations, 
              and operational requirements of different industry sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {industryFocus.map((industry, index) => (
              <div key={index} className="card-hover p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{industry.sector}</h3>
                  <p className="text-slate-600 text-sm">{industry.specialization}</p>
                </div>
                <div className="ml-6 text-center">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    industry.risk === 'High' ? 'bg-red-100 text-red-700' :
                    industry.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {industry.risk} Risk
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Investment Tiers */}
      <section id="investment" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange-50 text-evans-orange-600 rounded-full text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Enterprise Investment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Scalable Enterprise Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our enterprise packages are designed to deliver measurable ROI through risk reduction, 
              operational efficiency, and brand protection across your entire organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className={`relative ${
                index === 0 
                  ? 'card-evans p-8 ring-4 ring-evans-blue-200 scale-105' 
                  : 'card-hover p-8'
              }`}>
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-evans-gradient text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Comprehensive
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-slate-600 mb-4">{solution.description}</p>
                  <div className="text-3xl font-bold text-evans-blue-500 mb-2">
                    {solution.investment}
                  </div>
                  <div className="text-sm text-slate-500">Timeline: {solution.timeline}</div>
                </div>

                <div className="space-y-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${
                  index === 0 ? 'btn-primary' : 'btn-secondary'
                }`}>
                  Request Enterprise Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Compliance */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              <Lock className="w-4 h-4 mr-2" />
              Enterprise Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Risk Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our enterprise approach integrates child protection with comprehensive risk management, 
              regulatory compliance, and corporate governance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseCompliance.map((standard, index) => (
              <div key={index} className="card-hover p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-evans-blue-500 to-evans-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{standard.name}</h3>
                <p className="text-slate-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise ROI */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Measurable Enterprise Value
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our enterprise clients typically see significant ROI through risk reduction, 
              operational efficiency, and enhanced brand protection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-evans-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Risk Mitigation Value</h3>
                  <p className="text-slate-600">Quantifiable reduction in organizational liability exposure and potential reputational damage</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-evans-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
                  <p className="text-slate-600">Streamlined processes and improved resource allocation across multiple locations and divisions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-evans-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Protection</h3>
                  <p className="text-slate-600">Enhanced reputation management and stakeholder confidence through proactive risk management</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-evans-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Advantage</h3>
                  <p className="text-slate-600">Industry-leading child protection protocols that differentiate your organization in the marketplace</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="card-evans p-8">
                <h3 className="text-2xl font-bold mb-4">Executive Partnership</h3>
                <div className="text-4xl font-bold text-evans-blue-500 mb-4">Strategic Investment</div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>C-suite strategic consultation</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Board-level reporting and oversight</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Multi-year strategic planning</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Crisis response partnership</span>
                  </div>
                </div>
                <button className="btn-primary w-full">
                  Schedule Executive Meeting
                  <Calendar className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-evans-gradient text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Enterprise Child Protection Strategy?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            Contact our executive team today to discuss how comprehensive ECPORA assessments 
            can deliver measurable value for your organization while protecting what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-lg bg-white text-evans-blue-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Schedule C-Suite Consultation
              <Briefcase className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-evans-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Request Enterprise Proposal
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
                  <div className="text-evans-blue-400 font-medium">Enterprise Solutions</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Strategic partner for enterprise organizations, delivering comprehensive ECPORA 
                assessments that integrate child protection excellence with business continuity, 
                risk management, and operational efficiency. 27+ years of expertise scaled for enterprise needs.
              </p>
              <div className="text-sm text-slate-400">
                <div className="mb-2"><strong>Enterprise Contracts:</strong> $200K - $1M+ Investment Range</div>
                <div><strong>Global Capabilities:</strong> Multi-jurisdictional assessment coordination</div>
              </div>
            </div>

            {/* Enterprise Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Enterprise Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Fortune 1000 Assessments</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Multi-Location Coordination</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Executive Dashboard Analytics</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Risk Management Integration</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Crisis Response Partnership</a></li>
              </ul>
            </div>

            {/* Enterprise Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Enterprise Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">C-Suite Strategic Consultation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Board-Level Reporting</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Multi-Year Planning</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">ROI Measurement</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Global Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Evans National Safety Group. All rights reserved. | Enterprise Partnership Solutions
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Enterprise Terms</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
