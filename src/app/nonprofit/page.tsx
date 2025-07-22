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
  Compass,
  Target,
  Menu,
  X
} from 'lucide-react'

export default function NonProfitPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nonprofitSolutions = [
    {
      title: "National Non-Profit Program",
      subtitle: "Mission-Driven Protection Excellence",
      description: "Comprehensive ECPORA assessments designed for large national non-profits with multi-state operations and complex service delivery.",
      features: [
        "Multi-location coordination frameworks",
        "Donor and board reporting systems",
        "Grant compliance documentation",
        "Volunteer protection protocols",
        "Mission-aligned implementation strategies"
      ],
      cta: "Discuss Community Partnership",
      highlight: false
    },
    {
      title: "Regional Community Program", 
      subtitle: "Community-Centered Safety",
      description: "Specialized ECPORA assessments for regional non-profits serving diverse communities with focused child protection needs.",
      features: [
        "Community-specific risk assessment",
        "Cultural competency integration",
        "Local partnership development",
        "Resource optimization strategies",
        "Impact measurement frameworks"
      ],
      cta: "Schedule Regional Consultation",
      highlight: true
    },
    {
      title: "Faith-Based Organization Program",
      subtitle: "Values-Aligned Protection", 
      description: "Customized assessments for religious organizations and faith-based non-profits with unique community and spiritual considerations.",
      features: [
        "Faith-integrated protection protocols",
        "Congregation engagement strategies",
        "Religious leader training frameworks",
        "Spiritual care considerations",
        "Community trust building"
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

      {/* Hero Section with Slate Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-evans-gradient-slate"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Non-Profit ECPORA Assessment Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Non-Profit
              <span className="block text-evans-orange">
                Child Protection
              </span>
              <span className="block text-evans-green">
                Mission
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Mission-aligned ECPORA organizational assessments designed for non-profit organizations, faith-based groups, 
              and community organizations dedicated to protecting children while advancing their vital community missions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Request Non-Profit Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Community Programs
              </a>
            </div>
            
            {/* Non-Profit Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">400+</h3>
                <p className="text-white/80 text-sm">Non-Profit Partners</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">1M+</h3>
                <p className="text-white/80 text-sm">Children Served</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">45</h3>
                <p className="text-white/80 text-sm">States Reached</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">18+</h3>
                <p className="text-white/80 text-sm">Years Non-Profit Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Profit Challenges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Non-Profit Assessment Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the unique mission-driven requirements and resource considerations facing non-profit organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Mission Alignment</h3>
              <p className="text-slate-600 text-sm">
                Balancing comprehensive child protection requirements with organizational mission, 
                values, and community service objectives without compromising effectiveness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Resource Constraints</h3>
              <p className="text-slate-600 text-sm">
                Limited budgets and staffing requiring cost-effective assessment solutions 
                that maximize impact while maintaining high-quality protection standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Volunteer Management</h3>
              <p className="text-slate-600 text-sm">
                Managing child protection protocols across diverse volunteer populations 
                with varying levels of training and organizational commitment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Grant Compliance</h3>
              <p className="text-slate-600 text-sm">
                Meeting diverse funder requirements and grant compliance standards while 
                maintaining consistent child protection excellence across all programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Profit Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Non-Profit Assessment Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mission-aligned ECPORA assessment solutions for non-profit organizations at all scales. 
              Investment details provided through customized community partnership proposals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {nonprofitSolutions.map((program, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  program.highlight 
                    ? 'border-evans-slate bg-gradient-to-br from-evans-slate/5 to-white' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-8">
                  {program.highlight && (
                    <div className="bg-evans-slate text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Community-Focused
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{program.title}</h3>
                  <p className="text-lg text-evans-slate font-semibold mb-4">{program.subtitle}</p>
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
                    <div className="text-lg font-semibold text-slate-800 mb-1">Contact for Community Pricing</div>
                    <p className="text-sm text-slate-600">Mission-aligned proposals with flexible funding strategies</p>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    program.highlight
                      ? 'bg-evans-slate text-white hover:bg-evans-slate/90'
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

      {/* Non-Profit Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Community Partnership Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mission-driven advantages designed for non-profit organizations committed to child protection excellence and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Mission Advancement</h3>
              <p className="text-slate-600">
                Comprehensive child protection frameworks strengthen organizational mission delivery 
                while building community trust and enhancing the impact of vital social services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Funding Confidence</h3>
              <p className="text-slate-600">
                Demonstrated commitment to child protection excellence strengthens grant applications, 
                donor confidence, and funding sustainability for long-term organizational growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Leadership</h3>
              <p className="text-slate-600">
                Industry-leading child protection practices position non-profits as community leaders, 
                enhancing collaboration opportunities and expanding service impact across populations.
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
              Request Community Partnership Proposal
            </h2>
            <p className="text-xl text-slate-600">
              Ready to strengthen your organization's child protection mission? 
              Contact our non-profit assessment specialists to discuss your community needs and receive a mission-aligned proposal.
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-slate focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Non-Profit Organization Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Executive Director/Leader
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-slate focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Director/President Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organization Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-slate focus:border-transparent outline-none transition-all duration-300"
                    placeholder="info@nonprofit.org"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Direct Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-slate focus:border-transparent outline-none transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Organization Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-slate focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Organization Type</option>
                  <option>National Non-Profit</option>
                  <option>Regional Community Organization</option>
                  <option>Local Non-Profit</option>
                  <option>Faith-Based Organization</option>
                  <option>Religious Institution</option>
                  <option>Community Foundation</option>
                  <option>Social Service Agency</option>
                  <option>Youth-Serving Organization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Assessment Requirements & Mission Focus
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-slate focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your organization's mission, child protection assessment needs, communities served, volunteer considerations, funding requirements, timeline, and any specific grant or donor compliance needs..."
                ></textarea>
              </div>

              <div className="bg-evans-slate/5 border border-evans-slate/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-slate mb-2">Community Partnership Process</h4>
                <p className="text-sm text-slate-700">
                  We provide mission-aligned partnership proposals including detailed assessment scope, community-focused implementation, 
                  flexible timeline, and investment structure designed for non-profit budgets and funding strategies.
                </p>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-slate hover:bg-evans-slate/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Request Community Partnership Proposal
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
