import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import Tahin from "../../assets/images/Tahin.jpg";
import Sajib from "../../assets/images/Sajib.jpg";
import Emon from "../../assets/images/Emon.jpg";
const team = [
  {
    name: "Tahin",
    role: "Analyst",
    img: Tahin,
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaPinterestP />, link: "#" },
    ],
  },
  {
    name: "Sajib",
    role: "Designer",
    img: Sajib,
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaPinterestP />, link: "#" },
    ],
  },
  {
    name: "Emon",
    role: "Designer",
    img: Emon,
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaPinterestP />, link: "#" },
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white  h-[100vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-red-500 uppercase tracking-widest text-sm mb-2">
          Team
        </p>
        <h2 className="text-4xl font-bold mb-4">Meet Our Expert</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo
          lorem, gravida vel tristique nec, tempor a urna. Suspendisse
          scelerisque finibus sapien, quis posuere lacus tincidunt ut.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <img
                src={member.img}
                alt={member.name || `Team member ${idx + 1}`}
                className="w-full"
              />
              {/* Only show hover effect for member with info */}
              {member.name && (
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    {member.socials.map((social, sIdx) => (
                      <a
                        key={sIdx}
                        href={social.link}
                        className="w-10 h-10 flex items-center justify-center bg-black border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
