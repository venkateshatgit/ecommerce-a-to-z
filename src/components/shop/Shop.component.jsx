import {useState} from 'react';
import SHOP_Data from './shop_data';
import './shop.style.scss'
import CollectionPreview from '../collection-preview/CollectionPreview.component';

function ShopPage() {

    const [collections, setCollections] = useState(SHOP_Data)

    return (  
        <div className='shop-page'>
            <h1>Collections</h1>
            <div className="collections">
                {
                    collections.map( collection => (
                        <CollectionPreview 
                            key={collection.id} 
                            collectionTitle={collection.title} 
                            collectionItems={collection.items}/>
                    ) )
                }
            </div>
        </div>
    );
}

export default ShopPage;