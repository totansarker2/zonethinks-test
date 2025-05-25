import { FaUserFriends, FaDatabase, FaHeadset, FaChartPie, FaCheck } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className=" h-[100vh] flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <FaUserFriends className="text-red-400 text-4xl mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-gray-300 text-sm">Cras leo lorem, gravida vel tristique nec, tempor a urna.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <FaDatabase className="text-red-400 text-4xl mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Data Driven</h3>
            <p className="text-gray-300 text-sm">Cras leo lorem, gravida vel tristique nec, tempor a urna.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <FaHeadset className="text-red-400 text-4xl mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Tech Support</h3>
            <p className="text-gray-300 text-sm">Cras leo lorem, gravida vel tristique nec, tempor a urna.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <FaChartPie className="text-red-400 text-4xl mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Market Analysis</h3>
            <p className="text-gray-300 text-sm">Cras leo lorem, gravida vel tristique nec, tempor a urna.</p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-red-300 tracking-widest font-semibold mb-2">WHY US</p>
          <h2 className="text-4xl font-extrabold text-white mb-6">Best Service You Can Get</h2>
          <p className="text-white/90 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo lorem, gravida vel
            tristique nec, tempor a urna. Suspendisse scelerisque finibus sapien, quis posuere lacus
            tincidunt ut.
          </p>

          <div className="grid grid-cols-2 gap-4 text-white text-sm">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Praesent mauris orci
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Ullamcorper vel purus
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Lacinia bibendum
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Nam suscipit magna
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Rhoncus purus congue
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Sed tincidunt dictum
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Vivamus at nisl
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-orange-400" /> Vestibulum a nulla
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;