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
  Brain,
  Heart,
  Compass,
  TrendingUp,
  AlertTriangle,
  Menu,
  X
} from 'lucide-react'

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ecporaDomains = [
    {
      id: 1,
      title: "Leadership & Governance",
      percentage: "20%",
      icon: Crown,
      description: "The foundation of effective child protection begins with committed, accountable leadership.",
      impact: "73% fewer serious incidents, 85% better staff retention",
      color: "evans-blue"
    },
    {
      id: 2,
      title: "Human Capital Management",
      percentage: "15%",
      icon: Users,
      description: "People are the first and most important line of defense in child protection.",
      impact: "90% fewer personnel-related incidents",
      color: "evans-green"
    },
    {
      id: 3,
      title: "Operational Systems & Processes",
      percentage: "15%",
      icon: BarChart3,
      description: "Day-to-day systems that govern how organizations operate and respond to concerns.",
      impact: "60% faster incident response times",
      color: "evans-orange"
    },
    {
      id: 4,
      title: "Risk Management & Assessment",
      percentage: "12%",
      icon: AlertTriangle,
      description: "Proactive identification and mitigation of risks before they result in harm.",
      impact: "65% fewer insurance claims, 50% lower liability costs",
      color: "evans-slate"
    },
    {
      id: 5,
      title: "Trauma-Informed Culture",
      percentage: "13%",
      icon: Heart,
      description: "Understanding trauma's impact and integrating trauma-informed principles.",
      impact: "80% improvement in participant outcomes",
      color: "evans-blue"
    },
    {
      id: 6,
      title: "Community Integration & Partnerships",
      percentage: "10%",
      icon: Globe,
      description: "Relationships and collaborations with external partners and community.",
      impact: "3x more crisis resources, 60% better community trust",
      color: "evans-green"
    },
    {
      id: 7,
      title: "Compliance & Legal Framework",
      percentage: "10%",
      icon: FileText,
      description: "Understanding and adherence to all applicable laws and regulations.",
      impact: "90% fewer regulatory actions, $150K annual savings",
      color: "evans-orange"
    },
    {
      id: 8,
      title: "Continuous Improvement & Innovation",
      percentage: "5%",
      icon: TrendingUp,
      description: "Ongoing learning and adaptation based on data and emerging best practices.",
      impact: "25% year-over-year safety improvements",
      color: "evans-slate"
    }
  ]

  const readinessLevels = [
    { level: "Exemplary", range: "90-100", color: "bg-green-500", description: "Industry Leadership - Models for their industry" },
    { level: "Proficient", range: "75-89", color: "bg-blue-500", description: "Strong Foundation - Solid systems with targeted improvements" },
    { level: "Developing", range: "60-74", color: "bg-yellow-500", description: "Building Capacity - Basic systems requiring improvement" },
    { level: "Inadequate", range: "45-59", color: "bg-orange-500", description: "Significant Gaps - Major deficiencies requiring intervention" },
    { level: "Critical", range: "0-44", color: "bg-red-500", description: "Emergency Response - Fundamental failures requiring immediate action" }
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
              <a href="/about" className={`${scrolled ? 'text-evans-blue font-semibold' : 'text-white font-semibold'} transition-colors`}>About</a>
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
                <a href="/about" className="block px-3 py-2 text-evans-blue font-semibold">About</a>
                <a href="/#contact" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Contact</a>
                <a href="/executive-guidance" className="block px-3 py-2 bg-evans-orange text-white rounded-lg">Executive Guidance</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Primary Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-evans-gradient-primary"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              About ECPORA & Evans National Safety Group
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming
              <span className="block text-evans-orange">
                Child Protection
              </span>
              <span className="block text-evans-green">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              ECPORA (Evans Child Protection Organizational Readiness Assessment) is a comprehensive, evidence-based methodology 
              that transforms how organizations protect children - going beyond compliance to create cultures of protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#methodology" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Explore ECPORA Methodology
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#cheryl" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Meet Cheryl Evans
              </a>
            </div>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">27+</h3>
                <p className="text-white/80 text-sm">Years Expertise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">8</h3>
                <p className="text-white/80 text-sm">Assessment Domains</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">80%</h3>
                <p className="text-white/80 text-sm">Risk Reduction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">1000+</h3>
                <p className="text-white/80 text-sm">Organizations Assessed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              The Problem ECPORA Solves
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              "Organizations don't fail children suddenly - they fail them systematically over time through gaps in culture, processes, and accountability."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Reactive vs. Proactive</h3>
              <p className="text-slate-600">
                Most organizations wait for incidents to occur before addressing safety gaps. 
                ECPORA identifies vulnerabilities before harm happens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Compliance vs. Excellence</h3>
              <p className="text-slate-600">
                Traditional assessments focus on minimum compliance requirements. 
                ECPORA focuses on optimal performance and protection effectiveness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Fragmented vs. Integrated</h3>
              <p className="text-slate-600">
                Most assessments examine policies in isolation. 
                ECPORA evaluates how all organizational systems work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cheryl Evans Section */}
      <section id="cheryl" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Meet Cheryl Evans
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                ECPORA Developer & Child Protection Expert
              </p>
              <div className="space-y-4 text-slate-700">
                <p>
                  Cheryl Evans brings an unparalleled combination of frontline experience and policy development expertise 
                  to child protection. With 27+ years of direct experience protecting children and vulnerable populations, 
                  she has worked at every level from individual cases to national policy development.
                </p>
                <p>
                  Her unique background includes direct experience with the U.S. Center for SafeSport, where she contributed 
                  to developing national standards for protecting athletes from abuse. This experience, combined with decades 
                  of frontline work, gives her insights unavailable to theoretical consultants.
                </p>
                <p>
                  ECPORA represents the culmination of her life's work - a methodology that doesn't just identify what's wrong, 
                  but provides a scientifically-based pathway to what's right.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-evans-blue">27+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-evans-green">1000+</div>
                  <div className="text-sm text-slate-600">Organizations Helped</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Credentials & Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                  <span className="text-slate-700">U.S. Center for SafeSport Policy Development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                  <span className="text-slate-700">27+ Years Frontline Child Protection Work</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                  <span className="text-slate-700">National Child Protection Policy Expert</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                  <span className="text-slate-700">Organizational Safety Transformation Specialist</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                  <span className="text-slate-700">Evidence-Based Methodology Developer</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                  <span className="text-slate-700">Multi-Sector Assessment Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECPORA Methodology */}
      <section id="methodology" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              The ECPORA Methodology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Eight research-based domains that create comprehensive organizational protection systems.
            </p>
          </div>

          {/* Methodology Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'overview'
                  ? 'text-evans-blue border-b-2 border-evans-blue'
                  : 'text-slate-600 hover:text-evans-blue'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('domains')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'domains'
                  ? 'text-evans-blue border-b-2 border-evans-blue'
                  : 'text-slate-600 hover:text-evans-blue'
              }`}
            >
              8 Domains
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'process'
                  ? 'text-evans-blue border-b-2 border-evans-blue'
                  : 'text-slate-600 hover:text-evans-blue'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => setActiveTab('scoring')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'scoring'
                  ? 'text-evans-blue border-b-2 border-evans-blue'
                  : 'text-slate-600 hover:text-evans-blue'
              }`}
            >
              Scoring
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">What Makes ECPORA Different</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-evans-blue mr-3 mt-1" />
                    <span className="text-slate-700">Proactive prevention rather than reactive response</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-evans-blue mr-3 mt-1" />
                    <span className="text-slate-700">Cultural transformation not just policy compliance</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-evans-blue mr-3 mt-1" />
                    <span className="text-slate-700">Systematic integration across all organizational functions</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-evans-blue mr-3 mt-1" />
                    <span className="text-slate-700">Continuous improvement based on data and evidence</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Key Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                    <span className="text-slate-700">Beyond compliance to excellence</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                    <span className="text-slate-700">Holistic integration vs. fragmented checklists</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                    <span className="text-slate-700">Predictive vs. reactive analysis</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-evans-green mr-3 mt-1" />
                    <span className="text-slate-700">Ongoing partnership vs. one-time consultation</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'domains' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ecporaDomains.map((domain) => (
                <div key={domain.id} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${domain.color}/10 rounded-xl flex items-center justify-center mr-4`}>
                      <domain.icon className={`w-6 h-6 text-${domain.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{domain.title}</h3>
                      <span className={`text-sm font-semibold text-${domain.color}`}>{domain.percentage} of Total Score</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{domain.description}</p>
                  <div className="text-sm text-slate-500">
                    <strong>Impact:</strong> {domain.impact}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-evans-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Phase 1</h3>
                  <p className="text-sm text-slate-600 mb-2">Preparation & Planning</p>
                  <p className="text-xs text-slate-500">1-2 Weeks</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-evans-green" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Phase 2</h3>
                  <p className="text-sm text-slate-600 mb-2">On-Site Assessment</p>
                  <p className="text-xs text-slate-500">3 Days</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-evans-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Phase 3</h3>
                  <p className="text-sm text-slate-600 mb-2">Analysis & Scoring</p>
                  <p className="text-xs text-slate-500">1 Week</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-evans-slate" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Phase 4</h3>
                  <p className="text-sm text-slate-600 mb-2">Reporting & Presentation</p>
                  <p className="text-xs text-slate-500">1 Week</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scoring' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">ECPORA Readiness Levels</h3>
                <div className="space-y-4">
                  {readinessLevels.map((level, index) => (
                    <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                      <div className={`w-4 h-4 ${level.color} rounded-full mr-4`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">{level.level}</span>
                          <span className="text-sm text-slate-600">{level.range} points</span>
                        </div>
                        <p className="text-sm text-slate-600">{level.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ROI & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Proven Return on Investment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Organizations implementing ECPORA recommendations see measurable improvements in safety, efficiency, and reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-evans-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-evans-blue" />
              </div>
              <h3 className="text-3xl font-bold text-evans-blue mb-2">60-80%</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">Risk Reduction</p>
              <p className="text-slate-600">Reduction in safety incidents within 18 months of implementation</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-evans-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-evans-green" />
              </div>
              <h3 className="text-3xl font-bold text-evans-green mb-2">100%+</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">ROI in Year 1</p>
              <p className="text-slate-600">Cost savings exceed assessment investment through reduced incidents and premiums</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-evans-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-evans-orange" />
              </div>
              <h3 className="text-3xl font-bold text-evans-orange mb-2">25%</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">Revenue Growth</p>
              <p className="text-slate-600">Premium funding and partnership opportunities from ECPORA certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact Evans National Safety Group to learn how ECPORA can help your organization 
            achieve child protection excellence and create lasting cultures of safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="bg-evans-blue hover:bg-evans-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
            >
              Schedule ECPORA Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/executive-guidance" 
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Executive Guidance Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
