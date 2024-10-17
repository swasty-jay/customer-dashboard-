import React from "react";
// import './UnderlineNav.css'; // Optional for additional styling

const UnderlineNav = () => {
  return (
    <ul className="nav nav-underline">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  );
};

export default UnderlineNav;
