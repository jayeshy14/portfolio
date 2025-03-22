import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { title: "Graduation", desc: "B.Tech in Computer Science", detail: "IIIT Kota, 2020-2024", icon: "🎓" },
    { title: "High School", desc: "Mathematics and Science", detail: "Macro Vision Academy, 2016-2020", icon: "🏫" },
    { title: "Projects", desc: "Several Completed", detail: "Blockchain Solutions", icon: "🚀" },
    { title: "Certifications", desc: "4 Professional", detail: "Blockchain Certificates", icon: "📜" }
  ]

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background decorative elements */}
          <motion.div 
            className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <div className="relative">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <div className="space-y-6">
                    <motion.p 
                      className="text-lg text-gray-700 dark:text-gray-300 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      I'm a recently graduated Blockchain Developer with a strong foundation in Computer Science from 
                      Indian Institute of Information Technology, Kota. My expertise lies in developing 
                      decentralized applications and smart contracts across multiple blockchain platforms.
                    </motion.p>
                    <motion.p 
                      className="text-lg text-gray-700 dark:text-gray-300 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      With experience in both Ethereum and Solana ecosystems, I've worked on projects like 
                      NFT marketplaces, exchange platforms, and multi-chain solutions. I'm passionate about 
                      applying blockchain technology to create secure, user-focused applications.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    className="card-hover bg-gray-50 dark:bg-gray-800 p-6 rounded-xl relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    />
                    <div className="relative">
                      <span className="text-2xl mb-3 block">{stat.icon}</span>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{stat.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{stat.desc}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{stat.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 