import React from "react";

import Semaforo from "./Semaforo.jsx";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mt-5">Mi Semáforo en React 🚦</h1>
      <Semaforo />
    </div>
  );
};

export default Home;