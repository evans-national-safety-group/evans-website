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
  Crown,
  Target,
  Briefcase,
  TrendingUp,
  Eye,
  AlertTriangle,
  CheckSquare,
  Lightbulb,
  MessageSquare,
  Video,
  Headphones,
  Menu,
  X
} from 'lucide-react'

export default function ExecutiveGuidancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const strategicAdvantages = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Decision Confidence",
      description: "Never face critical child protection decisions alone. Immediate access to 27+ years of expert guidance when stakes are highest."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Executive Peer Network",
      description: "Connect with senior-level child protection authorities who understand the complexities of organizational leadership."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Mission-Critical Response",
      description: "Immediate expert consultation for urgent situations that require immediate, informed decision-making."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitive Strategic Advantage",
      description: "Industry-leading child protection guidance that positions your organization ahead of regulatory and operational challenges."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management Partnership", 
      description: "Proactive guidance that helps prevent issues before they become organizational crises or regulatory concerns."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Best Practices",
      description: "Stay ahead of industry trends and emerging best practices through ongoing strategic expert relationship."
    }
  ]

  const executiveMetrics = [
    {
      metric: "Decision Speed",
      description: "Immediate expert guidance when time is critical",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "Risk Mitigation",
      description: "Proactive guidance prevents costly organizational issues",
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: "Strategic Positioning", 
      description: "Industry-leading expertise for competitive advantage",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Leadership Confidence",
      description: "Expert backing for complex organizational decisions",
      icon: <Crown className="w-6 h-6" />
    }
  ]

  const guidancePrograms = [
    {
      title: "Executive Guidance Access",
      investment: "$2,500",
      period: "per month",
      description: "Strategic decision support for senior leadership",
      features: [
        "Priority Expert Consultation Access",
        "Strategic Decision Support Documentation",
        "Monthly Executive Briefings",
        "Industry Trend Analysis & Alerts",
        "Best Practice Guidance Library",
        "Executive Network Connection Opportunities"
      ],
      responseTime: "Within 4 business hours",
      ideal: "Senior Directors & VPs",
      cta: "Explore Executive Access"
    },
    {
      title: "Priority Leadership Support",
      investment: "$5,000",
      period: "per month",
      description: "Comprehensive strategic partnership for C-suite executives",
      features: [
        "Direct Expert Access & Consultation",
        "Immediate Strategic Response Protocol",
        "Custom Executive Dashboard & Reporting",
        "Board-Level Strategic Documentation",
        "Crisis Prevention & Response Planning",
        "Executive Leadership Development",
        "Quarterly Strategic Planning Sessions",
        "Industry Benchmarking & Positioning"
      ],
      responseTime: "Within 2 business hours",
      ideal: "C-Suite Executives",
      cta: "Activate Priority Support",
      popular: true
    },
    {
      title: "Strategic Partnership Program",
      investment: "$10,000",
      period: "per month",
      description: "Exclusive strategic partnership with immediate expert access",
      features: [
        "24/7 Strategic Expert Accessibility",
        "Immediate Mission-Critical Response",
        "Personal Strategic Advisor Assignment",
        "Executive Strategic Planning Partnership",
        "Board Advisory & Presentation Support",
        "Industry Leadership Positioning",
        "Exclusive Executive Network Access",
        "Custom Organizational Strategy Development",
        "Regulatory & Compliance Strategic Guidance",
        "Crisis Leadership & Communication Support"
      ],
      responseTime: "Immediate - 24/7 availability",
      ideal: "CEOs & Organization Presidents",
      cta: "Request Partnership Discussion"
    }
  ]

  const strategicScenarios = [
    {
      scenario: "Regulatory Challenge",
      description: "New compliance requirements threaten operational continuity",
      solution: "Immediate expert guidance on strategic compliance approach and implementation timeline",
      urgency: "Mission-Critical"
    },
    {
      scenario: "Media Inquiry Response",
      description: "Sensitive media attention requires immediate strategic communication",
      solution: "Real-time strategic communication guidance and message development support",
      urgency: "Time-Sensitive"
    },
    {
      scenario: "Board Strategic Decision",
      description: "Complex organizational decision requires expert child protection insight",
      solution: "Strategic analysis and recommendation development for board presentation",
      urgency: "Strategic Priority"
    },
    {
      scenario: "Organizational Risk Assessment",
      description: "Emerging risks require immediate strategic evaluation and response planning",
      solution: "Expert risk analysis and strategic mitigation planning with implementation guidance",
      urgency: "Risk Management"
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
                <div className="text-sm text-evans-blue-500 font-medium">Executive Strategic Guidance</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="#programs" className="nav-link">Programs</a>
              <a href="#scenarios" className="nav-link">Strategic Scenarios</a>
              <a href="#partnership" className="nav-link">Partnership</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Request Executive Consultation
                <Crown className="w-4 h-4 ml-2" />
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
                <a href="#programs" className="block py-2 text-slate-600 hover:text-evans-blue-500">Programs</a>
                <a href="#scenarios" className="block py-2 text-slate-600 hover:text-evans-blue-500">Strategic Scenarios</a>
                <a href="#partnership" className="block py-2 text-slate-600 hover:text-evans-blue-500">Partnership</a>
                <a href="#contact" className="block py-2 text-slate-600 hover:text-evans-blue-500">Contact</a>
                <button className="btn-primary w-full">
                  Request Executive Consultation
                  <Crown className="w-4 h-4 ml-2" />
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
              <Crown className="w-4 h-4 mr-2" />
              Executive Strategic Partnership • 27+ Years Expert Guidance
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Strategic{' '}
              <span className="text-gradient bg-gradient-to-r from-evans-green-400 to-evans-orange-400 bg-clip-text text-transparent">
                Decision
              </span>{' '}
              Confidence
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              When critical child protection decisions demand immediate expert guidance, Evans National Safety Group's 
              Executive Strategic Guidance Programs provide C-suite leaders with instant access to 27+ years of 
              specialized expertise and strategic counsel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
              <button className="btn-primary btn-lg group">
                Request Strategic Partnership Discussion
                <Crown className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-secondary btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Executive Program Overview
                <Briefcase className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Executive Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {executiveMetrics.map((metric, index) => (
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

      {/* Strategic Advantages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue-50 text-evans-blue-600 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Strategic Advantages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Decision Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform critical decision-making through immediate access to senior-level child protection expertise 
              that understands the complexities of organizational leadership and strategic challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAdvantages.map((advantage, index) => (
              <div key={index} className="card-hover p-8 group">
                <div className="flex items-center justify-center w-16 h-16 bg-evans-gradient rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{advantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Guidance Programs */}
      <section id="programs" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-green-50 text-evans-green-600 rounded-full text-sm font-medium mb-4">
              <Crown className="w-4 h-4 mr-2" />
              Executive Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Partnership Levels
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the strategic guidance level that matches your organization's leadership needs and 
              decision-making requirements for optimal child protection excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {guidancePrograms.map((program, index) => (
              <div key={index} className={`relative ${
                program.popular 
                  ? 'card-evans p-8 ring-4 ring-evans-blue-200 scale-105' 
                  : 'card-hover p-8'
              }`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-evans-gradient text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="text-4xl font-bold text-evans-blue-500 mb-2">
                    {program.investment}
                    <span className="text-sm font-normal text-slate-500">/{program.period}</span>
                  </div>
                  <p className="text-slate-600 mb-4">{program.description}</p>
                  
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-evans-green-600">{program.responseTime}</div>
                      <div className="text-xs text-slate-500">Response Time</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-evans-blue-600 font-medium bg-evans-blue-50 px-3 py-1 rounded-full">
                    Ideal for {program.ideal}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${
                  program.popular ? 'btn-primary' : 'btn-secondary'
                }`}>
                  {program.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Scenarios */}
      <section id="scenarios" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange-50 text-evans-orange-600 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Strategic Scenarios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              When Expert Guidance Makes the Difference
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real scenarios where immediate access to strategic child protection expertise 
              provides critical competitive advantage and risk mitigation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {strategicScenarios.map((scenario, index) => (
              <div key={index} className="card-hover p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{scenario.scenario}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    scenario.urgency === 'Mission-Critical' ? 'bg-red-100 text-red-700' :
                    scenario.urgency === 'Time-Sensitive' ? 'bg-orange-100 text-orange-700' :
                    scenario.urgency === 'Strategic Priority' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {scenario.urgency}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-2">Challenge:</h4>
                  <p className="text-slate-600 mb-4">{scenario.description}</p>
                  
                  <h4 className="font-semibold text-slate-700 mb-2">Strategic Solution:</h4>
                  <p className="text-slate-600">{scenario.solution}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center text-evans-green-600">
                    <CheckSquare className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Expert Guidance Available</span>
                  </div>
                  <div className="flex items-center text-evans-blue-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Immediate Response</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Partnership */}
      <section id="partnership" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Partnership Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join an exclusive network of organizational leaders who have transformed their 
              decision-making capabilities through strategic child protection expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-evans-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Executive Network Access</h3>
                  <p className="text-slate-600">Connect with senior leaders who share similar challenges and strategic priorities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-evans-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategic Decision Intelligence</h3>
                  <p className="text-slate-600">Industry insights and predictive guidance that keeps you ahead of emerging challenges</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-evans-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Positioning</h3>
                  <p className="text-slate-600">Industry-leading child protection protocols that differentiate your organization</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-evans-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Risk Intelligence Partnership</h3>
                  <p className="text-slate-600">Proactive risk identification and strategic mitigation planning with expert guidance</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="card-evans p-8">
                <div className="w-20 h-20 bg-evans-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Executive Strategic Partnership</h3>
                <p className="text-slate-600 mb-6">
                  Transform your organization's child protection decision-making through immediate access 
                  to 27+ years of specialized expertise and strategic counsel.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Immediate expert accessibility</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Strategic decision confidence</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Competitive advantage positioning</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Executive network integration</span>
                  </div>
                </div>
                
                <button className="btn-primary w-full mb-4">
                  Request Partnership Discussion
                  <Crown className="w-4 h-4 ml-2" />
                </button>
                
                <div className="text-sm text-slate-500">
                  Exclusive partnership for senior executives
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
            Ready to Transform Your Strategic Decision-Making?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            Join the exclusive network of organizational leaders who never face critical 
            child protection decisions alone. Strategic expertise when stakes are highest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-lg bg-white text-evans-blue-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Request Executive Partnership Discussion
              <Crown className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-evans-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Strategic Program Overview
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
                  <div className="text-evans-blue-400 font-medium">Executive Strategic Guidance</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Exclusive strategic partnership for organizational leaders who require immediate access to 27+ years 
                of specialized child protection expertise. Transform critical decision-making through expert guidance 
                when stakes are highest.
              </p>
              <div className="text-sm text-slate-400">
                <div className="mb-2"><strong>Executive Programs:</strong> $2.5K - $10K per month</div>
                <div><strong>Response Time:</strong> Immediate to 4 hours based on partnership level</div>
              </div>
            </div>

            {/* Strategic Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Strategic Programs</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Executive Guidance Access</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Priority Leadership Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Strategic Partnership Program</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Executive Network Integration</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mission-Critical Response</a></li>
              </ul>
            </div>

            {/* Executive Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Executive Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Strategic Decision Intelligence</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Board Advisory Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Crisis Strategic Guidance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Competitive Positioning</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Risk Intelligence Partnership</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Evans National Safety Group. All rights reserved. | Executive Strategic Partnership Solutions
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Executive Terms</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Partnership Agreement</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
