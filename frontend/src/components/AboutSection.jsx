import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-black py-0">
      {/* Image Background Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_69d6182e-0901-40a7-b5dc-716b1c23fbc7/artifacts/a8nl1i4t_IMG_0033.jpg"
          alt="Gym background"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <p className="text-white/80 text-lg md:text-xl mb-4">
            <span className="font-bold text-white">THE SQUARED ROOM</span> Nació con{' '}
            <span className="font-bold text-white">una idea clara</span>
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#4DD9D9] leading-tight max-w-5xl">
            cambiar la forma en la que entrenas, compites y entiendes el deporte
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
