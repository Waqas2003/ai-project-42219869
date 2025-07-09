import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap -mx-4">
        <Card
          title="Upcoming Trips"
          description="View your upcoming trips and itineraries"
          image="https://picsum.photos/200/300"
        />
        <Card
          title="Trip History"
          description="View your past trips and memories"
          image="https://picsum.photos/200/301"
        />
        <Card
          title="Travel Guides"
          description="Explore travel guides and recommendations"
          image="https://picsum.photos/200/302"
        />
      </div>
    </div>
  );
};

export default Dashboard;