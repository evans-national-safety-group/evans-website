/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Evans National Safety Group Brand Colors
      colors: {
        evans: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe', 
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#1e3a8a', // Primary Evans Blue
            600: '#1d4ed8',
            700: '#1e40af',
            800: '#1e3a8a',
            900: '#1e293b'
          },
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b', // Evans Slate
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a'
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#059669', // Evans Green
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d'
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#ea580c', // Evans Orange
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
          },
          cream: {
            50: '#fef7ed', // Evans Cream
            100: '#fef3e2',
            200: '#fde8c4',
            300: '#fbd49b',
            400: '#f9b870',
            500: '#f79449',
            600: '#f37524',
            700: '#e8581c',
            800: '#c7461a',
            900: '#a23b1c'
          }
        },
        // Additional semantic colors
        primary: {
          DEFAULT: '#1e3a8a',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#64748b',
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: '#059669',
          foreground: '#ffffff'
        },
        warning: {
          DEFAULT: '#ea580c',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#fef7ed',
          foreground: '#1e293b'
        }
      },
      
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '128': '32rem',
        '144': '36rem'
      },
      
      // Custom animations and transitions
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-in-out',
        'fade-in-down': 'fadeInDown 0.8s ease-in-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite'
      },
      
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        gradientXY: {
          '0%, 100%': { 
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': { 
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(30, 58, 138, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(30, 58, 138, 0.8)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      
      // Custom gradients
      backgroundImage: {
        'evans-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
        'evans-gradient-light': 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
        'hero-gradient': 'linear-gradient(135deg, #1e293b 0%, #1e3a8a 50%, #059669 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
      },
      
      // Custom shadows
      boxShadow: {
        'evans': '0 10px 25px rgba(30, 58, 138, 0.15)',
        'evans-lg': '0 20px 40px rgba(30, 58, 138, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(30, 58, 138, 0.5)',
        'glow-green': '0 0 20px rgba(5, 150, 105, 0.5)'
      },
      
      // Custom backdrop blur
      backdropBlur: {
        xs: '2px'
      },
      
      // Custom borders
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      
      // Typography enhancements
      fontSize: {
        '2xs': '0.625rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem'
      },
      
      // Screen sizes
      screens: {
        'xs': '475px',
        '3xl': '1600px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin for Evans utilities
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text'
        },
        '.bg-shimmer': {
          position: 'relative',
          overflow: 'hidden'
        },
        '.bg-shimmer::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          animation: 'shimmer 2.5s linear infinite'
        }
      }
      
      const newComponents = {
        '.btn-evans': {
          backgroundColor: '#1e3a8a',
          color: '#ffffff',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#1e40af',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(30, 58, 138, 0.3)'
          }
        },
        '.btn-evans-secondary': {
          backgroundColor: 'transparent',
          color: '#1e3a8a',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          border: '2px solid #1e3a8a',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            transform: 'translateY(-2px)'
          }
        },
        '.card-evans': {
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
          }
        }
      }
      
      addUtilities(newUtilities)
      addComponents(newComponents)
    }
  ]
}
