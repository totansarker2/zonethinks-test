import { FaGlobe, FaMobileAlt, FaFacebookF, FaChartLine } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const services = [
  {
    icon: <FaGlobe className="text-3xl text-red-500 mb-4" />,
    title: "Web Design",
    description: "Cras leo lorem, gravida vel tristique nec, tempor a urna.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-red-500 mb-4" />,
    title: "App Design",
    description: "Cras leo lorem, gravida vel tristique nec, tempor a urna.",
  },
  {
    icon: <FaFacebookF className="text-3xl text-red-500 mb-4" />,
    title: "Social Media",
    description: "Cras leo lorem, gravida vel tristique nec, tempor a urna.",
  },
  {
    icon: <FaChartLine className="text-3xl text-red-500 mb-4" />,
    title: "SEO Marketing",
    description: "Cras leo lorem, gravida vel tristique nec, tempor a urna.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          <div className="lg:w-1/2 space-y-4">
            <p className="text-red-500 uppercase tracking-widest">Services</p>
            <h2 className="text-4xl font-extrabold">
              We Provide Digital Services
            </h2>
          </div>
          <div className="lg:w-1/2 text-gray-400 space-y-4 mt-6 lg:mt-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo
              lorem, gravida vel tristique nec, tempor a urna. Suspendisse
              scelerisque finibus sapien.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo
              lorem, gravida vel tristique nec, tempor a urna. Suspendisse
              scelerisque finibus sapien.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-700 p-6 hover:bg-gray-900 transition-colors"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-red-500 font-semibold flex items-center gap-2 group"
              >
                Read More{" "}
                <HiArrowNarrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
