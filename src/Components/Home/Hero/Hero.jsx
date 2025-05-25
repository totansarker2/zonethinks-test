import woman from "../../../assets/png/woman-in-virtual-reality-1.png";
const Hero = () => {
  return (
    <section className="text-center px-4 top-0 w-full">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
          We are at the forefront of <br /> technology
        </h1>
        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold border hover:bg-gray-100 transition rounded">
          Get Started
        </button>
      </div>
      {/* <div className="absolute top-[100%] left-1/2 -translate-x-[50%]"> */}
      <div className="">
        <img src={woman} alt="Hero" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};
export default Hero;
