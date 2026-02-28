import './Nav_bar.css'
import logo from '/Users/Nicolas/Desktop/apice1.png'

function Nav_bar() {
    return(
        <nav className='nav_principal'>
            <img className='img_nav' src={logo} alt="" />
            <h1 className='h1_nav'>Apíce</h1>
            <ul className='lista_nav'>
                <li className='li_nav'><a className='a_nav' href="#">Productos</a></li>
                <li className='li_nav'><a className='a_nav' href="#">Compras</a></li>
            </ul>        
        </nav>
    );
}
export default Nav_bar