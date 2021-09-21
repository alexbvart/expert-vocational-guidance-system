import Link from 'next/link'
import {header,navbar_item} from './header.module.css'
const Header = () => {
    return (
        <>
            <nav className={header}>
                    <div className="">
                            <Link href="/">
                                <a className={navbar_item}>
                                Test vocacional
                                </a>
                            </Link>
                </div>
                <div className="">
                            <Link href="/register">
                                <a className={navbar_item}>
                                    Registrarme
                                </a>
                            </Link>
                            <Link href="/login">
                                <a className={navbar_item}>Iniciar Sesión</a>
                            </Link>
                </div>
            </nav>
        </>
    );
}
export default Header;