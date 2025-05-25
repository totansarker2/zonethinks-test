import { FaCloud, FaDatabase, FaFolder } from "react-icons/fa";
import visionImage from "../../assets/images/OurVision.jpg"

const OurVision = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <p className="text-red-500 font-semibold tracking-widest uppercase mb-3">Our Vision</p>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Become the Best Tech Support</h2>
          <p className="text-gray-300 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo lorem, gravida vel
            tristique nec, tempor a urna. Suspendisse scelerisque finibus sapien.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaCloud className="text-red-500 text-3xl mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Cloud Security</h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaDatabase className="text-red-500 text-3xl mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Data Security</h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaFolder className="text-red-500 text-3xl mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Connectivity</h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={visionImage}
            alt="Team working together"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
