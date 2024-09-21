import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1300px] mx-auto flex justify-center text-center p-2 text-sm md:text-lg ">
      <p className="text-gray-400">
        Copyright ©2024{" "}
        <a target="_blank" href="https://focustradingcompany.com/">
          <span className="text-purple-500 cursor-pointer">
            Focus Digital Solutions Company.
          </span>
        </a>{" "}
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
