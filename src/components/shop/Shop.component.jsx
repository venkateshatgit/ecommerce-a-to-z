import {useState} from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import SHOP_Data from './shop_data';
import './shop.style.scss'

function ShopPage() {

    const [collection, setCollection] = useState(SHOP_Data)

    return (  
        <div className='shop'>
            <h1>Shop</h1>
            <div className='shop-list'>
                {
                    collection.map( item => (
                        <CollectionPreview key={item.id}  title={item.title} itemList={item.items} id={item.id}/>
                    ))
                }
            </div>
           
        </div>
    );
}

export default ShopPage;

                // SHOP_Data.map( item => (
                //     <>
                //         <h1>{item.title}</h1>
                //         {item.items
                //         .filter( x => x.id <=4 )
                //         .map( element =>(
                //             <p>{element.name}</p>
                //         ))}
                        
                //     </>
                    
                // ))