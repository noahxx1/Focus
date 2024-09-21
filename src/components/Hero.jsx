import profilepic from "../assets/profpic.jpg";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiLaravel,
  DiNodejsSmall,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Typewriter from "typewriter-effect";
import { heroImg } from "../assets";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const local = Cookies.get("i18next");
  let lang = i18n.language;
  return (
    <div
      id="hero"
      className="mt-24 xl:mt-40 max-w-[700px] xl:max-w-[1440px] mx-auto relative"
    >
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1
            className={`font-bold text-gray-400 text-xl md:text-5xl mb-4 ${
              lang === "ar" ? "xl:text-right" : ""
            }`}
          >
            <Typewriter
              options={{
                loop: true,
                delay: 75,
                cursor: local === "ar" ? "|\u200F" : "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(t("Fullstack Dev"))
                  .pauseFor(1000)
                  .deleteChars(26)
                  .typeString(t("Web Design"))
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-gray-200 md:text-7xl text-5xl tracking-tight mb-14 ${
              lang === "ar" ? "xl:text-right" : ""
            }`}
          >
            {t("We Are")}
            <span className="text-purple-500"> {t("Focus!")}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className={`text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 ${
              lang === "ar" ? "xl:text-right" : ""
            }`}
          >
            {t(
              "We Work In The Software And Electronic Applications Industry, Design, Development,Implementation And Management Of Websites And Software Projects"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className={`flex flex-row items-center gap-6 my-4 md:mb-0 ${
              lang === "ar" ? "xl:justify-end" : ""
            }`}
          >
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/focustarkiz"
              >
                <AiOutlineFacebook />
              </motion.a>

              <motion.a
                target="_blank"
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/focus-holding-934a24272"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                target="_blank"
                whileHover={{ scale: 1.2 }}
                href="https://whatsapp.com/channel/0029VaRuAd6GehEQUyDqMl2O4"
              >
                <AiOutlineWhatsApp />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={heroImg}
          className="w-[300px] md:w-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-16 xl:py-24"
      >
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
        <DiLaravel className="text-red-500 mx-2" />
        <DiPhp className="text-cyan-500 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
