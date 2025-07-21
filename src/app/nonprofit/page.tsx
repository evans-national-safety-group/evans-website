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
  Heart,
  Target,
  TrendingUp,
  Eye,
  DollarSign,
  UserCheck,
  Lightbulb,
  Menu,
  X
} from 'lucide-react'

export default function NonProfitPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('community')

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

  const nonProfitServices = [
    {
      name: "Community Organizations",
      description: "Comprehensive child protection assessments for local non-profits serving children and families",
      features: [
        "Mission-aligned assessment approach",
        "Community stakeholder engagement",
        "Volunteer management protocols",
        "Board education and training",
        "Grant application support",
        "Capacity building focus"
      ],
      highlighted: false,
      cta: "Discuss Community Partnership"
    },
    {
      name: "Regional Non-Profits",
      description: "Multi-site assessments and standardized protocols for regional child-serving organizations",
      features: [
        "All Community Organization benefits",
        "Multi-location coordination",
        "Standardized protocol development",
        "Regional compliance frameworks",
        "Board-level strategic planning",
        "Sustainability planning support",
        "Impact measurement tools",
        "Network collaboration facilitation"
      ],
      highlighted: true,
      cta: "Schedule Regional Consultation"
    },
    {
      name: "National Networks",
      description: "Enterprise-level assessments and strategic guidance for national non-profit organizations",
      features: [
        "All Regional Non-Profit benefits",
        "National policy development",
        "Federal compliance coordination",
        "Executive leadership coaching",
        "Crisis response protocols",
        "Industry leadership positioning",
        "Research and advocacy support",
        "Strategic partnership development",
        "National media and communications",
        "Legislative advocacy guidance"
      ],
      highlighted: false,
      cta: "Begin Strategic Discussion"
    }
  ]

  const fundingOpportunities = [
    {
      type: "Foundation Grants",
      sources: "Private foundations, community foundations, corporate foundations",
      typical: "Contact for funding strategies",
      focus: "Child protection excellence, organizational capacity building"
    },
    {
      type: "Federal Funding",
      sources: "SAMHSA, CDC, Department of Justice, Department of Health and Human Services",
      typical: "Contact for federal opportunities",
      focus: "Evidence-based practices, trauma-informed care, prevention programs"
    },
    {
      type: "Corporate Partnerships",
      sources: "Corporate social responsibility programs, employee giving campaigns",
      typical: "Contact for partnership options",
      focus: "Community impact, employee engagement, brand alignment"
    },
    {
      type: "United Way",
      sources: "Local United Way chapters, national United Way initiatives",
      typical: "Contact for United Way strategies",
      focus: "Community collaboration, measurable outcomes, collective impact"
    }
  ]

  const missionOutcomes = [
    {
      metric: "Enhanced Protection",
      description: "Strengthened child protection policies and practices throughout your organization",
      icon: Shield
    },
    {
      metric: "Community Trust", 
      description: "Increased stakeholder confidence through transparent, evidence-based practices",
      icon: Heart
    },
    {
      metric: "Organizational Growth",
      description: "Expanded capacity and sustainability through enhanced operational excellence",
      icon: TrendingUp
    },
    {
      metric: "Mission Impact",
      description: "Greater child protection outcomes aligned with your organization's mission",
      icon: Target
    }
  ]

  const successStories = [
    {
      organization: "Regional Youth Development Network",
      challenge: "Needed standardized child protection protocols across 15 affiliated organizations",
      solution: "Comprehensive ECPORA assessment with multi-site implementation plan",
      outcome: "100% compliance across all sites, enhanced community trust, successful $2.3M grant award"
    },
    {
      organization: "Community Family Services Alliance",
      challenge: "Board concerns about child protection policies during organizational growth",
      solution: "Mission-aligned assessment with board education and policy development",
      outcome: "Enhanced board confidence, streamlined policies, 40% increase in community partnerships"
    },
    {
      organization: "National Children's Advocacy Organization",
      challenge: "Federal funding requirements for evidence-based child protection practices",
      solution: "Strategic assessment with federal compliance framework and grant support",
      outcome: "Secured $1.8M federal grant, established as industry leader, 50% program expansion"
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
                <p className="text-sm text-slate-600">Non-Profit Solutions</p>
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-evans-green via-slate-700 to-evans-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-evans-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-evans-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange/10 backdrop-blur-sm rounded-full text-evans-orange text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Mission-Aligned Child Protection Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Protecting Children,
              <span className="block bg-gradient-to-r from-evans-orange to-evans-green bg-clip-text text-transparent">
                Strengthening Mission
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              ECPORA assessments designed for non-profit organizations serving children and families. 
              Mission-aligned approach with flexible investment options and comprehensive grant funding support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#assessment" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Schedule Mission-Aligned Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#funding" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20"
              >
                Grant Funding Resources
              </a>
            </div>

            {/* Mission Impact Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {missionOutcomes.map((outcome, index) => {
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

      {/* Mission-Aligned Services */}
      <section id="assessment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Mission-Aligned Child Protection 
              <span className="text-evans-green block">Assessment Options</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ECPORA assessments tailored for non-profit organizations of all sizes. Investment varies based on organizational scope, mission alignment, and capacity building needs. Contact us to discuss customized solutions and funding strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nonProfitServices.map((service, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  service.highlighted 
                    ? 'bg-gradient-to-br from-evans-green to-slate-700 text-white shadow-2xl border-2 border-evans-green' 
                    : 'bg-white border-2 border-slate-200 hover:border-evans-green shadow-lg hover:shadow-xl'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-evans-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
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
                        : 'bg-evans-green/10 text-evans-green'
                    }`}>
                      Investment Varies by Scope
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
                        service.highlighted ? 'text-evans-orange' : 'text-evans-green'
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
                      ? 'bg-white text-evans-green hover:bg-slate-100'
                      : 'bg-evans-green text-white hover:bg-evans-green/90'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Funding Resources */}
      <section id="funding" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Comprehensive Grant Funding 
              <span className="text-evans-green block">Support & Resources</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ECPORA assessments are eligible for various funding sources. We provide comprehensive grant application support, funding strategy development, and partnership facilitation to make child protection excellence accessible for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingOpportunities.map((funding, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-evans-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{funding.type}</h3>
                    <p className="text-slate-600 mb-3">{funding.sources}</p>
                    <div className="bg-evans-green/5 border-l-4 border-evans-green rounded-r-lg p-4 mb-3">
                      <p className="text-sm text-slate-700"><strong>Typical Range:</strong> {funding.typical}</p>
                    </div>
                    <p className="text-sm text-slate-600"><strong>Focus Areas:</strong> {funding.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-evans-green/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Grant Application Support</h3>
              <p className="text-slate-600 mb-6">
                Our team provides comprehensive grant application assistance, including needs assessment documentation, budget development, outcome measurement planning, and proposal writing support to maximize your funding success.
              </p>
              <a 
                href="#contact" 
                className="btn-evans inline-flex items-center"
              >
                Request Funding Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Mission Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Non-profit organizations across the country have strengthened their child protection practices and achieved their mission goals through ECPORA assessments and strategic partnerships.
            </p>
          </div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-evans-green mb-2">Organization</h3>
                    <p className="text-slate-700">{story.organization}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-evans-blue mb-2">Challenge</h3>
                    <p className="text-slate-700">{story.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-evans-orange mb-2">Solution</h3>
                    <p className="text-slate-700">{story.solution}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-300">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Outcome</h3>
                  <p className="text-slate-700 font-medium">{story.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-evans-green to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Mission-Aligned Partnership Value
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
              ECPORA assessments that strengthen child protection while advancing your organization's mission through enhanced capacity, community trust, and sustainable growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-evans-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mission Integration</h3>
                <p className="text-slate-200">
                  Child protection excellence seamlessly integrated with your organization's mission and values for authentic alignment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-evans-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Trust</h3>
                <p className="text-slate-200">
                  Enhanced stakeholder confidence through transparent, evidence-based child protection practices and accountability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-evans-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
                <p className="text-slate-200">
                  Organizational capacity building that creates lasting impact and positions your organization for continued growth and success.
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
              Begin Your Mission-Aligned Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to strengthen your child protection practices while advancing your mission? Let's discuss how ECPORA assessments can support your organization's goals and explore funding opportunities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Mission-Aligned Assessment Request</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Organization Name
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Your non-profit organization"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Contact
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Executive Director / Program Director"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Contact Email
                    </label>
                    <input 
                      type="email" 
                      className="input w-full"
                      placeholder="director@nonprofit.org"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Organization Type
                    </label>
                    <select className="input w-full">
                      <option>Community Organizations</option>
                      <option>Regional Non-Profits</option>
                      <option>National Networks</option>
                      <option>Other (specify in message)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Mission & Assessment Needs
                    </label>
                    <textarea 
                      className="input w-full h-32"
                      placeholder="Describe your organization's mission, child protection assessment needs, and any funding considerations..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn-evans text-center py-4"
                  >
                    Request Mission-Aligned Assessment
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Non-Profit Partnership Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Mission-aligned assessment approach</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Flexible investment options</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Grant funding support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Capacity building focus</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Non-Profit Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Non-Profit Line: (505) 555-0189</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">nonprofit@evansnationalsafety.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-evans-green/5 border border-evans-green/20 rounded-xl p-6">
                  <h4 className="font-bold text-evans-green mb-2">Funding Strategy Support</h4>
                  <p className="text-sm text-slate-700">
                    Investment options and funding strategies will be discussed during your consultation. We provide comprehensive grant application support and flexible payment terms aligned with non-profit budget cycles.
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
                  <p className="text-slate-400">Non-Profit Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Mission-aligned ECPORA assessments for non-profit organizations serving children and families. Strengthening child protection while advancing your mission through evidence-based practices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Non-Profit Services</h4>
              <ul className="space-y-3">
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Community Organizations</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Regional Non-Profits</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">National Networks</a></li>
                <li><a href="#funding" className="text-slate-400 hover:text-white transition-colors">Grant Funding Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Mission Resources</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors">ECPORA Assessments</a></li>
                <li><a href="/education" className="text-slate-400 hover:text-white transition-colors">Education Solutions</a></li>
                <li><a href="/government" className="text-slate-400 hover:text-white transition-colors">Government Partnerships</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Mission Consultation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Evans National Safety Group LLC. All rights reserved. | Mission-Aligned Child Protection Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
