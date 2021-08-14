import React, { FC, ReactElement } from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory';
import QixiCard from '../../components/qixi-card/qixi-card';

const Home: FC<void> = (): ReactElement => {
  return (
    <div className="homepage">
      <Directory />
      <QixiCard />
    </div>
  );
};
export default Home;
