import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

import { BsChevronLeft, BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <div onClick={() => navigate('/')} aria-hidden="true">
        <BsChevronLeft className="icon-white" />
      </div>
      <h2 className="heading">Companies</h2>
      <div className="position">
        <BsFillMicFill className="icon-white" />
        <AiOutlineSetting className="icon-white" />
      </div>
    </div>
  );
};

export default Navbar;
