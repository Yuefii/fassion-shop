import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-500 to-cyan-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
            Winter Sale
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-semibold">
            GET 70% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/Banner.png"
            alt="Banner"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
