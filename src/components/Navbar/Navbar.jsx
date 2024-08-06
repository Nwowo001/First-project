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
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Products'>Products</a></li>
        <li><a href='#Blog'>Blog</a></li>
        <li><a href='#Contacts'>Contact</a></li>
        <li><a href='#FAQ'>FAQ</a></li>
        
      </ul>
      <div className='nav-button'>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
