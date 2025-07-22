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

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ecosystemSectors = [
    {
      title: "Government Agencies",
      description: "Federal, state, and local government ECPORA assessments tailored for public sector compliance requirements and regulatory standards.",
      icon: Building2,
      link: "/government",
      color: "evans-blue"
    },
    {
      title: "Educational Institutions", 
      description: "K-12 schools, universities, and educational organizations requiring comprehensive child protection assessment frameworks.",
      icon: Users,
      link: "/education", 
      color: "evans-green"
    },
    {
      title: "Enterprise Organizations",
      description: "Corporate enterprises and large organizations implementing child protection protocols across operational environments.",
      icon: BarChart3,
      link: "/enterprise",
      color: "evans-orange"
    },
    {
      title: "Non-Profit Organizations",
      description: "Mission-driven organizations serving vulnerable populations requiring specialized child protection assessment approaches.",
      icon: Star,
      link: "/nonprofit",
      color: "evans-slate"
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
              <a href="#platform" className="text-slate-700 hover:text-evans-blue transition-colors">Platform</a>
              <a href="#ecosystem" className="text-slate-700 hover:text-evans-blue transition-colors">Sectors</a>
              <a href="#contact" className="text-slate-700 hover:text-evans-blue transition-colors">Contact</a>
              <a href="/executive-guidance" className="bg-evans-blue text-white px-4 py-2 rounded-lg hover:bg-evans-blue/90 transition-colors">Executive Guidance</a>
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
                <a href="#platform" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Platform</a>
                <a href="#ecosystem" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Sectors</a>
                <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Contact</a>
                <a href="/executive-guidance" className="block px-3 py-2 bg-evans-blue text-white rounded-lg">Executive Guidance</a>
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
              <Shield className="w-4 h-4 mr-2" />
              Technology-Enhanced Child Protection Excellence
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              ECPORA Child
              <span className="block text-evans-blue">
                Protection
              </span>
              <span className="block text-slate-600">
                Assessments
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Evans National Safety Group delivers comprehensive ECPORA organizational assessments 
              backed by 27+ years of child protection expertise, evidence-based methodology, and AI-enhanced analysis tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Schedule ECPORA Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#platform" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Learn About Our Approach
              </a>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-evans-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">27+</h3>
                <p className="text-slate-600 text-sm">Years Expertise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-evans-green" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">500+</h3>
                <p className="text-slate-600 text-sm">Organizations Served</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-evans-orange" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">99.5%</h3>
                <p className="text-slate-600 text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-evans-slate" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">50</h3>
                <p className="text-slate-600 text-sm">States Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              ECPORA Assessment Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive approach combines traditional evaluation methods with advanced technology 
              to provide deeper insights into organizational child protection capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">AI-Enhanced Analysis</h3>
              <p className="text-slate-600 mb-6">
                Advanced machine learning algorithms analyze organizational patterns, risk factors, 
                and compliance gaps to provide comprehensive assessment insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Pattern Recognition Analysis
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Risk Prediction Modeling
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Compliance Gap Detection
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Evidence-Based Framework</h3>
              <p className="text-slate-600 mb-6">
                Built on 27+ years of child protection research and best practices, 
                ensuring assessments meet the highest professional standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Research-Validated Methods
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Industry Best Practices
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Continuous Methodology Updates
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive Reporting</h3>
              <p className="text-slate-600 mb-6">
                Detailed assessment reports with actionable recommendations, 
                risk mitigation strategies, and improvement roadmaps.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Executive Summary Reports
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Detailed Findings Analysis
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-4 h-4 text-evans-green mr-3" />
                  Implementation Roadmaps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Multi-Sector Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized ECPORA assessments tailored for diverse organizational contexts, 
              from educational institutions to government agencies and nonprofit organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemSectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                <div className="p-8">
                  <div className={`w-12 h-12 bg-${sector.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                    <sector.icon className={`w-6 h-6 text-${sector.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{sector.title}</h3>
                  <p className="text-slate-600 mb-6">{sector.description}</p>
                  <a 
                    href={sector.link}
                    className={`inline-flex items-center text-${sector.color} font-semibold hover:text-${sector.color}/80 transition-colors group-hover:translate-x-1 transform duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Schedule Your ECPORA Assessment
            </h2>
            <p className="text-xl text-slate-600">
              Ready to enhance your organization's child protection capabilities? 
              Contact our assessment team to discuss your specific needs and schedule a comprehensive evaluation.
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
                    placeholder="Your Full Name"
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
                    placeholder="contact@organization.org"
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
                  <option>Educational Institution (K-12)</option>
                  <option>Higher Education</option>
                  <option>Government Agency</option>
                  <option>Non-Profit Organization</option>
                  <option>Healthcare System</option>
                  <option>Corporate Enterprise</option>
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
                  placeholder="Please describe your organization's assessment needs, timeline, and any specific child protection concerns or goals..."
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Schedule Assessment Consultation
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
