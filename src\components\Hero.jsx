import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-white">Travel Management System</h1>
        <p className="text-2xl text-white">Plan your next adventure with us!</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;