"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-secondary-300">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Amitesh", 1000, "Full Stack Dev..", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#A0AEC0] text-base sm:text-lg mb-6 lg:text-xl">
  I&apos;m a passionate full stack developer specializing in building modern, scalable web applications using technologies like Next.js, Node.js, and MongoDB. I also have a strong interest in Artificial Intelligence, Machine Learning, and Data Science, where I work on building predictive models, analyzing data, and extracting meaningful insights. I enjoy combining intelligent systems with web technologies to create impactful, real-world solutions with clean and efficient code.
</p>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#6EE7B7] text-white shadow-lg transition-all duration-300"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/18SgJIZ2pgatCdWGSmrI18O_hyXZODKaV/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] hover:from-[#EC4899] hover:to-[#8B5CF6] text-white mt-3 transition-all duration-300"
            >
              <span className="block bg-[#121212] hover:bg-[#1f1f1f] rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] p-[4px] shadow-xl">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#181818]">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
