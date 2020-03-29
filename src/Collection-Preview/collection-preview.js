import React from 'react';
import './collection-preview.styles.css'
import CollectionItem from '../Collection-Item/collection-item.js'
const collectionPreview = ({title,items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items.filter((item)=> item.id%4<=4).map(({id,...otherProps}) => (
          <CollectionItem key={id}{...otherProps} />
        ))}
      </div>
      
     </div>

  )
}
export default collectionPreview;