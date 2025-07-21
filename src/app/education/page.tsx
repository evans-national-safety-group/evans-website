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
  UserCheck,
  Eye,
  Database,
  CheckSquare,
  Heart,
  AlertTriangle,
  Menu,
  X
} from 'lucide-react'

export default function EducationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const educationFeatures = [
    {
      icon: <School className="w-8 h-8" />,
      title: "Campus-Wide Safety Assessment",
      description: "Comprehensive evaluation of child protection protocols across all educational environments and programs."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "FERPA-Compliant Processes",
      description: "All assessments conducted with full adherence to student privacy laws and educational data protection requirements."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Mission Integration",
      description: "Recommendations that strengthen child protection while supporting your institution's educational goals and values."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Stakeholder Engagement",
      description: "Coordinated approach involving faculty, staff, students, parents, and community partners in the assessment process."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Academic Calendar Alignment", 
      description: "Flexible scheduling that minimizes disruption to educational activities and aligns with institutional priorities."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Professional Development Integration",
      description: "Assessment findings integrated with existing staff development programs and continuing education requirements."
    }
  ]

  const educationBenefits = [
    {
      metric: "Student Safety",
      description: "Enhanced protection protocols for all educational environments",
      icon: <Heart className="w-6 h-6" />
    },
    {
      metric: "Staff Confidence",
      description: "Increased educator preparedness for child protection scenarios",
      icon: <Users className="w-6 h-6" />
    },
    {
      metric: "Compliance Assurance", 
      description: "Full adherence to educational regulations and privacy requirements",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      metric: "Community Trust",
      description: "Strengthened relationships with families and community partners",
      icon: <School className="w-6 h-6" />
    }
  ]

  const educationCompliance = [
    { name: "FERPA Compliance", description: "Student privacy and educational record protection" },
    { name: "Title IX Requirements", description: "Gender equity and harassment prevention protocols" },
    { name: "Mandatory Reporting", description: "Clear procedures for suspected abuse reporting" },
    { name: "Background Checks", description: "Comprehensive staff and volunteer screening processes" },
    { name: "Campus Security", description: "Physical safety and emergency response protocols" },
    { name: "Digital Safety", description: "Online learning environment protection measures" }
  ]

  const educationSegments = [
    {
      title: "K-12 School Districts",
      description: "Comprehensive district-wide assessments",
      features: ["Multi-school coordination", "Age-appropriate protocols", "Parent engagement strategies"],
      pricing: "Starting at $35,000"
    },
    {
      title: "Higher Education Institutions", 
      description: "University and college campus assessments",
      features: ["Residential life protocols", "Student organization oversight", "Campus-wide training"],
      pricing: "Starting at $50,000"
    },
    {
      title: "Early Childhood Centers",
      description: "Specialized assessments for young learners",
      features: ["Developmental considerations", "Family partnership focus", "Staff specialization"],
      pricing: "Starting at $25,000"
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
                <div className="text-sm text-evans-blue-500 font-medium">Education Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#segments" className="nav-link">Segments</a>
              <a href="#process" className="nav-link">Process</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Schedule Campus Assessment
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
                <a href="#segments" className="block py-2 text-slate-600 hover:text-evans-blue-500">Segments</a>
                <a href="#process" className="block py-2 text-slate-600 hover:text-evans-blue-500">Process</a>
                <a href="#contact" className="block py-2 text-slate-600 hover:text-evans-blue-500">Contact</a>
                <button className="btn-primary w-full">
                  Schedule Campus Assessment
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
              <School className="w-4 h-4 mr-2" />
              Protecting Students Across Educational Systems
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Educational{' '}
              <span className="text-gradient bg-gradient-to-r from-evans-green-400 to-evans-orange-400 bg-clip-text text-transparent">
                Child Protection
              </span>{' '}
              Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Evans National Safety Group delivers comprehensive ECPORA assessments specifically designed 
              for educational institutions, ensuring student safety while supporting your educational mission 
              with FERPA-compliant processes and flexible implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
              <button className="btn-primary btn-lg group">
                Schedule Campus Assessment
                <School className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-secondary btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Education Capability Overview
                <BookOpen className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Education Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {educationBenefits.map((benefit, index) => (
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

      {/* Education Solutions */}
      <section id="solutions" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue-50 text-evans-blue-600 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Educational Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed for Educational Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our ECPORA methodology is specially adapted for educational environments, balancing 
              comprehensive child protection with the unique needs of learning communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationFeatures.map((feature, index) => (
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

      {/* Education Segments */}
      <section id="segments" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-green-50 text-evans-green-600 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Education Segments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tailored for Every Educational Level
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From early childhood centers to major universities, our assessment approach adapts 
              to the unique challenges and opportunities of each educational environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {educationSegments.map((segment, index) => (
              <div key={index} className="card-evans p-8">
                <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                <p className="text-slate-600 mb-6">{segment.description}</p>
                
                <div className="space-y-3 mb-8">
                  {segment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-evans-blue-500 mb-2">{segment.pricing}</div>
                  <div className="text-sm text-slate-600">Contact for detailed proposal</div>
                </div>

                <button className="btn-primary w-full">
                  Request Assessment Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Compliance */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              <Lock className="w-4 h-4 mr-2" />
              Educational Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meeting Educational Standards
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures full compliance with educational regulations 
              while respecting student privacy and supporting your institution's mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationCompliance.map((standard, index) => (
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

      {/* Education Process */}
      <section id="process" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange-50 text-evans-orange-600 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Assessment Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Aligned with Academic Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our educational assessment process is designed to work within academic calendars 
              and educational priorities while delivering comprehensive insights and recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Educational Planning</h3>
              <p className="text-slate-600">Coordination with academic calendar and institutional priorities for minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Campus Assessment</h3>
              <p className="text-slate-600">Comprehensive ECPORA evaluation with stakeholder engagement and FERPA compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Educational Recommendations</h3>
              <p className="text-slate-600">Mission-aligned action plan integrating with existing educational programs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-evans-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Development</h3>
              <p className="text-slate-600">Training integration with continuing education and staff development requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features for Education */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Specialized Educational Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our educational assessments include specialized considerations unique 
              to learning environments and academic communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-evans-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Academic Calendar Integration</h3>
                  <p className="text-slate-600">Assessment schedules coordinated with breaks, professional development days, and academic priorities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-evans-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Stakeholder Approach</h3>
                  <p className="text-slate-600">Engagement with students, parents, faculty, staff, and community partners in age-appropriate ways</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-evans-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Development Credits</h3>
                  <p className="text-slate-600">Training components designed to qualify for continuing education requirements where applicable</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-evans-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-evans-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Student-Centered Focus</h3>
                  <p className="text-slate-600">All recommendations prioritize student well-being while supporting educational mission and goals</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="card-evans p-8">
                <h3 className="text-2xl font-bold mb-4">Education-Friendly Terms</h3>
                <div className="text-4xl font-bold text-evans-blue-500 mb-4">Flexible Payment Options</div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Align with academic fiscal years</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Grant funding coordination</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Multi-year planning support</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3" />
                    <span>Board presentation materials</span>
                  </div>
                </div>
                <button className="btn-primary w-full">
                  Discuss Educational Needs
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            Ready to Strengthen Child Protection in Your Educational Community?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss how ECPORA assessments can help your institution 
            create safer environments for students while supporting your educational mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-lg bg-white text-evans-blue-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Schedule Campus Consultation
              <School className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-evans-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Request Educational Proposal
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
                  <div className="text-evans-blue-400 font-medium">Education Solutions</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Supporting educational institutions nationwide with comprehensive ECPORA assessments 
                that protect students while enhancing educational mission effectiveness. 27+ years of 
                child protection expertise adapted for learning communities.
              </p>
              <div className="text-sm text-slate-400">
                <div className="mb-2"><strong>FERPA Compliance:</strong> Full student privacy protection</div>
                <div><strong>Professional Development:</strong> Continuing education integration available</div>
              </div>
            </div>

            {/* Education Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Education Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">K-12 District Assessments</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Higher Education Solutions</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Early Childhood Programs</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Campus Safety Integration</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Staff Training & Development</a></li>
              </ul>
            </div>

            {/* Education Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Education Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Academic Calendar Planning</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Grant Application Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Board Presentation Materials</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FERPA Compliance Guide</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Professional Development</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Evans National Safety Group. All rights reserved. | Educational Institution Specialists
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">FERPA Compliance</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
