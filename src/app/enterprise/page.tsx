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
  Eye,
  UserCheck,
  Crown,
  Briefcase,
  Menu,
  X
} from 'lucide-react'

export default function EnterprisePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('assessment')

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

  const enterpriseServices = [
    {
      name: "Corporate Assessment",
      description: "Comprehensive enterprise-wide child protection assessment and risk management framework",
      features: [
        "Enterprise risk assessment protocols",
        "Multi-location coordination",
        "Corporate governance integration",
        "Executive dashboard analytics",
        "Regulatory compliance framework",
        "Brand protection strategies"
      ],
      highlighted: false,
      cta: "Request Corporate Assessment"
    },
    {
      name: "Enterprise Partnership",
      description: "Ongoing strategic partnership with dedicated account management and priority support",
      features: [
        "All Corporate Assessment benefits",
        "Dedicated account management",
        "Quarterly strategic reviews",
        "Priority expert consultation",
        "Board-level reporting",
        "Multi-year planning support",
        "Crisis response protocols",
        "Industry best practices integration"
      ],
      highlighted: true,
      cta: "Schedule Executive Consultation"
    },
    {
      name: "Global Enterprise Solution",
      description: "Comprehensive multinational assessment and coordination for global corporate operations",
      features: [
        "All Enterprise Partnership benefits",
        "Global multi-location coordination",
        "International compliance frameworks",
        "Cross-cultural assessment protocols",
        "Global executive support",
        "Multinational policy development",
        "International crisis response",
        "Global brand risk management",
        "Regional expertise coordination",
        "International regulatory guidance"
      ],
      highlighted: false,
      cta: "Begin Global Partnership"
    }
  ]

  const industrySpecializations = [
    {
      industry: "Youth Sports Organizations",
      challenges: "Athlete safety, coaching protocols, competitive environments, SafeSport compliance",
      solutions: "Contact for sports-specific frameworks",
      expertise: "27+ years SafeSport and athletic program experience"
    },
    {
      industry: "Entertainment & Media",
      challenges: "Child performer protection, on-set safety, industry-specific regulations, talent management",
      solutions: "Contact for entertainment industry solutions",
      expertise: "Specialized entertainment industry protocols"
    },
    {
      industry: "Healthcare Systems",
      challenges: "Pediatric care protocols, family engagement, medical professional training, HIPAA compliance",
      solutions: "Contact for healthcare assessment",
      expertise: "Healthcare-specific child protection integration"
    },
    {
      industry: "Technology Companies",
      challenges: "Online safety, digital platform protection, content moderation, global compliance",
      solutions: "Contact for technology sector solutions",
      expertise: "Digital safety and technology platform expertise"
    }
  ]

  const enterpriseOutcomes = [
    {
      metric: "Risk Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies protecting enterprise reputation",
      icon: Shield
    },
    {
      metric: "Operational Excellence", 
      description: "Streamlined processes and protocols enhancing overall organizational efficiency",
      icon: TrendingUp
    },
    {
      metric: "Competitive Advantage",
      description: "Industry-leading child protection practices creating market differentiation",
      icon: Crown
    },
    {
      metric: "Stakeholder Confidence",
      description: "Enhanced investor, customer, and employee confidence through transparent practices",
      icon: Users
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
                <p className="text-sm text-slate-600">Enterprise Solutions</p>
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
              <Briefcase className="w-4 h-4 mr-2" />
              Enterprise Child Protection Excellence
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Enterprise-Grade
              <span className="block text-evans-blue">
                Risk Management
              </span>
              <span className="block text-slate-600">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              ECPORA assessments designed for Fortune 1000 corporations and mid-market enterprises. 
              Comprehensive risk management with industry-specific expertise and C-suite strategic partnership for competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#assessment" 
                className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Request Enterprise Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#industries" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Industry Specializations
              </a>
            </div>

            {/* Enterprise Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {enterpriseOutcomes.map((outcome, index) => {
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

      {/* Enterprise Services */}
      <section id="assessment" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Enterprise Child Protection 
              <span className="text-evans-blue block">Assessment Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive ECPORA assessments for enterprise organizations. Investment varies based on corporate scope, multi-location requirements, and industry-specific needs. Contact us to discuss enterprise partnerships and executive consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
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
                      Contact for Enterprise Investment
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

      {/* Industry Specializations */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Industry-Specific 
              <span className="text-evans-blue block">Expertise & Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized ECPORA assessments tailored for high-risk industries requiring comprehensive child protection protocols and industry-specific compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industrySpecializations.map((industry, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-evans-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{industry.industry}</h3>
                    <p className="text-slate-600 mb-3"><strong>Key Challenges:</strong> {industry.challenges}</p>
                    <div className="bg-evans-blue/5 border-l-4 border-evans-blue rounded-r-lg p-4 mb-3">
                      <p className="text-sm text-slate-700"><strong>Solutions:</strong> {industry.solutions}</p>
                    </div>
                    <p className="text-sm text-slate-600"><strong>Our Expertise:</strong> {industry.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Value Proposition */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-800">
            <h2 className="text-4xl font-bold mb-6">
              Enterprise Partnership Value
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Comprehensive child protection excellence that mitigates enterprise risk, enhances operational efficiency, and creates competitive advantage through industry-leading practices.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-evans-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
                <p className="text-slate-600">
                  Comprehensive risk assessment and mitigation strategies protecting enterprise reputation and reducing liability exposure.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-evans-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Excellence</h3>
                <p className="text-slate-600">
                  Streamlined processes and evidence-based protocols enhancing overall organizational efficiency and performance.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-evans-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
                <p className="text-slate-600">
                  Industry-leading child protection practices creating market differentiation and stakeholder confidence.
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
              Establish Enterprise Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to enhance your enterprise's child protection practices and mitigate organizational risk? Let's discuss how ECPORA assessments can create competitive advantage for your organization.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Enterprise Assessment Request</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Enterprise corporation name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Executive Contact
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="CEO / President / Chief Risk Officer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Executive Email
                    </label>
                    <input 
                      type="email" 
                      className="input w-full"
                      placeholder="executive@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Enterprise Type
                    </label>
                    <select className="input w-full">
                      <option>Corporate Assessment</option>
                      <option>Enterprise Partnership</option>
                      <option>Global Enterprise Solution</option>
                      <option>Industry-Specific Assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Enterprise Assessment Requirements
                    </label>
                    <textarea 
                      className="input w-full h-32"
                      placeholder="Describe your enterprise's child protection assessment needs, risk management requirements, industry specialization, and executive partnership interests..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn-evans text-center py-4"
                  >
                    Request Enterprise Assessment
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Enterprise Partnership Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Enterprise risk mitigation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">C-suite strategic partnership</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Industry-specific expertise</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Competitive advantage creation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Enterprise Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Enterprise Line: (505) 555-0159</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">enterprise@evansnationalsafety.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Priority response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-evans-blue/5 border border-evans-blue/20 rounded-xl p-6">
                  <h4 className="font-bold text-evans-blue mb-2">Enterprise Partnership Investment</h4>
                  <p className="text-sm text-slate-700">
                    Investment varies based on enterprise scope, industry requirements, and partnership level. Competitive enterprise pricing and flexible contract terms will be discussed during your executive consultation.
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
                  <p className="text-slate-400">Enterprise Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Comprehensive ECPORA assessments for Fortune 1000 corporations and mid-market enterprises. Enterprise risk management with industry-specific expertise and C-suite strategic partnership.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enterprise Services</h4>
              <ul className="space-y-3">
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Corporate Assessment</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Enterprise Partnership</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Global Solutions</a></li>
                <li><a href="#industries" className="text-slate-400 hover:text-white transition-colors">Industry Specializations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enterprise Resources</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors">ECPORA Assessments</a></li>
                <li><a href="/government" className="text-slate-400 hover:text-white transition-colors">Government Solutions</a></li>
                <li><a href="/education" className="text-slate-400 hover:text-white transition-colors">Education Partnerships</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Executive Consultation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Evans National Safety Group LLC. All rights reserved. | Enterprise Child Protection Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
