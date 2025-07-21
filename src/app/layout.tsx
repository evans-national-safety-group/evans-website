import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://evansnationalsafety.com'),
  title: {
    default: 'Evans National Safety Group - Enterprise Child Protection Solutions',
    template: '%s | Evans National Safety Group'
  },
  description: 'Leading provider of enterprise-grade child protection assessment solutions. The ECPORA platform delivers AI-enhanced assessments, evidence-based methodology, and comprehensive compliance automation for government agencies and organizations nationwide.',
  keywords: [
    'Evans National Safety Group',
    'child protection',
    'ECPORA platform',
    'assessment solutions',
    'enterprise software',
    'government compliance',
    'FedRAMP certified',
    'AI assessments',
    'evidence-based methodology',
    'child welfare technology',
    'case management',
    'risk assessment',
    'social services technology',
    'compliance automation',
    'secure platform'
  ],
  authors: [
    {
      name: 'Evans National Safety Group',
      url: 'https://evansnationalsafety.com'
    }
  ],
  creator: 'Evans National Safety Group',
  publisher: 'Evans National Safety Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evansnationalsafety.com',
    siteName: 'Evans National Safety Group',
    title: 'Evans National Safety Group - Enterprise Child Protection Solutions',
    description: 'Leading provider of enterprise-grade child protection assessment solutions. The ECPORA platform delivers AI-enhanced assessments with comprehensive compliance automation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evans National Safety Group - ECPORA Platform Overview',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EvansNationalSG',
    creator: '@EvansNationalSG',
    title: 'Evans National Safety Group - Enterprise Child Protection Solutions',
    description: 'Leading provider of enterprise-grade child protection assessment solutions. The ECPORA platform delivers AI-enhanced assessments with comprehensive compliance automation.',
    images: ['/images/twitter-card.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-site-verification-code'
  },
  category: 'Government Technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
  colorScheme: 'light dark'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Additional meta tags */}
        <meta name="application-name" content="Evans National Safety Group" />
        <meta name="apple-mobile-web-app-title" content="Evans NSG" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Evans National Safety Group',
              description: 'Leading provider of enterprise-grade child protection assessment solutions',
              url: 'https://evansnationalsafety.com',
              logo: 'https://evansnationalsafety.com/images/evans-logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-EVANS-NSG',
                contactType: 'Customer Service',
                availableLanguage: 'English'
              },
              sameAs: [
                'https://www.linkedin.com/company/evans-national-safety-group',
                'https://twitter.com/EvansNationalSG'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Washington',
                addressRegion: 'DC',
                addressCountry: 'US'
              }
            })
          }}
        />
        
        {/* Structured data for software application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ECPORA Platform',
              description: 'AI-enhanced child protection assessment platform with evidence-based methodology',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: 'Contact for pricing',
                priceCurrency: 'USD'
              },
              creator: {
                '@type': 'Organization',
                name: 'Evans National Safety Group'
              },
              featureList: [
                'AI-Enhanced Assessments',
                'Evidence-Based Methodology',
                'Enterprise Security',
                'Real-Time Analytics',
                'Multi-Role Collaboration',
                'Training & Certification'
              ]
            })
          }}
        />
      </head>
      <body 
        className={`
          ${inter.className} 
          antialiased 
          bg-gradient-to-br 
          from-slate-50 
          to-evans-cream-50 
          text-slate-900 
          selection:bg-evans-blue-200 
          selection:text-evans-blue-900
        `}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-evans-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
        
        {/* Main application container */}
        <div id="root" className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Analytics script placeholder */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics 4 */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: document.title,
                    page_location: window.location.href,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
