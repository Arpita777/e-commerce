import React from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../component/Collection-Preview/collection-preview'
class shopPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      collections : SHOP_DATA
    }
  }
   render(){
     return(
       <div className = 'shop-preview'>
        {
          this.state.collections.map(({id,...otherProps})=>(
            <CollectionPreview key={id} {...otherProps}/>
          ))
        }
       </div>
       
      
     )
   }
 }
 export default shopPage;