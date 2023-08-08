import { motion } from "framer-motion";
import { styles } from "../styles";
import Port from '../assets/astronaut-g006a34463_1920.png'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#1E293B] via-[#1C2431] to-[#1B222D]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-5">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-[#915EFF] to-[#AA61E0]" />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:order-1 order-2"
        >
          <h1
            className={`${styles.heroHeadText} text-white text-3xl md:text-4xl lg:text-5xl`}
          >
            Hi, I'm <span className="text-[#915EFF]">Shiva</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white text-lg md:text-xl`}
          >
            I am a Full Stack Developer <br className="sm:block hidden" />
            creating dynamic interfaces and web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:order-2 order-1"
        >
          <img
            src={Port}
            alt="portfolio"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full "
            style={{ background: "transparent" }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
