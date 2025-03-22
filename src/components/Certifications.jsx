import { motion } from 'framer-motion'

const certifications = [
  {
    title: "Certified Web3 Blockchain Developer",
    organization: "101 Blockchains",
    icon: "🏆",
    color: "blue"
  },
  {
    title: "Certified Web3 Professional",
    organization: "101 Blockchains",
    icon: "🔰",
    color: "green"
  },
  {
    title: "Certified Blockchain Security Expert",
    organization: "101 Blockchains",
    icon: "🔒",
    color: "red"
  },
  {
    title: "Solana Development Certification",
    organization: "101 Blockchains",
    icon: "⚡",
    color: "purple"
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional <span className="gradient-text">Certifications</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="card-hover bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                />
                
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center text-3xl bg-blue-100 dark:bg-blue-900/30 rounded-full"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {cert.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    {cert.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 