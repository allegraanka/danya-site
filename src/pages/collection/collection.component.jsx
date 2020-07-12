import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log("C O L L E C T I O N component: ", collection);
    
    const {title, items } = collection;
    
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )};

const mapStateToProps = (state, ownProps) => ({
    // runs the state through the selectCollections selector code so we get our collections array and find the right collection id from it
    // so we're actually passing the state object to the function that comes out of this function
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);