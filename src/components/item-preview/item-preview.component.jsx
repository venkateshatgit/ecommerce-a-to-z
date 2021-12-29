import './item-preview.style.scss'

function ItemPreview({name, imgUrl, price}) {
    return (  
        <div className="item-preview">
            <div className="item-preview-background-image"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            >

            

            </div>

        </div>
    );
}

export default ItemPreview;