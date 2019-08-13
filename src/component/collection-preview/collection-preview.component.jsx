import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component'

export default function CollectionPreview({ title , items } ) {
    return (
        <div className="collection-preview">
            <div className="collection-preview__title">
                <h1>{ title } </h1>
            </div>
            <div className="preview">
                    {
                         items.map( ({ id , ...otherProps}) =>{
                            return <CollectionItem key={ id } {...otherProps}/>
                        })
                    }
            </div>
        </div>
    )
}
