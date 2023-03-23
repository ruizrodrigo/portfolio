import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={s.divNav}>
            <div className={s.navButtons}>
                <a className={s.buttonNav} href={'#start'}>Inicio</a>
                <a className={s.buttonNav} href={'#about'}>Sobre Mi</a>
                <a className={s.buttonNav} href={'#projects'}>Proyectos</a>
                <a className={s.buttonNav} href={'#contact'}>Contacto</a>
            </div>
        </div>
    )
}