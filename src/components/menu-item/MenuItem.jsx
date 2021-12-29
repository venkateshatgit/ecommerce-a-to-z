import './MenuItem.style.scss';

function MenuItem({title,  imgUrl}) {
    return (

        <div className="menu-item" >

            <div className="background-img"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            >
            </div>

            <div className="content-item">
                <h1>{title.toUpperCase()}</h1>
                <p>Buy Now</p>
            </div>
        </div>
    );
}

export default MenuItem;