import React, { FC, ReactElement } from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.styles.scss';

const CollectionPreview: FC<CollectionPreviewProps> = (props): ReactElement => (
  <div className="collection-preview">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <div className="preview">
      {props.items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
