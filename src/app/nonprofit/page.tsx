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
  Handshake,
  Target,
  DollarSign,
  Eye,
  Database,
  CheckSquare,
  UserCheck,
  BookOpen,
  Lightbulb,
  Menu,
  X
} from 'lucide-react'

export default function NonProfitPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nonprofitFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mission-Aligned Assessment",
      description: "Child protection assessments that strengthen your mission while building organizational capacity for sustainable impact."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Budget-Conscious Approach",
      description: "Flexible pricing and payment terms designed for non-profit financial realities with maximum value delivery."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Capacity Building Focus",
      description: "Emphasis on building internal capabilities rather than creating ongoing dependency on external consultation."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Grant Application Support",
      description: "Assistance with funding proposals that include child protection improvements as part of program development."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Volunteer Integration", 
      description: "Specialized protocols for organizations that rely on volunteers while maintaining professional protection standards."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Board Reporting & Engagement",
      description: "Clear, actionable reporting designed for volunteer board members with varying levels of expertise."
    }
  ]

  const nonprofitBenefits = [
    {
      metric: "Community Impact",
      description: "Enhanced ability to serve children and families safely",
      icon: <Heart className="w-6 h-6" />
    },
    {
      metric: "Donor Confidence",
      description: "Increased trust from funders and community supporters",
      icon: <Handshake className="w-6 h-6" />
    },
    {
      metric: "Operational Sustainability", 
      description: "Improved long-term viability through risk management",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Staff & Volunteer Confidence",
      description: "Enhanced preparedness across all organizational levels",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const nonprofitSolutions = [
    {
      title: "Community Organizations",
      description: "Local organizations serving children and families",
      features: ["Community-focused assessment", "Local partnership integration", "Grassroots implementation"],
      investment: "$25,000",
      timeline: "2-4 months",
      fundingOptions: "Grant funding assistance available"
    },
    {
      title: "Regional Non-Profits", 
      description: "Multi-site non-profit organizations",
      features: ["Multi-location coordination", "Standardized protocols", "Regional compliance"],
      investment: "$35,000 - $50,000",
      timeline: "3-6 months",
      fundingOptions: "Multi-year payment plans available"
    },
    {
      title: "National Organizations",
      description: "Large-scale non-profit networks",
      features: ["National consistency standards", "Affiliate coordination", "Scalability planning"],
      investment: "$50,000 - $75,000",
      timeline: "4-8 months",
      fundingOptions: "Corporate partnership opportunities"
    }
  ]

  const nonprofitSupport = [
    { 
      title: "Grant Writing Assistance",
      description: "Letters of support, scope development, and budget planning for funding applications",
      icon: <FileText className="w-8 h-8" />
    },
    { 
      title: "Board Education",
      description: "Board member training on child protection governance and oversight responsibilities",
      icon: <BookOpen className="w-8 h-8" />
    },
    { 
      title: "Volunteer Management",
      description: "Specialized protocols for volunteer recruitment, screening, and ongoing management",
      icon: <UserCheck className="w-8 h-8" />
    },
    { 
      title: "Community Partnerships",
      description: "Guidance on building effective partnerships with schools, agencies, and other organizations",
      icon: <Handshake className="w-8 h-8" />
    }
  ]

  const fundingSupport = [
    {
      source: "Foundation Grants",
      description: "Child safety and organizational capacity building grants",
      typical: "$25K - $100K",
      timeline: "3-12 months"
    },
    {
      source: "Federal Grants",
      description: "SAMHSA, CDC, and other federal child protection funding",
      typical: "$50K - $500K",
      timeline: "6-18 months"
    },
    {
      source: "Corporate Partnerships",
      description: "Corporate social responsibility and community investment funds",
      typical: "$10K - $75K",
      timeline: "1-6 months"
    },
    {
      source: "United Way",
      description: "Community impact and capacity building initiatives",
      typical: "$15K - $50K",
      timeline: "Annual cycles"
    }
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
                <div className="text-sm text-evans-blue-500 font-medium">Non-Profit Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#funding" className="nav-link">Funding</a>
              <a href="#support" className="nav-link">Support</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Mission-Aligned Assessment
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
                <a href="#funding" className="block py-2 text-slate-600 hover:text-evans-blue-500">Funding</a>
                <a href="#support" className="block py-2 text-slate-600 hover:text-evans-blue-500">Support</a>
                <a href="#contact" className="block py-2 text-slate-600 hover:text-evans-blue-500">Contact</a>
                <button className="btn-primary w-full">
                  Mission-Aligned Assessment
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
              <Heart className="w-4 h-4 mr-2" />
              Supporting Organizations That Serve Children
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Mission-Driven{' '}
              <span className="text-gradient bg-gradient-to-r from-evans-green-400 to-evans-orange-400 bg-clip-text text-transparent">
                Child Protection
              </span>{' '}
              Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Evans National Safety Group partners with non-profit organizations to strengthen child protection 
              capabilities while building sustainable capacity. Our mission-aligned ECPORA assessments 
              are designed with non-profit realities in mind, starting at $25,000 with flexible terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
              <button className="btn-primary btn-lg group">
                Mission-Aligned Assessment
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-secondary btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Grant Funding Resources
                <FileText className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Non-Profit Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {nonprofitBenefits.map((benefit, index) => (
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

      {/* Non-Profit Solutions */}
      <section id="solutions" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue-50 text-evans-blue-600 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Non-Profit Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Mission-Driven Organizations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our ECPORA methodology is adapted for non-profit realities, focusing on sustainable 
              capacity building while respecting budget constraints and mission priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonprofitFeatures.map((feature, index) => (
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

      {/* Non-Profit Investment Tiers */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-green-50 text-evans-green-600 rounded-full text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Accessible Investment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed for Non-Profit Budgets
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our non-profit packages are designed to be accessible while delivering comprehensive 
              value, with flexible payment terms and funding support to maximize your impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nonprofitSolutions.map((solution, index) => (
              <div key={index} className={`relative ${
                index === 0 
                  ? 'card-evans p-8 ring-4 ring-evans-green-200 scale-105' 
                  : 'card-hover p-8'
              }`}>
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-evans-gradient text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Accessible
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-slate-600 mb-4">{solution.description}</p>
                  <div className="text-3xl font-bold text-evans-green-500 mb-2">
                    {solution.investment}
                  </div>
                  <div className="text-sm text-slate-500 mb-2">Timeline: {solution.timeline}</div>
                  <div className="text-xs text-evans-blue-600 font-medium">{solution.fundingOptions}</div>
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
                  Request Non-Profit Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Support */}
      <section id="funding" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange-50 text-evans-orange-600 rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Funding Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Grant & Funding Support
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We help non-profits identify and secure funding for child protection improvements 
              through grants, partnerships, and innovative funding approaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {fundingSupport.map((funding, index) => (
              <div key={index} className="card-hover p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{funding.source}</h3>
                    <p className="text-slate-600 text-sm mb-2">{funding.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-evans-green-500">{funding.typical}</div>
                    <div className="text-xs text-slate-500">{funding.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="card-evans p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Grant Application Support</h3>
              <p className="text-slate-600 mb-6">
                Our team provides comprehensive support for grant applications that include 
                child protection capacity building as a key component.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="font-bold mb-3">We Provide:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Letters of support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Scope development</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Budget planning</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Outcome measurement</span>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold mb-3">Grant Types:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Capacity building grants</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Child safety initiatives</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Organizational development</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-evans-green-500 mr-2" />
                      <span className="text-sm">Training & education</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-primary">
                Explore Funding Options
                <FileText className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Profit Support Services */}
      <section id="support" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              <Handshake className="w-4 h-4 mr-2" />
              Specialized Support
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beyond Assessment: Building Capacity
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our support extends beyond assessment to help build sustainable organizational 
              capacity that serves your mission long-term.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nonprofitSupport.map((support, index) => (
              <div key={index} className="card-hover p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-evans-gradient rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  {support.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{support.title}</h3>
                  <p className="text-slate-600">{support.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Profit Success Stories */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Non-Profit Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how organizations like yours have strengthened their child protection 
              capabilities while advancing their mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-hover p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                "Evans National Safety Group helped us secure a $75,000 foundation grant while building 
                internal capacity that serves us every day. Their mission-aligned approach made all the difference."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-evans-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Sarah Martinez</div>
                  <div className="text-sm text-slate-600">Executive Director</div>
                  <div className="text-xs text-slate-500">Regional Youth Services</div>
                </div>
              </div>
            </div>

            <div className="card-hover p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                "The flexible payment terms and grant support made this possible for our small organization. 
                The results have strengthened our entire operation and increased donor confidence."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-evans-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                  DK
                </div>
                <div>
                  <div className="font-semibold text-slate-900">David Kim</div>
                  <div className="text-sm text-slate-600">Program Director</div>
                  <div className="text-xs text-slate-500">Community Children's Center</div>
                </div>
              </div>
            </div>

            <div className="card-hover p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                "The board education component was invaluable. Our volunteers now understand their 
                governance role in child protection, and we've seen improved oversight and support."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-evans-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                  LT
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Lisa Thompson</div>
                  <div className="text-sm text-slate-600">Board Chair</div>
                  <div className="text-xs text-slate-500">Metro Family Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-evans-gradient text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Strengthen Your Organization's Child Protection Mission?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            Let's discuss how mission-aligned ECPORA assessments can help your organization 
            better serve children and families while building sustainable organizational capacity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-lg bg-white text-evans-blue-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Schedule Mission Consultation
              <Heart className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-evans-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Explore Funding Options
              <FileText className="w-5 h-5 ml-2" />
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
                  <div className="text-evans-blue-400 font-medium">Non-Profit Solutions</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Mission-aligned partner for non-profit organizations, delivering accessible ECPORA 
                assessments that strengthen child protection capabilities while building sustainable 
                organizational capacity. 27+ years of expertise adapted for mission-driven organizations.
              </p>
              <div className="text-sm text-slate-400">
                <div className="mb-2"><strong>Accessible Pricing:</strong> Starting at $25,000 with flexible terms</div>
                <div><strong>Grant Support:</strong> Funding assistance and application support available</div>
              </div>
            </div>

            {/* Non-Profit Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Non-Profit Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community Organization Assessments</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Regional Non-Profit Solutions</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">National Network Coordination</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Capacity Building Programs</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Volunteer Management Integration</a></li>
              </ul>
            </div>

            {/* Non-Profit Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Non-Profit Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Grant Application Assistance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Board Education & Training</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Flexible Payment Terms</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mission Alignment Consulting</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Sustainability Planning</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Evans National Safety Group. All rights reserved. | Mission-Driven Partnership Solutions
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Non-Profit Terms</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Grant Resources</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
