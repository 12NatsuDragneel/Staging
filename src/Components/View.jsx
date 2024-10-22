import React from 'react';

function View({ takeSup, takeH1 }) { // Use curly braces for destructuring props and correct parameter names
  return (
    <div>
      <div className="Meet1">
        <sup>{takeSup}</sup>
        <h1>{takeH1}</h1>
        <a href="#Hero">View All</a>
      </div>
    </div>
  );
}

export default View;
