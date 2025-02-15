import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import CompanyChart from '../components/CompanyChart';
import companies from '../data/companies.json';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const [chartData, setChartData] = useState(null);

  // 会社情報をcompanies.jsonから検索
  const company = companies.find((c) => String(c.id) === companyId);

  useEffect(() => {
    // ここでAPIから人数の月次推移データをフェッチする処理を書くか、
    // ダミーデータを生成するなどの処理を実装する
    // 今回はダミーデータを用意します

    const dummyData = {
      labels: ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06'],
      datasets: [
        {
          label: '従業員数',
          data: [company?.initialEmployees || 100, 110, 105, 115, 120, 125],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    };

    setChartData(dummyData);
  }, [company]);

  if (!company) {
    return (
      <div>
        <NavigationBar />
        <main style={{ padding: '1rem' }}>
          <p>指定された会社が見つかりません。</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <main style={{ padding: '1rem' }}>
        <h2>{company.name}</h2>
        <img
          src={company.logo} // 会社ロゴのパス。assets/company-logos/以下に配置する想定
          alt={`${company.name}のロゴ`}
          style={{ maxWidth: '200px' }}
        />
        {chartData ? <CompanyChart data={chartData} /> : <p>データ読み込み中...</p>}
      </main>
    </div>
  );
};

export default CompanyDetail;
