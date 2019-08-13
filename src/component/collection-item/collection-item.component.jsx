import React from 'react';
import './collection-item.style.scss';
import CustomeButton from '../custome-button/custome-button.component';


export default function CollectionItem( item ) {
    const { name , imageUrl ,price} = item;
    console.log('item',item)
    return (
        <div className="collection-item">
           <div 
           className="image"
           style={{
               backgroundImage:`url(${imageUrl})`,
           }}
           />
           <div className="item-footer">
                <p>{ name.toUpperCase() }</p>
                <p>${price}</p>
           </div>
           <CustomeButton inverted>Add to Cart</CustomeButton>
        </div>
    )
}
