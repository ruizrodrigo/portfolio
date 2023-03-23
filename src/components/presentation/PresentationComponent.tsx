import s from './Presentation.module.css'

export const Presentation = () => {
    return (
        <div className={s.presentationDiv}>
            <p className={s.hello}>HOLA!</p>
            <p className={s.welcome}>Bienvenid@ a mi portfolio</p>
            <p className={s.iAm}>Soy</p>
            <p className={s.name}>RODRIGO RUIZ</p>
            <p className={s.degree}>Full stack web developer</p>
            <hr className={s.line}/>
        </div>
    )
}