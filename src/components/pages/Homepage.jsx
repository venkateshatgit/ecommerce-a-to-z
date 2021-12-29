import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Directory from '../directory/Directory';
import ShopPage from '../shop/Shop.component';
import './Homepage.style.scss';


function Homepage() {
    return (
        <div className='homepage'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Directory/>}/>
                    <Route path="/shop" element={ <ShopPage/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default Homepage;