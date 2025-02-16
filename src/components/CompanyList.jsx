import React from 'react';
import { Link } from 'react-router-dom';
import companies from '../data/companies.json';

const CompanyList = () => {
  return (
    <div>
      <h2>福岡の100社一覧ver2</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {/* 会社名をクリックすると詳細ページに遷移 */}
            <Link to={`/company/${company.id}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
