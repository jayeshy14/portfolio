import { motion } from 'framer-motion'

const experiences = [
  {
    company: "Ignitus Networks",
    position: "Blockchain Developer Intern",
    period: "July 2024 - Dec 2024",
    description: [
      "Developed and launched two successful NFT marketplaces focusing on digital media assets and property sales within three months; optimized transaction processes using robust smart contracts, improving overall user experience",
      "Pioneered efforts to construct an innovative Discriminator tailored for Solana, addressing key challenges in data retrieval and resolving three major bottlenecks affecting user experience",
      "Explored and studied a wide range of blockchain technologies, including Aptos, Kiichain, Polygon, TON, and Solana, gaining deep insights into their protocols and development ecosystems"
    ],
    tech: ["Solana", "Rust", "React", "Node.js"],
    color: "blue"
  },
  {
    company: "Metadee AI",
    position: "Blockchain Developer (Contract)",
    period: "January 2025 - Feb 2025",
    description: [
      "Built a high-performance centralized exchange (CEX) from scratch, supporting multi-asset trading with secure custody and real-time order book management",
      "Built a matching engine processing thousands of trades per second, reducing latency and ensuring price discovery",
      "Developed a multi-chain deposit system for Ethereum, Solana, and BSC, designed for future blockchain integration"
    ],
    tech: ["Ethereum", "Solidity", "Web3.js", "MongoDB"],
    color: "purple"
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-white dark:bg-gray-900 p-8 rounded-xl relative group"
              >
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                />

                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.position}</p>
                    </motion.div>
                    <motion.span 
                      className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 inline-flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <i className="far fa-calendar-alt mr-2"></i>
                      {exp.period}
                    </motion.span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-3">
                            <i className="fas fa-check-circle"></i>
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 