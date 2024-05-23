import React, { useState } from "react";
import data from "./data";
import Tours from './Components/Tours';


const App = () => {
  const [tour, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tour.filter(tour => tour.id !== id)
    console.log(id);
    setTour(newTour);
  }


  if (tour.length === 0) {
    return (
      <div className="refresh">
          <h2>no tour left</h2>
          <button className="refreshBtn" onClick={() => setTour(data)}>
              Refresh
          </button>
      </div>
    )
  }

  return (
    <Tours tours={tour} removeTour={removeTour} />
  )
};

export default App;
