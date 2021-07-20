import React, { FC, ReactElement } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menuItems';

const Directory: FC<DirectoryProps> = (
  directoryProps: DirectoryProps
): ReactElement => {
  return (
    <div className="directory-menu">
      {directoryProps.menus.map(({ ...otherSectionProps }) => {
        return <MenuItem {...otherSectionProps}></MenuItem>;
      })}
    </div>
  );
};
export default Directory;
