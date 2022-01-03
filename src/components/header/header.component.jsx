import './header.style.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/logo.svg'

function Header({currentUser, auth}) {
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

                    {
                        currentUser ? (
                            <a className="option" onClick={() => auth.signOut()}>
                                SIGN OUT
                            </a>
                        ) : (
                            <Link className='option' to="/sign-in">
                                SIGN IN
                            </Link>
                        )
                    }
                </div>

            </div>
            
            
        </div>
    );
}

export default Header;

