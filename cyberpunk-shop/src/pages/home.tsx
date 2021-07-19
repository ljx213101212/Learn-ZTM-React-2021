import React from 'react';
import './homepage.styles.scss';
import Directory from '../components/directory';
import { sections } from '../test/directory.data';

const Home = () => {
  return (
    <div className="homepage">
      <Directory menus={sections}></Directory>
    </div>
  );
};
export default Home;
