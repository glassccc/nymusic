import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='main'>
      <Link to="/about" className='evt-link'></Link>
      <Link to="/buy" className='buy-link'></Link>
    </div>
  );
}

export default HomePage;
