import ItemPreview from "../item-preview/item-preview.component";
import './collection-preview.style.scss'

function CollectionPreview({title, itemList, id}) {
    return (  
        <div key={id} className="collection-preview">
            <h1>{title}</h1>
            <div className="collection-preview-list">
                    {
                        itemList
                            .filter(item => item.id<5)
                            .map( item => (
                                <ItemPreview 
                                    key={item.id}
                                    name={item.name} 
                                    imgUrl={item.imgUrl}
                                    price={item.price}
                                />
                            ))
                    }
                
            </div>
        </div>
    );
}

export default CollectionPreview;