import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg dark:shadow-gray-800/30'
            : 'py-4 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#home"
              className="text-3xl font-bold relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
                JY
              </span>
              <motion.span 
                className="absolute -top-1 -right-2 text-xs text-blue-600 dark:text-blue-400"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                •
              </motion.span>
            </motion.a>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase()
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-4 py-2 rounded-full ${
                      scrolled 
                        ? 'text-gray-700 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200'
                    } transition-colors`}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: scrolled 
                        ? 'rgba(243, 244, 246, 0.5)' 
                        : 'rgba(255, 255, 255, 0.1)'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        layoutId="activeSection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                )
              })}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full ${
                  scrolled
                    ? 'bg-gray-100 dark:bg-gray-800'
                    : 'bg-white/10 dark:bg-black/20'
                } backdrop-blur-sm hover:ring-2 hover:ring-blue-500/50 dark:hover:ring-purple-500/50 transition-all`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ 
                    rotate: darkMode ? 360 : 0,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {darkMode ? '🌞' : '🌙'}
                </motion.span>
              </motion.button>
            </div>

            <motion.button
              className="md:hidden text-gray-700 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  animate={{ pathLength: 1, opacity: 1 }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="absolute top-[4.5rem] right-4 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div 
                className="border-t border-gray-200 dark:border-gray-700 px-4 py-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => {
                    setDarkMode(!darkMode)
                    setIsOpen(false)
                  }}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <span>{darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar