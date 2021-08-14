import React, { FC, ReactElement } from 'react';
import './qixi-card.styles.scss';

const QixiCard: FC<any> = (): ReactElement => (
  <div className="card">
    <div className="envelope"></div>
    <h1>
      胖虎 <em>❤️</em> 🎵
    </h1>
    <div className="date">2021/08/14</div>
  </div>
);

export default QixiCard;
