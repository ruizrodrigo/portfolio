import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerDiv}>
            <p className={s.text}>Muchas gracias por visitar mi <span className={s.spanFooter}>Portafolio</span>, espero que le haya gustado</p>
        </div>
    )
}