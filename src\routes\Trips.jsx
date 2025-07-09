import React from 'react';
import Card from '../components/Card';

const Trips = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Trips</h1>
      <div className="flex flex-wrap -mx-4">
        <Card
          title="Trip to Paris"
          description="Explore the city of love and romance"
          image="https://picsum.photos/200/300"
        />
        <Card
          title="Trip to Tokyo"
          description="Experience the vibrant city of Tokyo"
          image="https://picsum.photos/200/301"
        />
        <Card
          title="Trip to New York"
          description="Discover the city that never sleeps"
          image="https://picsum.photos/200/302"
        />
      </div>
    </div>
  );
};

export default Trips;