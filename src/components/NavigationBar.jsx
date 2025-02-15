import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>ホーム</Link>
      {/* 今後他のナビゲーションリンクを追加可能 */}
    </nav>
  );
};

export default NavigationBar;
