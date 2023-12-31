import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../redux/companies/companiesReducer';
import '../styles/HomepageList.css';
import HomepageItem from './HomepageItem';

const HomepageList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { companyList } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <div className="context">
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Company"
          value={search}
        />
      </div>

      <div className="container">
        {companyList
          .filter((company) => {
            if (search === '') {
              return company;
            }
            if (company.symbol.toLowerCase().includes(search.toLowerCase())) {
              return company;
            }
            return null;
          })
          .map((company, index) => (
            <div
              key={company.symbol}
              onClick={() => navigate(`/details/${company.symbol}`)}
              className={`company-card ${
                index % 4 === 1 || index % 4 === 2 ? 'background' : ''
              }`}
              aria-hidden="true"
            >
              <HomepageItem title={company.symbol} index={index} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomepageList;
