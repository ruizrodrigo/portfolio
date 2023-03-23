import s from './Form.module.css'

export const FormContact = () => {
    return (
        <div className={s.formContainer}>
            <h1 className={s.title}>Contacto</h1>
            <form className={s.form} action="https://formsubmit.co/505aa5537049e4f25dd6972941a0d170" method="POST">
                <input className={s.input} type="text" name="name" placeholder='Nombre...' required/>
                <input className={s.input} type="email" name="email" placeholder='E-Mail...' required/>
                <input className={s.input} type="text" name="subject" placeholder='Asunto...' required/>
                <textarea className={s.input2} rows={10} name="comments" placeholder='Comentarios...' required/>
                <button className={s.formBTN} type="submit">Enviar</button>

                <input type="hidden" name="_next" value="http://localhost:3000/#contact"></input>
                <input type="hidden" name="_captcha" value="false"></input>
            </form>
        </div>
    )
}