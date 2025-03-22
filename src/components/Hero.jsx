import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-20"></div>
        <motion.div 
          className="absolute -inset-[10px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 relative">
              Jayesh Yadav
              <motion.span 
                className="absolute -right-8 top-0 text-3xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                👋
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 relative"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="relative">
              Blockchain Developer
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building secure, user-focused applications with blockchain technology specializing in Ethereum and Solana ecosystems
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-purple-600 dark:to-blue-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#projects" 
              className="group px-8 py-4 bg-white/10 text-gray-800 dark:text-white rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <motion.span 
                className="inline-block ml-2"
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <i className="fas fa-phone"></i>
              <span>+91 7724921978</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <i className="fas fa-envelope"></i>
              <span>jayeshnyadav497@gmail.com</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mt-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: "linkedin", href: "https://linkedin.com/in/jayeshy14", color: "blue" },
              { icon: "github", href: "https://github.com/jayeshy14", color: "purple" },
              { icon: "twitter", href: "https://twitter.com/jayeshy14", color: "cyan" }
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-600 hover:text-${social.color}-600 dark:text-gray-400 dark:hover:text-${social.color}-400 transition-colors`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`fab fa-${social.icon}`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 