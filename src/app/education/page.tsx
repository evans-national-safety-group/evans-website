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
  BookOpen,
  GraduationCap,
  School,
  Baby,
  Menu,
  X
} from 'lucide-react'

export default function EducationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const educationSolutions = [
    {
      title: "K-12 School Assessment Program",
      subtitle: "Comprehensive School Protection",
      description: "Complete ECPORA assessments designed for elementary, middle, and high schools requiring comprehensive child protection frameworks.",
      features: [
        "Age-appropriate protection protocols",
        "Student safety assessment frameworks",
        "Staff training and certification guidance",
        "Parent and community engagement strategies",
        "School board compliance reporting"
      ],
      cta: "Request K-12 Assessment",
      highlight: false
    },
    {
      title: "Higher Education Program", 
      subtitle: "Campus-Wide Protection Excellence",
      description: "Specialized ECPORA assessments for colleges and universities managing complex campus environments and diverse student populations.",
      features: [
        "Campus-wide safety protocols",
        "Residence hall protection frameworks",
        "Student services integration",
        "Faculty and staff compliance training",
        "Accreditation support documentation"
      ],
      cta: "Schedule Campus Consultation",
      highlight: true
    },
    {
      title: "Early Childhood Program",
      subtitle: "Foundational Safety Excellence", 
      description: "Specialized assessments for preschools, daycares, and early learning centers focused on the unique needs of young children.",
      features: [
        "Developmental-appropriate safety measures",
        "Caregiver screening and training protocols",
        "Family engagement and communication",
        "Regulatory compliance for early childhood",
        "Quality improvement planning"
      ],
      cta: "Begin Early Childhood Partnership",
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
                <a href="/#contact" className="block px-3 py-2 text-slate-700 hover:text-evans-blue">Contact</a>
                <a href="/executive-guidance" className="block px-3 py-2 bg-evans-orange text-white rounded-lg">Executive Guidance</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Green Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-evans-gradient-green"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Educational Institution ECPORA Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Educational
              <span className="block text-evans-orange">
                Child Protection
              </span>
              <span className="block text-evans-blue">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive ECPORA organizational assessments designed for K-12 schools, colleges, universities, 
              and early childhood centers committed to creating safe learning environments for all students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-evans-orange hover:bg-evans-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Request Educational Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Educational Programs
              </a>
            </div>
            
            {/* Education Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <School className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">300+</h3>
                <p className="text-white/80 text-sm">Educational Institutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">500K+</h3>
                <p className="text-white/80 text-sm">Students Protected</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">98%</h3>
                <p className="text-white/80 text-sm">Safety Improvement</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">20+</h3>
                <p className="text-white/80 text-sm">Years Education Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Challenges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Educational Institution Assessment Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the unique safety requirements and operational complexities facing educational institutions at all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Diverse Student Populations</h3>
              <p className="text-slate-600 text-sm">
                Managing child protection across different age groups, developmental stages, 
                and diverse student populations with varying needs and vulnerabilities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Campus Environments</h3>
              <p className="text-slate-600 text-sm">
                Complex campus layouts, multiple buildings, residential facilities, 
                and varied activity spaces requiring comprehensive safety protocols.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-600 text-sm">
                Meeting federal education regulations, state licensing requirements, 
                and accreditation standards while maintaining educational excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-slate/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-evans-slate" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Community Integration</h3>
              <p className="text-slate-600 text-sm">
                Balancing open educational environments with security needs while 
                maintaining positive relationships with families and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Educational Assessment Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized ECPORA assessment solutions for educational institutions at all levels. 
              Investment details provided through customized educational proposals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {educationSolutions.map((program, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  program.highlight 
                    ? 'border-evans-green bg-gradient-to-br from-evans-green/5 to-white' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-8">
                  {program.highlight && (
                    <div className="bg-evans-green text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{program.title}</h3>
                  <p className="text-lg text-evans-green font-semibold mb-4">{program.subtitle}</p>
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
                    <div className="text-lg font-semibold text-slate-800 mb-1">Contact for Educational Pricing</div>
                    <p className="text-sm text-slate-600">Customized proposals based on institution size and scope</p>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    program.highlight
                      ? 'bg-evans-green text-white hover:bg-evans-green/90'
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

      {/* Educational Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Educational Partnership Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized advantages designed for educational institutions committed to student safety and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-evans-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Student Safety Excellence</h3>
              <p className="text-slate-600">
                Comprehensive protection frameworks ensure the highest levels of student safety 
                while maintaining positive learning environments that foster academic growth and development.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-blue/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-evans-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Family Confidence</h3>
              <p className="text-slate-600">
                Demonstrated commitment to child protection builds trust with families and communities, 
                enhancing institutional reputation and strengthening enrollment and support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-evans-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-evans-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Accreditation Support</h3>
              <p className="text-slate-600">
                Comprehensive documentation and evidence-based practices support accreditation processes 
                and regulatory compliance while demonstrating institutional commitment to excellence.
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
              Request Educational Assessment Proposal
            </h2>
            <p className="text-xl text-slate-600">
              Ready to enhance your institution's child protection capabilities? 
              Contact our educational assessment specialists to discuss your specific needs and receive a customized proposal.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Institution Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-green focus:border-transparent outline-none transition-all duration-300"
                    placeholder="School/University Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Administrator Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-green focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Principal/Director/Administrator"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Official Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-green focus:border-transparent outline-none transition-all duration-300"
                    placeholder="admin@school.edu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Direct Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-green focus:border-transparent outline-none transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Institution Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-green focus:border-transparent outline-none transition-all duration-300">
                  <option>Select Institution Type</option>
                  <option>Early Childhood Center</option>
                  <option>Elementary School</option>
                  <option>Middle School</option>
                  <option>High School</option>
                  <option>K-12 District</option>
                  <option>Community College</option>
                  <option>Four-Year University</option>
                  <option>Private School</option>
                  <option>Charter School</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Assessment Requirements
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-evans-green focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Please describe your institution's child protection assessment needs, student population, campus scope, timeline, specific safety concerns, and any accreditation or compliance requirements..."
                ></textarea>
              </div>

              <div className="bg-evans-green/5 border border-evans-green/20 rounded-xl p-6">
                <h4 className="font-bold text-evans-green mb-2">Educational Proposal Process</h4>
                <p className="text-sm text-slate-700">
                  We provide customized educational proposals including detailed assessment scope, safety frameworks, 
                  timeline, and investment structure designed for educational budgets and procurement processes.
                </p>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-evans-green hover:bg-evans-green/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group"
                >
                  Request Educational Assessment Proposal
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
