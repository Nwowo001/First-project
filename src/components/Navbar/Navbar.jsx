import './Navbar.css';
import logo from '../../assets/seedfi.svg';
import Button from '../Button/button';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <a href='#Home'><img src={logo} alt='Seedfi Logo'/></a>
           </div>
      <ul className='nav-menu'>
        <li className='nav-items'><a href='/Home' className='links'>Home</a></li >
        <li className='nav-items'><a href='/About' className='links'>About</a></li >
        <li className='nav-items'><a href='/Products' className='links'>Products</a></li >
        <li className='nav-items'><a href='/Blog' className='links'>Blog</a></li >
        <li className='nav-items'><a href='/Contacts'className='links'>Contact</a></li >
        <li className='nav-items'><a href='FAQ' className='links'>FAQ</a></li>
        
      </ul>
      <div className='nav-button'>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
