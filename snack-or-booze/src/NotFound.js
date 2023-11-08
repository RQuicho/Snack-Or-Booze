import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>The page you're looking for doesn't exist.</h1>
      <button>
        <Link to='/'>Home</Link>
      </button>
    </div>
  );
}

export default NotFound;