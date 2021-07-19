import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) => {
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};
export default MenuItem;
