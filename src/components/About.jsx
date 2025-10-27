import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, TrendingUp, Award } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expert in developing intelligent systems using cutting-edge ML and DL techniques"
    },
    {
      icon: Code2,
      title: "Full-Stack Data Science",
      description: "From data collection to model deployment and monitoring in production"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Translating complex data into actionable insights that drive growth"
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Always staying updated with the latest technologies and best practices"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -top-48 -right-48"></div>
        <div className="absolute w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -bottom-48 -left-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-8 backdrop-blur-sm border border-primary-500/20">
              {/* Placeholder for profile image - you can replace with actual image */}
              <div className="aspect-square rounded-xl bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                <Brain size={120} className="text-primary-400 opacity-50" />
              </div>
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-dark-800 rounded-xl p-4 shadow-xl border border-primary-500/30"
              >
                <div className="text-3xl font-bold text-primary-400">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-dark-800 rounded-xl p-4 shadow-xl border border-primary-500/30"
              >
                <div className="text-3xl font-bold text-primary-400">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold font-display mb-6 text-white">
              Passionate About Data & AI
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a Data Scientist with a deep passion for transforming raw data into meaningful insights 
                that drive real-world impact. With expertise spanning Machine Learning, Deep Learning, and 
                Computer Vision, I specialize in building intelligent systems that solve complex problems.
              </p>
              <p>
                My journey in data science has led me to work on diverse projects—from predictive analytics 
                and customer segmentation to real-time object detection and NLP applications. I believe in 
                the power of data to tell stories and guide strategic decisions.
              </p>
              <p>
                Beyond technical skills, I'm committed to ethical AI development, ensuring that the models 
                I build are fair, transparent, and beneficial to society. I'm always eager to learn new 
                technologies and collaborate on innovative projects.
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="mt-8 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Award className="text-primary-400" size={20} />
                  Education
                </h4>
                {education.map((edu, index) => (
                  <div key={index} className="mb-3 pl-7">
                    <div className="font-medium text-gray-300">{edu.degree}</div>
                    <div className="text-sm text-gray-500">{edu.school} • {edu.year}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Award className="text-primary-400" size={20} />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2 pl-7">
                  {certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-800 text-gray-300 rounded-full text-sm border border-dark-700"
                    >
                      {cert.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <item.icon className="text-primary-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
