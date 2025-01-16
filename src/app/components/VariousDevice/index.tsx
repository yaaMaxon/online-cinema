import VariousDeviceItem from "../VariousDeviceItem";
import { platformInformation } from "./platformInformation";

const VariousDevice = () => {
  return (
    <div>
      <h2 className="text-white text-xl font-semibold mb-2.5 lg:text-[28px]">
        We Provide you streaming experience across various devices.
      </h2>
      <p className="text-default text-sm mb-10 lg:hidden">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere.
      </p>
      <p className="text-default mb-10 hidden lg:block">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere. Our platform is designed to be compatible with a wide
        range of <br /> devices, ensuring that you never miss a moment of
        entertainment.
      </p>

      <ul className="flex flex-col gap-5 lg:justify-center lg:flex-row lg:flex-wrap">
        {platformInformation.map(({ icon, title, description }, index) => (
          <VariousDeviceItem
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
};

export default VariousDevice;
