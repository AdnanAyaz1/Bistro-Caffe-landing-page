import { aboutData } from "../data";
import { motion } from "framer-motion";
import { plateVariants, staggerContainer, fadeIn } from "../variants";
import Image from 'next/image';

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <motion.section
      className="flex flex-col lg:flex-row max-w-[1440px] mx-auto mt-8 px-8"
      variants={staggerContainer(0.3, 1.1)}
      initial="hidden"
      whileInView={"show"}
      id='about'
    >
      <motion.div
        variants={staggerContainer(0.3, 1.1)}
        initial="hidden"
        whileInView={"show"}
      >
        <div className="flex-col  text-center md:text-left">
          <motion.h1
            className="pretitle"
            variants={fadeIn("right", 0.2, 1.1)}
            initial="hidden"
            whileInView="show"
          >
            {pretitle}
          </motion.h1>
          <motion.h1
            className="h2 capitalize"
            variants={fadeIn("right", 0.3, 1.1)}
            initial="hidden"
            whileInView="show"
          >
            {title}
          </motion.h1>
          <motion.p
            className="max-w-[580px] mb-8"
            variants={fadeIn("right", 0.4, 1.1)}
            initial="hidden"
            whileInView="show"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.5, 1.1)}
            initial="hidden"
            whileInView="show"
          >
            <button className="btn capitalize mx-auto md:mx-0 mb-8">
              {btnText}
            </button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div variants={plateVariants} className="z-[1] relative w-full h-[500px]">
        <Image 
          src={image}
          alt="About Bistro Cafe plate presentation"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          quality={90}
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
