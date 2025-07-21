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
  Target,
  TrendingUp,
  Eye,
  UserCheck,
  GraduationCap,
  Menu,
  X
} from 'lucide-react'

export default function EducationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('k12')

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

  const educationServices = [
    {
      name: "K-12 School Districts",
      description: "Comprehensive campus-wide assessments for elementary, middle, and high school environments",
      features: [
        "Multi-school district coordination",
        "Age-appropriate protocol development",
        "Parent and community engagement",
        "Educational staff training integration",
        "Academic calendar alignment",
        "Title IX compliance support"
      ],
      highlighted: false,
      cta: "Request K-12 Assessment"
    },
    {
      name: "Higher Education Institutions",
      description: "University and college assessments with student life and academic program integration",
      features: [
        "All K-12 District benefits",
        "Residence hall safety protocols",
        "Campus-wide policy development",
        "Student organization guidelines",
        "Faculty and staff training",
        "Research program compliance",
        "Athletics department integration",
        "Board of trustees reporting"
      ],
      highlighted: true,
      cta: "Schedule Campus Consultation"
    },
    {
      name: "Early Childhood Centers",
      description: "Specialized assessments for preschools, daycare centers, and early learning programs",
      features: [
        "All Higher Education benefits",
        "Developmental-appropriate protocols",
        "Family engagement strategies",
        "State licensing compliance",
        "Caregiver training programs",
        "Environmental safety assessments",
        "Transition planning support",
        "Quality rating improvements",
        "Community partnership development",
        "Professional development credits"
      ],
      highlighted: false,
      cta: "Begin Early Childhood Partnership"
    }
  ]

  const educationCompliance = [
    {
      standard: "FERPA Compliance",
      requirements: "Family Educational Rights and Privacy Act, student record protection, privacy protocols",
      scope: "Contact for educational compliance",
      timeline: "Academic year integration planning"
    },
    {
      standard: "Title IX Alignment",
      requirements: "Gender equity, harassment prevention, campus safety, reporting protocols",
      scope: "Contact for Title IX framework",
      timeline: "Semester-based implementation"
    },
    {
      standard: "Mandatory Reporting",
      requirements: "State-specific reporting requirements, staff training, documentation protocols",
      scope: "Contact for reporting compliance",
      timeline: "Immediate staff training integration"
    },
    {
      standard: "Background Checks",
      requirements: "Employee screening, volunteer management, contractor oversight, ongoing monitoring",
      scope: "Contact for screening programs",
      timeline: "Continuous monitoring systems"
    }
  ]

  const educationOutcomes = [
    {
      metric: "Student Safety",
      description: "Enhanced protection protocols ensuring safe learning environments for all students",
      icon: Shield
    },
    {
      metric: "Educational Excellence", 
      description: "Integration with academic mission promoting both safety and learning outcomes",
      icon: GraduationCap
    },
    {
      metric: "Community Trust",
      description: "Strengthened parent and community confidence through transparent practices",
      icon: Users
    },
    {
      metric: "Regulatory Compliance",
      description: "Full adherence to educational regulations and accreditation standards",
      icon: CheckCircle
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
                <p className="text-sm text-slate-600">Education Solutions</p>
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
            <div className="inline-flex items-center px-4 py-2 bg-evans-green/10 rounded-full text-evans-green text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education-Focused Child Protection
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Safe Learning
              <span className="block text-evans-green">
                Environments
              </span>
              <span className="block text-slate-600">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              ECPORA assessments designed for educational institutions at all levels. 
              Academic mission integration with FERPA compliance and education-friendly implementation aligned with your learning community's needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#assessment" 
                className="bg-evans-green hover:bg-evans-green/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Schedule Campus Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#compliance" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Educational Compliance Guide
              </a>
            </div>

            {/* Educational Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {educationOutcomes.map((outcome, index) => {
                const Icon = outcome.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-evans-green" />
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

      {/* Educational Services */}
      <section id="assessment" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Educational Child Protection 
              <span className="text-evans-green block">Assessment Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive ECPORA assessments tailored for educational institutions. Investment varies based on institution size, student population, and academic integration requirements. Contact us to discuss educational pricing and academic calendar alignment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {educationServices.map((service, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  service.highlighted 
                    ? 'bg-evans-green text-white shadow-2xl border-2 border-evans-green' 
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
                      Contact for Educational Pricing
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

      {/* Educational Compliance */}
      <section id="compliance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Educational Compliance 
              <span className="text-evans-green block">Standards & Integration</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ECPORA assessments ensure full compliance with educational regulations while seamlessly integrating with your institution's academic mission and learning objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationCompliance.map((compliance, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-evans-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-evans-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{compliance.standard}</h3>
                    <p className="text-slate-600 mb-3">{compliance.requirements}</p>
                    <div className="bg-evans-green/5 border-l-4 border-evans-green rounded-r-lg p-4 mb-3">
                      <p className="text-sm text-slate-700"><strong>Scope:</strong> {compliance.scope}</p>
                    </div>
                    <p className="text-sm text-slate-600"><strong>Timeline:</strong> {compliance.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Value Proposition */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-800">
            <h2 className="text-4xl font-bold mb-6">
              Educational Partnership Value
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Child protection excellence integrated with educational mission to create safe learning environments that promote both student safety and academic achievement.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-evans-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Student Safety</h3>
                <p className="text-slate-600">
                  Comprehensive protection protocols ensuring safe learning environments for students of all ages and backgrounds.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-evans-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Trust</h3>
                <p className="text-slate-600">
                  Enhanced parent and community confidence through transparent practices and evidence-based safety protocols.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-evans-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-evans-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Academic Integration</h3>
                <p className="text-slate-600">
                  Seamless integration with educational mission promoting both safety excellence and learning outcomes.
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
              Establish Educational Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to enhance your institution's child protection practices while supporting your educational mission? Let's discuss how ECPORA assessments can serve your learning community.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Campus Assessment Request</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Institution Name
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="School District / University / Learning Center"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Contact
                    </label>
                    <input 
                      type="text" 
                      className="input w-full"
                      placeholder="Superintendent / President / Director"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Contact Email
                    </label>
                    <input 
                      type="email" 
                      className="input w-full"
                      placeholder="superintendent@district.edu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Institution Type
                    </label>
                    <select className="input w-full">
                      <option>K-12 School Districts</option>
                      <option>Higher Education Institutions</option>
                      <option>Early Childhood Centers</option>
                      <option>Private/Independent Schools</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Educational Assessment Needs
                    </label>
                    <textarea 
                      className="input w-full h-32"
                      placeholder="Describe your institution's child protection assessment needs, student population, academic calendar considerations, and educational integration requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn-evans text-center py-4"
                  >
                    Request Educational Assessment
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Educational Partnership Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Academic mission integration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">FERPA compliance assurance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Education-friendly implementation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-evans-green" />
                      <span className="text-slate-700">Professional development credits</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Education Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Education Line: (505) 555-0169</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">education@evansnationalsafety.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-evans-blue" />
                      <span className="text-slate-700">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-evans-green/5 border border-evans-green/20 rounded-xl p-6">
                  <h4 className="font-bold text-evans-green mb-2">Educational Partnership Investment</h4>
                  <p className="text-sm text-slate-700">
                    Investment varies based on institution size, student population, and academic integration needs. Education-friendly pricing and flexible payment terms aligned with academic budgets will be discussed during consultation.
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
                  <p className="text-slate-400">Education Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Comprehensive ECPORA assessments for educational institutions. Academic mission integration with FERPA compliance and education-friendly implementation for safe learning environments.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Education Services</h4>
              <ul className="space-y-3">
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">K-12 School Districts</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Higher Education</a></li>
                <li><a href="#assessment" className="text-slate-400 hover:text-white transition-colors">Early Childhood Centers</a></li>
                <li><a href="#compliance" className="text-slate-400 hover:text-white transition-colors">Educational Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Educational Resources</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors">ECPORA Assessments</a></li>
                <li><a href="/government" className="text-slate-400 hover:text-white transition-colors">Government Solutions</a></li>
                <li><a href="/nonprofit" className="text-slate-400 hover:text-white transition-colors">Non-Profit Partnerships</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Campus Consultation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Evans National Safety Group LLC. All rights reserved. | Educational Child Protection Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
