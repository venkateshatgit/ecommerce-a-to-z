import './Item.style.scss'

function Item({itemName, itemImageUrl, itemPrice, itemId}) {
    return (
          <div className="item">
              <div 
                className="itemImage"
                style={{
                    backgroundImage: `url(${itemImageUrl})`
                }}
                >
              </div>
              <div className="item-info">
                  <div className='item-info2'>
                    <h3>{itemName}</h3>
                    <h3>${itemPrice}</h3>
                  </div>
              </div>
          </div>
    );
}

export default Item;