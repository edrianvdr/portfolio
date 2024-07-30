import React from 'react';
import PropTypes from 'prop-types';

function NavLink({ href, accesskey, value }) {
  return (
    <a 
      href={href}
      className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300"
      accessKey={accesskey}
    >
      {value}
    </a>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  accesskey: PropTypes.string,

};

export default NavLink;