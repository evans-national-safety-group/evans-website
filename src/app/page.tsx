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
  MessageSquare,
  Video,
  Building2,
  FileText,
  Clock,
  Phone,
  Calendar,
  CreditCard,
  Headphones,
  BookOpen,
  Target,
  TrendingUp,
  Database,
  Smartphone,
  Bot,
  CheckSquare,
  ExternalLink,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  Menu,
  X
} from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('platform')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const platformFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Enhanced Assessments",
      description: "Advanced machine learning algorithms analyze assessment data to provide intelligent insights and risk indicators."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "FedRAMP certified platform with end-to-end encryption, audit trails, and government-grade compliance."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards and reporting tools provide actionable insights for data-driven decisions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Role Collaboration",
      description: "Seamless collaboration tools for consultants, supervisors, administrators, and external partners."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Evidence-Based Methodology",
      description: "Built on proven child protection frameworks with customizable assessment templates and workflows."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Training & Certification",
      description: "Comprehensive learning management system with certification tracking and professional development."
    }
  ]

  const ecosystemComponents = [
    {
      id: 'platform',
      name: 'ECPORA Platform',
      description: 'Core web-based assessment platform',
      icon: <Globe className="w-12 h-12" />,
      features: [
        'Case Management & Assessment Workflows',
        'Multi-Role Dashboards & Analytics', 
        'Compliance & Audit Trail Systems',
        'Training & Certification Management',
        'Real-Time Collaboration Tools',
        'Advanced Reporting & Insights'
      ],
      tech: 'Next.js 14, TypeScript, Supabase, Tailwind CSS',
      status: 'Production Ready'
    },
    {
      id: 'mobile',
      name: 'ECPORA Mobile',
      description: 'iPad-optimized mobile application',
      icon: <Smartphone className="w-12 h-12" />,
      features: [
        'Offline-Capable Field Assessments',
        'Document Scanning & Upload',
        'Real-Time Sync with Platform',
        'Secure Authentication & Biometrics',
        'Location Services & Mapping',
        'Emergency Contact Integration'
      ],
      tech: 'React Native, Redux, Secure Storage',
      status: 'Production Ready'
    },
    {
      id: 'integrations',
      name: 'AI Integrations',
      description: 'Advanced AI and third-party integrations',
      icon: <Bot className="w-12 h-12" />,
      features: [
        'Grain AI Meeting Recording & Analysis',
        'Automated Transcript Generation',
        'Sentiment Analysis & Risk Detection',
        'Real-Time Insights & Recommendations',
        'Compliance Monitoring & Alerts',
        'Custom Integration Framework'
      ],
      tech: 'Node.js, TypeScript, AI/ML Services',
      status: 'Production Ready'
    }
  ]

  const complianceStandards = [
    { name: 'FedRAMP', description: 'Federal Risk and Authorization Management Program' },
    { name: 'SOC 2', description: 'Service Organization Control 2 Type II' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'ISO27001', description: 'Information Security Management' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Director of Child Services",
      organization: "State Department of Social Services",
      content: "ECPORA has revolutionized our assessment process. The AI insights have helped us identify risk factors we might have missed, and the compliance features ensure we meet all regulatory requirements.",
      rating: 5,
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Senior Consultant",
      organization: "Regional Child Protection Agency",
      content: "The mobile app is a game-changer for field work. Being able to complete assessments offline and sync automatically has dramatically improved our efficiency and data quality.",
      rating: 5,
      image: "/images/testimonials/michael-chen.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Technology Officer",
      organization: "National Child Welfare Organization",
      content: "Evans National Safety Group has created something truly special with ECPORA. The platform's sophistication combined with intuitive design makes it perfect for our diverse user base.",
      rating: 5,
      image: "/images/testimonials/emily-rodriguez.jpg"
    }
  ]

  const pricingTiers = [
    {
      name: "Professional",
      price: "$99",
      period: "per user/month",
      description: "Perfect for individual consultants and small teams",
      features: [
        "Complete ECPORA Platform Access",
        "Mobile App & Offline Capability", 
        "Basic Analytics & Reporting",
        "Email Support",
        "Standard Compliance Tools",
        "Up to 50 Active Cases"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "Comprehensive solution for large organizations",
      features: [
        "Full Platform & Mobile Access",
        "Advanced AI Integrations",
        "Custom Analytics & Dashboards",
        "24/7 Priority Support",
        "Advanced Compliance & Audit",
        "Unlimited Cases & Users",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      popular: true,
      cta: "Contact Sales"
    },
    {
      name: "Government",
      price: "Contact",
      period: "for special pricing",
      description: "Specialized solutions for government agencies",
      features: [
        "FedRAMP Certified Platform",
        "Government Cloud Deployment",
        "Custom Security Controls",
        "Compliance Consulting",
        "Training & Certification",
        "Multi-Agency Coordination",
        "Emergency Response Features",
        "Regulatory Reporting Tools"
      ],
      popular: false,
      cta: "Request Demo"
    }
  ]

  const stats = [
    { number: "50,000+", label: "Assessments Completed", icon: <CheckSquare className="w-6 h-6" /> },
    { number: "500+", label: "Organizations Served", icon: <Building2 className="w-6 h-6" /> },
    { number: "99.9%", label: "Platform Uptime", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Headphones className="w-6 h-6" /> }
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
              <div className="w-12 h-12 bg-evans-gradient rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Evans National Safety Group</div>
                <div className="text-sm text-evans-blue-500 font-medium">ECPORA Platform</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#platform" className="nav-link">Platform</a>
              <a href="#ecosystem" className="nav-link">Ecosystem</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Request Demo
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
                <a href="#platform" className="block py-2 text-slate-600 hover:text-evans-blue-500">Platform</a>
                <a href="#ecosystem" className="block py-2 text-slate-600 hover:text-evans-blue-500">Ecosystem</a>
                <a href="#pricing" className="block py-2 text-slate-600 hover:text-evans-blue-500">Pricing</a>
                <a href="#testimonials" className="block py-2 text-slate-600 hover:text-evans-blue-500">Testimonials</a>
                <a href="#contact" className="block py-2 text-slate-600 hover:text-evans-blue-500">Contact</a>
                <button className="btn-primary w-full">
                  Request Demo
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
              <Award className="w-4 h-4 mr-2" />
              FedRAMP Certified • Enterprise-Grade Security
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              The Future of{' '}
              <span className="text-gradient bg-gradient-to-r from-evans-green-400 to-evans-orange-400 bg-clip-text text-transparent">
                Child Protection
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              ECPORA delivers AI-enhanced assessment solutions with evidence-based methodology, 
              comprehensive compliance automation, and enterprise-grade security for government agencies and organizations nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
              <button className="btn-primary btn-lg group">
                Request Live Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-secondary btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Explore Platform
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 opacity-10 animate-float">
          <Shield className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-bounce-subtle">
          <Users className="w-24 h-24" />
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-blue-50 text-evans-blue-600 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Platform Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Child Protection Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every feature is designed with child safety and professional efficiency in mind, 
              backed by years of expertise in child protection services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
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

      {/* ECPORA Ecosystem */}
      <section id="ecosystem" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-green-50 text-evans-green-600 rounded-full text-sm font-medium mb-4">
              <Database className="w-4 h-4 mr-2" />
              Complete Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Platform Ecosystem
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three integrated solutions working seamlessly together to provide the most comprehensive 
              child protection technology platform available.
            </p>
          </div>

          {/* Ecosystem Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {ecosystemComponents.map((component) => (
              <button
                key={component.id}
                onClick={() => setActiveTab(component.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === component.id
                    ? 'bg-evans-blue-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {component.name}
              </button>
            ))}
          </div>

          {/* Ecosystem Content */}
          {ecosystemComponents.map((component) => (
            <div
              key={component.id}
              className={`transition-all duration-500 ${
                activeTab === component.id ? 'block animate-fade-in-up' : 'hidden'
              }`}
            >
              <div className="card-evans p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-evans-gradient rounded-2xl text-white mr-4">
                        {component.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">{component.name}</h3>
                        <p className="text-evans-blue-500 font-medium">{component.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 mb-8">
                      {component.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                        <strong>Tech:</strong> {component.tech}
                      </div>
                      <div className="px-3 py-1 bg-evans-green-50 text-evans-green-700 rounded-full">
                        <strong>Status:</strong> {component.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">{component.icon}</div>
                        <div className="text-slate-500">Platform Screenshot</div>
                        <div className="text-sm text-slate-400">Coming Soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              <Lock className="w-4 h-4 mr-2" />
              Security & Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Government-Grade Security
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Certified and compliant with the highest security standards required by government agencies and healthcare organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="card-hover p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{standard.name}</h3>
                <p className="text-slate-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-evans-orange-50 text-evans-orange-600 rounded-full text-sm font-medium mb-4">
              <CreditCard className="w-4 h-4 mr-2" />
              Flexible Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions for Every Organization
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From individual consultants to large government agencies, we have pricing plans that scale with your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative ${
                tier.popular 
                  ? 'card-evans p-8 ring-4 ring-evans-blue-200 scale-105' 
                  : 'card-hover p-8'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-evans-gradient text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-evans-blue-500 mb-2">
                    {tier.price}
                    <span className="text-sm font-normal text-slate-500">/{tier.period}</span>
                  </div>
                  <p className="text-slate-600">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-evans-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${
                  tier.popular ? 'btn-primary' : 'btn-secondary'
                }`}>
                  {tier.cta}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Professionals Nationwide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how ECPORA is transforming child protection services and empowering professionals to make better decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-hover p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-evans-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-evans-gradient text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Child Protection Services?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            Join hundreds of organizations already using ECPORA to deliver better outcomes for children and families. 
            Schedule a personalized demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-lg bg-white text-evans-blue-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Schedule Demo
              <Calendar className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-evans-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Contact Sales
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
                <div className="w-12 h-12 bg-evans-gradient rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">Evans National Safety Group</div>
                  <div className="text-evans-blue-400 font-medium">ECPORA Platform</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Leading provider of enterprise-grade child protection assessment solutions. 
                Empowering professionals with AI-enhanced tools, evidence-based methodology, 
                and comprehensive compliance automation.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  Washington, DC
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@evansnationalsafety.com
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">ECPORA Platform</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mobile Application</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">AI Integrations</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Training & Certification</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Compliance Tools</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Status Page</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Evans National Safety Group. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
