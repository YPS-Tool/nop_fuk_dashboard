import React from 'react';
import CompanyList from '../components/CompanyList';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <main style={{ padding: '1rem' }}>
        <CompanyList />
      </main>
    </div>
  );
};

export default Home;
