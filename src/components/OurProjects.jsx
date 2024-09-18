import Reveal from "./Reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { useTranslation } from "react-i18next";

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

const projects = [
  {
    img: [project1, project2, project5],
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: [project2, project4, project6],
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: [project4, project5, project6],
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: [project5, project6, project1],
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: [project6, project1, project2],
    title: "Project #5",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: [project1, project2, project5],
    title: "Project #6",
    description: "A React-based web application with multiple features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: [project2, project4, project6],
    title: "Project #7",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const OurProjects = () => {
  const { t } = useTranslation();

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
            <div className="w-[320px] xl:w-[600px]  p-4">
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
                      className=" object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className=" p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                      transition duration-300"
                >
                  {t("View Site")}
                </a>
                <a
                  href={project.links.github}
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
