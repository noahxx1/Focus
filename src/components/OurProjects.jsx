import Reveal from "./Reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import {
  eway1,
  eway2,
  eway3,
  find1,
  find2,
  find3,
  flash1,
  flash2,
  flash3,
  mash1,
  mash2,
  mash3,
  school1,
  school2,
  school3,
  srd1,
  srd2,
  srd3,
  tamiuz1,
  tamiuz2,
  tamiuz3,
} from "../assets";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const OurProjects = () => {
  const { t, i18n } = useTranslation();
  let lang = i18n.language;

  const projects = [
    {
      img: [mash1, mash2, mash3],
      title: t("Mashawiri"),
      description: t(
        "A safe passenger transport app that provides transportation services and offers features that set it apart from other electronic payment apps, including scheduled trips, security, route tracking, privacy, and 24/7 customer support"
      ),
      links: {
        site: "https://mashawiri.focustradingco.sy/",
        download:
          "https://play.google.com/store/apps/details?id=com.ma.ma_app_client",
      },
    },
    {
      img: [eway1, eway2, eway3],
      title: t("E-Way"),
      description: t(
        "This transportation app, featuring separate applications for customers and drivers, serves the Al-Hasakah Governorate. It provides water transportation, ambulance services, and offers various additional features"
      ),
      links: {
        site: "https://ewaytaxi.com/",
        download:
          "https://play.google.com/store/apps/details?id=com.e_way_client.e_way_client_app",
      },
    },
    {
      img: [find1, find2, find3],
      title: t("Find Me"),
      description: t(
        "An electronic advertising platform that unites commercial, tourist, industrial, and service establishments, helping market companies and institutions"
      ),
      links: {
        site: "https://findemesy.focustradingco.sy/",
        download:
          "https://play.google.com/store/apps/details?id=com.focusfindme.focus_find_me",
      },
    },
    {
      img: [school1, school2, school3],
      title: t("Tarkiz"),
      description: t(
        "A Syrian virtual school, licensed by the Ministry of Education, designed for expatriate students. It offers distance education for all academic levels and provides recognized and certified certificates"
      ),
      links: {
        site: "https://tarkizschool.com/",
        download: "#",
      },
    },
    {
      img: [tamiuz1, tamiuz2, tamiuz3],
      title: t("Altamioz"),
      description: t(
        "An educational platform offering video lessons and courses taught by specialized professors. The courses, including those for secondary and middle school certificates, are available on the platform and are paid"
      ),
      links: {
        site: "https://altamioz.online/",
        download:
          "https://play.google.com/store/apps/details?id=com.excellence_virtual_education.altamioz",
      },
    },
    {
      img: [flash1, flash2, flash3],
      title: t("Flash-Pay"),
      description: t(
        "An Application That Relies On Mediation Between Syrian Telecommunications Companies, Distributors, And Points Of Sale, So That It Provides A Fast And Flexible Service To The Final Customer"
      ),
      links: {
        site: "#",
        download: "#",
      },
    },
    {
      img: [srd1, srd2, srd3],
      title: t("SRD"),
      description: t(
        "A social audio app that enables users to discuss various topics in voice chat rooms and provides 24/7 digital news services covering politics, social issues, economics, and entertainment"
      ),
      links: {
        site: "https://sared-new2.vercel.app/",
        download: "#",
      },
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-4xl font-bold text-gray-200 mb-16 text-center">
        {t("Our Projectss")}
      </h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col items-center justify-between md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12 xl:mb-28`}
          >
            <div className="w-[350px] xl:w-[600px] p-4">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                showDots={false}
                arrows={false}
                draggable={true}
                swipeable={true}
              >
                {project.img.map((image, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} image ${idx + 1}`}
                      className=" object-cover w-full xl:h-[400px] md:h-[300px] h-[200px] rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className=" p-4 flex flex-col justify-center">
              <h3
                className={`text-2xl font-semibold text-purple-500 mb-4 ${
                  lang === "ar" ? "xl:text-right" : ""
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-gray-300 mb-4 ${
                  lang === "ar" ? "xl:text-right" : ""
                }`}
              >
                {project.description}
              </p>
              <div
                className={`flex space-x-4 ${
                  lang === "ar" ? "xl:justify-end" : ""
                }`}
              >
                <a
                  target="_blank"
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                      transition duration-300"
                >
                  {t("View Site")}
                </a>
                <a
                  target="_blank"
                  href={project.links.download}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                      transition duration-300"
                >
                  {t("Download App")}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default OurProjects;
