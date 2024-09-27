import React from 'react';
import { Card, Row, Col } from 'antd';
import 'assets/css/StatisticCard.css'; // Fichier CSS personnalisé pour les styles
import birth from "assets/img/Birth/birth_certificate.svg";
import completed from "assets/img/Birth/procedures_completed.svg";
import progress from "assets/img/Birth/in_progress.svg";

const StatisticCard = () => {
  const statistics = [
    {
      icon: birth, // Remplace avec ton SVG
      title: 'Total Birth Certificates',
      value: '5,423',
      change: '+16% ',
      changeColor: '#34C759',
    },
    {
      icon: completed, // Remplace avec ton SVG
      title: 'Procedures Completed',
      value: '1,893',
      change: '-1% ',
      changeColor: '#FF3B30',
    },
    {
      icon: progress, // Remplace avec ton SVG
      title: 'In Progress',
      value: '189',
      change: '',
      changeColor: '',
    },
  ];

  return (
    <Card style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Row gutter={16} justify="center" align="middle">
        {statistics.map((stat, index) => (
          <Col span={8} key={index} className="stat-col">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="icon-column">
                <img src={stat.icon} alt={stat.title} className="stat-icon" />
              </div>
              
              <div className="text-column">
                <h3 style={{ margin: '10px 0', fontWeight: '600', color: '#ACACAC' }}>{stat.title}</h3>
                <h2 style={{ margin: '0 0 5px', fontWeight: '700', fontSize: '28px' }}>{stat.value}</h2>
                {stat.change && (
                  <p style={{ margin: 0, color: stat.changeColor, fontWeight: '700' }}>
                    {stat.change} <span style={{color: '#000000', fontWeight: '100' }}>this month</span>
                  </p>
                )}
              </div>
              <div className="separator"></div>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default StatisticCard;
