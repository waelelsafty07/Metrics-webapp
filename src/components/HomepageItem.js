import React from 'react';
import '../styles/HomepageItem.css';
// import company from '../../images/company.png';
import { BsBuildings } from 'react-icons/bs';

const HomepageItem = (props) => {
  const { title } = props;

  return (
    <div className="container" data-testid="homepageitem">
      <div className="item">
        <span className="arrow">➜</span>
        {/* <img className="icon" src={company} alt="company" /> */}
        <BsBuildings />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default HomepageItem;
