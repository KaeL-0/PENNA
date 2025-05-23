import '../css/navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    let isSignIn = true;
    return (
        <nav>
            <span className='navBrand'>PENNA</span>
            { isSignIn ?
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/editor'>New Article</NavLink></li>
                    <li><NavLink to='settings'>Settings</NavLink></li>
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                </ul> :
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='login'>Sign in</NavLink></li>
                    <li><NavLink to='register'>Sign up</NavLink></li>
                </ul>
            }
        </nav>
        
    )
}