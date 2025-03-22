import { motion } from 'framer-motion'

const projects = [
  {
    title: "Centralized Exchange Platform",
    description: "High-performance CEX supporting multi-asset trading with secure custody and real-time order book management.",
    tech: ["React", "Node.js", "MongoDB", "TimescaleDB", "Redis", "Ethereum", "Solana", "BSC"],
    highlights: [
      "Designed and developed a CEX with a custom matching engine",
      "Multi-chain deposit and withdrawal system",
      "Scalable architecture for high trade volumes with low latency"
    ],
    link: "https://github.com/jayeshy14/cex-platform",
    color: "blue"
  },
  {
    title: "Bitcoin Loan Bank",
    description: "Decentralized peer-to-peer lending platform enabling users to borrow Bitcoin using gold or property as collateral.",
    tech: ["Clarity", "Stacks blockchain", "React"],
    highlights: [
      "Implemented risk-adjusted repayment mechanism",
      "Mitigated Bitcoin's price volatility",
      "Enhanced loan stability"
    ],
    link: "https://github.com/jayeshy14/bitcoin-bank",
    color: "purple"
  },
  {
    title: "Discriminator Directory on Solana",
    description: "Platform enabling developers to discover and contribute Solana program discriminators with real-time blockchain indexing.",
    tech: ["Rust", "React", "TypeScript", "PostgreSQL", "Solana Web3.js", "TailwindCSS"],
    highlights: [
      "Real-time blockchain indexing",
      "Full-stack application with React frontend",
      "Rust backend API for storing discriminator data"
    ],
    link: "https://github.com/jayeshy14/discriminator-directory",
    color: "indigo"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-black">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"
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
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-white dark:bg-gray-900 rounded-xl overflow-hidden relative group"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                />

                <div className="p-6 relative">
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">
                            <i className="fas fa-check-circle"></i>
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project 
                    <motion.span 
                      className="ml-1"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 