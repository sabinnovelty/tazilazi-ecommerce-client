import React from 'react'
import './shop_data';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import SHOP_DATA from './shop_data';
class  HomePage extends React.Component  {
    state={
        collections:SHOP_DATA
    }

    renderShopData = ()=>{
        console.log(this.state.shop_data)
       this.state.shop_data.map( ( { title , items })=>{
           console.log('titel',title)
            return <CollectionPreview title={title} items={items}/>
        }  )
    }
  render(){
     
    return (
        <div>
            <h1>Shop Page</h1>
            {
                this.state.collections.map( ( { id , ...otherProps })=>(
                    <CollectionPreview key={id} { ...otherProps } />
                ) )
            }
        </div>
    )
  }
}

export default HomePage ;
