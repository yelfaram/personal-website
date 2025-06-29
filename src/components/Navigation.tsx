import { NavLink } from 'react-router-dom'
import { Home, User, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/projects', label: 'Projects', icon: User },
    { to: '/contact', label: 'Contact', icon: Mail }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2',
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:bg-slate-800'
                    )
                  }
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-slate-800">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-2',
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:bg-slate-800'
                    )
                  }
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation