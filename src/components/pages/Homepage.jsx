import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Directory from '../directory/Directory';
import ShopPage from '../shop/Shop.component';
import './Homepage.style.scss';


function Homepage() {
    return (
        <div className='homepage'>
            <Routes>
                <Route path="/" element={<Directory/>}/>
                <Route path="/shop" element={ <ShopPage/>}/>
            </Routes>
        </div>
    );
}

export default Homepage;