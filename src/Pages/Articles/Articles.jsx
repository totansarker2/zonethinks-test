import { FaRegClock, FaRegCommentDots } from "react-icons/fa";
import article_img from "../../assets/images/article1.jpg";
import article_img2 from "../../assets/images/article2.jpg";
import article_img3 from "../../assets/images/article3.jpg"; 

const articles = [
  {
    title: "Google diversity report shows increased attrition for women",
    date: "July 2, 2021",
    img: article_img,
  },
  {
    title: "Virgin Galactic aims to send Richard Branson to space",
    date: "July 2, 2021",
    img: article_img2,
  },
  {
    title: "Flying car prototype that successfully flew for 35 minutes",
    date: "July 2, 2021",
    img: article_img3,
  },
];

const ArticlesSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p className="text-red-500 uppercase tracking-widest mb-2">Articles</p>
        <h2 className="text-4xl font-extrabold">Read Our Articles</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 text-left">
              <h3 className="text-white font-bold mb-2 hover:underline cursor-pointer">
                {article.title}
              </h3>
              <div className="flex items-center text-sm text-gray-400 mb-4 gap-2">
                <FaRegClock />
                <span>{article.date}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <a
                  href="#"
                  className="text-red-500 hover:underline flex items-center gap-1"
                >
                  Read More <span>&rarr;</span>
                </a>
                <div className="flex items-center text-gray-400 gap-1">
                  <FaRegCommentDots /> <span>0</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ArticlesSection;
