import React from 'react';
import {Link} from 'react-router-dom';

// render not found page if user tries link that doesn't work
// button redirects user back to home page
const NotFoundMenu = () => {
  return (
    <div>
      <h1>The page you're looking for doesn't exist.</h1>
      <button>
        <Link to='/'>Back</Link>
      </button>
    </div>
  );
}

export default NotFoundMenu;