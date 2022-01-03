import { Route, Routes } from 'react-router-dom';
import SignInAndSignUp from '../sign-in-and-sign-up/sign-in-and-sign-up.component';
import Directory from '../directory/Directory';
import ShopPage from '../shop/Shop.component';
import './Homepage.style.scss';


function Homepage() {
    
    return (
        <div className='homepage'>
            <Routes>
                <Route path="/" element={<Directory/>}/>
                <Route path="/shop" element={ <ShopPage/>}/>
                <Route path="/sign-in" element={ <SignInAndSignUp/>} />
            </Routes>
        </div>
    );
}

export default Homepage;