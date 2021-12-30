import Item from "../item/Item.component";
import './CollectionPreview.style.scss';

function CollectionPreview({collectionTitle, collectionItems}) {
    return (  
        <div className="collection-preview">
            <h1>{collectionTitle}</h1>
            <div className="collection-items">
                {
                    collectionItems
                        .filter( collectionItem => collectionItem.id <5)
                        .map( collectionItem => (
                            <Item 
                                itemName={collectionItem.name} 
                                itemImageUrl={collectionItem.imageUrl}
                                itemPrice={collectionItem.price}
                                itemId={collectionItem.id}
                            />
                        ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;