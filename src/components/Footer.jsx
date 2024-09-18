import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1300px] mx-auto flex justify-center text-center p-2 text-sm md:text-lg ">
      <p className="text-gray-400">
        {t(
          "Copyright ©2024 Focus Digital Solutions Company,All Rights Reserved"
        )}
      </p>
    </div>
  );
};

export default Footer;
