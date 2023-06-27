import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COMPANIES = 'companies/companies/GET_COMPANIES';
const GET_COMPANIEY_DETAILS = 'companies/companies/GET_COMPANIEY_DETAILS';

const url = {
  data: 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=36970125e475fa55fa84225ca8281f12',
};

const initialState = { companyList: [], companyDetails: {} };

// reducer
const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companyList: action.companies,
      };
    case GET_COMPANIEY_DETAILS:
      return {
        ...state,
        companyDetails: action.companies,
      };
    default:
      return state;
  }
};

// thunk
export const getCompanies = createAsyncThunk(
  GET_COMPANIES,
  async (args, { dispatch }) => {
    const response = await fetch(url.data);
    const data = await response.json();
    dispatch({ type: GET_COMPANIES, companies: data });
  },
);

export const getCompanyDetails = createAsyncThunk(
  GET_COMPANIEY_DETAILS,
  async (args, { dispatch }) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${args}?apikey=36970125e475fa55fa84225ca8281f12`,
    );
    const data = await response.json();

    dispatch({ type: GET_COMPANIEY_DETAILS, companies: data[0] });
  },
);

export default companiesReducer;
