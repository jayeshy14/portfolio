import { motion } from 'framer-motion'

const getProgressBarColor = (color) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    pink: 'from-pink-500 to-pink-600',
    cyan: 'from-cyan-500 to-cyan-600',
    yellow: 'from-yellow-500 to-yellow-600',
    teal: 'from-teal-500 to-teal-600',
    red: 'from-red-500 to-red-600',
    emerald: 'from-emerald-500 to-emerald-600',
    rose: 'from-rose-500 to-rose-600'
  }
  return colorMap[color] || 'from-blue-500 to-blue-600'
}

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Solidity", level: 90 },
      { name: "Rust", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 }
    ]
  },
  {
    title: "Frameworks",
    icon: "⚙️",
    skills: [
      { name: "Anchor", level: 85 },
      { name: "Foundry", level: 80 },
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 }
    ]
  },
  {
    title: "Blockchains",
    icon: "🔗",
    skills: [
      { name: "Solana", level: 90 },
      { name: "Ethereum", level: 85 },
      { name: "EVM Layer2s", level: 75 },
      { name: "BSC", level: 80 },
      { name: "Sui/Aptos", level: 70 }
    ]
  },
  {
    title: "Tools & Standards",
    icon: "🛠️",
    skills: [
      { name: "Hardhat/Foundry", level: 85 },
      { name: "Web3.js/Ethers.js", level: 90 },
      { name: "ERC20/721/1155", level: 90 },
      { name: "SPL/Metaplex", level: 85 },
      { name: "Redis/MongoDB", level: 80 }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-black">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-gray-50 dark:bg-gray-800 p-6 rounded-xl relative group"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <div className="absolute right-0 -top-1 w-2 h-2 bg-white rounded-full shadow-lg" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills