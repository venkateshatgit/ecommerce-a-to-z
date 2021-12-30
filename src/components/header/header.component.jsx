import './header.style.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/logo.svg'

function Header() {
    return (  
        <div className='header-outer'>

            <div className="header">
                <Link className="logo" to="/" >
                    <Logo/>
                </Link>

                <div className="options">
                    <Link className='option' to="/shop">
                        SHOP
                    </Link>

                    <Link className='option' to="/shop">
                        CONTACT
                    </Link>

                    <Link className='option' to="/shop">
                        ABOUT
                    </Link>
                </div>

            </div>
            
            
        </div>
    );
}

export default Header;

