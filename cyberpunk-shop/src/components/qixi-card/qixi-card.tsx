import React, { FC, ReactElement } from 'react';
import './qixi-card.styles.scss';

const QixiCard: FC<any> = ({ cardName, cardDate }): ReactElement => (
  <div className="card">
    <div className="envelope"></div>
    <h1>{cardName}</h1>
    <div className="date">{cardDate}</div>
  </div>
);

export default QixiCard;
