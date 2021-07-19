import React from 'react';
import './directory.styles.scss';
import MenuItem from './menuItems';

const Directory = ({ menus }: { menus: any }) => {
  return (
    <div className="directory-menu">
      {menus.map((menu: any) => {
        return (
          <MenuItem
            title={menu.title}
            subtitle={'SHOP NOW'}
            imageUrl={menu.imageUrl}
          ></MenuItem>
        );
      })}
    </div>
  );
};
export default Directory;
