import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.png"; // Update the image if needed

const HERO_CONTENT =
  "I am a passionate Data Scientist with over 3 years of experience in applying data-driven solutions to solve complex challenges across diverse industries. Adept in Python, SQL, and big data technologies like Hadoop and Spark, I excel at creating and deploying machine learning models, conducting web scraping, and integrating APIs to support decision-making. My expertise includes building predictive models, deep learning applications, and dynamic visualizations through tools such as Tableau, Streamlit, and Power BI. I thrive on using cutting-edge tools and data science techniques to optimize processes, improve operational efficiency, and deliver actionable insights that drive measurable business outcomes.";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mykyta Kondratiev
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Data Scientist
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} // Use your own profile picture if needed
              alt="Mykyta Kondratiev"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
