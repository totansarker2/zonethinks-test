import woman from "../../../assets/png/woman-in-virtual-reality-1.png";
const Hero = () => {
  return (
    <section className="text-center px-4 top-0 w-full ">
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
          We are at the forefront of <br /> technology
        </h1>
        {/* <button className="mt-4 px-6 py-3 bg-white text-black font-semibold border hover:bg-gray-100 transition rounded">
          Get Started
        </button> */}

        <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 cursor-pointer mt-16 rounded-sm">
          <span class="relative z-10">Get Started</span>
        </button>
      </div>
      {/* <div className="absolute top-[100%] left-1/2 -translate-x-[50%]"> */}
      <div className="">
        <img src={woman} alt="Hero" className="mx-auto rounded-lg" />
      </div>
    </section>
  );
};
export default Hero;
