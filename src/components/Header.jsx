import logo from '../assets/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
    return (
        <header className='absolute w-full px-6 pt-8 flex place-content-between font-Barlow'>
            <img src={logo} alt="" />
            <NavBar/>
        </header>
    )
}