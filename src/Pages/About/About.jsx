import { FaRocket, FaUsers } from "react-icons/fa";
import img1 from "../../assets/images/coworkers-working-on-project-together-in-office-1.jpg";
import img2 from "../../assets/images/coworkers-working-on-project-together-in-office-2.jpg";

const About = () => (
  <section className="bg-black text-white h-[100vh] flex items-center justify-center">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Left: Overlapping Images */}
      <div className="relative flex-shrink-0 w-full lg:w-1/2 h-[400px]">
        {/* Back image */}
        <img
          src={img2}
          alt="Team brainstorming"
          className="absolute top-0 left-0 w-4/5 rounded-lg shadow-xl object-cover h-full"
        />
        {/* Front image */}
        <div className="relative w-full h-full top-36">
          <img
            src={img1}
            alt="Office discussion"
            className="absolute bottom-0 right-0 w-4/5 rounded-lg shadow-2xl object-cover h-full"
          />
        </div>
      </div>

      {/* Right: Text + Stats + Button */}
      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-red-500 uppercase tracking-widest">About</p>
        <h2 className="text-4xl font-extrabold">Welcome to Techoes</h2>
        <p className="text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo
          lorem, gravida vel tristique nec, tempor a urna. Suspendisse
          scelerisque.
        </p>

        {/* Stats */}
        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <FaRocket className="text-red-500 text-3xl mb-2" />
            <span className="text-3xl font-bold">
              10<span className="text-red-500">+</span>
            </span>
            <span className="text-gray-400">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-red-500 text-3xl mb-2" />
            <span className="text-3xl font-bold">
              500<span className="text-red-500">+</span>
            </span>
            <span className="text-gray-400">Satisfied Clients</span>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="mt-4 inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default About;
