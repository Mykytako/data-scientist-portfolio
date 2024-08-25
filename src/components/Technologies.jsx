import {
  SiMysql,
  SiPython,
  SiTableau,
  SiPandas,
  SiSelenium,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiApachehadoop, // Updated for Hadoop
  SiApachespark,
  SiApachekafka,
  SiStreamlit,
  SiApachecassandra, // Updated for Cassandra
  SiPowerbi,
} from "react-icons/si";
import { GrDocumentExcel } from "react-icons/gr";
import { FaAmazon } from "react-icons/fa"; // Using FaAmazon as requested
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-col items-center gap-8">
        {/* Top Row */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center gap-4"
        >
          {/* MySQL */}
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-blue-600" />
          </motion.div>

          {/* Cassandra */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiApachecassandra className="text-7xl text-purple-700" />
          </motion.div>

          {/* Python */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPython className="text-7xl text-blue-500" />
          </motion.div>

          {/* Pandas */}
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPandas className="text-7xl text-purple-600" />
          </motion.div>

          {/* Selenium */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiSelenium className="text-7xl text-green-500" />
          </motion.div>

          {/* Scikit-learn */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiScikitlearn className="text-7xl text-orange-500" />
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center gap-4"
        >
          {/* TensorFlow */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTensorflow className="text-7xl text-orange-600" />
          </motion.div>

          {/* PyTorch */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPytorch className="text-7xl text-orange-600" />
          </motion.div>

          {/* Hadoop */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiApachehadoop className="text-7xl text-yellow-600" />
          </motion.div>

          {/* Amazon */}
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaAmazon className="text-7xl text-orange-500" />
          </motion.div>

          {/* Apache Spark */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiApachespark className="text-7xl text-red-600" />
          </motion.div>
        </motion.div>

        {/* Remaining icons */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          {/* Apache Kafka */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiApachekafka className="text-7xl text-purple-600" />
          </motion.div>

          {/* Tableau */}
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTableau className="text-7xl text-blue-400" />
          </motion.div>

          {/* Power BI */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPowerbi className="text-7xl text-yellow-600" />
          </motion.div>

          {/* Streamlit */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiStreamlit className="text-7xl text-pink-600" />
          </motion.div>

          {/* Excel */}
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <GrDocumentExcel className="text-7xl text-green-500" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
