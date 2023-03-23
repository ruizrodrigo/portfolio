import s from './Description.module.css'
import photo from '../../images/Rodri ByN.png'
import photo2 from '../../images/Rodri ByN2.png'
import { useEffect, useState } from 'react'
import { downloaderFunct } from '../../utils'

export const Description = () => {
    const [currentPhoto, setCurrentPhoto] = useState(window.innerWidth < 720 ? photo2 : photo)
    
    useEffect(() => {
        window.onresize = () => {
            const width = window.innerWidth
            width < 720 ? 
            setCurrentPhoto(photo2) : setCurrentPhoto(photo)
        }
    }, [currentPhoto])

    return (
        <div className={s.description}>
            <div className={s.titleDiv}>
                <h1 className={s.title}>Sobre Mí</h1>
            </div>
            <div className={s.containerInfo}>
                <div className={s.descriptionText}>
                    <p className={s.text}>
                        Nacido en Buenos Aires, Argentina, me considero un apasionado por la tecnología que incursiona en el mundo de la programación, comenzando de forma autodidacta aprendiendo Angular y NodeJs en el año 2021. Al poco tiempo, decidí comenzar un bootcamp con muchas oportunidades de aprendizaje para acelerar mi progreso en este mundo tecnológico convirtiéndome en fullstack web developer en octubre del 2022 con conocimientos en React, Typescript, NodeJs, Sequelize, postgress, entre otros frameworks y librerías.
                        Mi formación academica es técnica, habiendome recibido en 2014 de electromecánico en el instituto tecnológico San Bonifacio. Ademas, tengo 2 años cursados en la UNLa en Diseño Industrial, lo cual me otorgo conocimientos en Photoshop, AutoCAD y SolidWorks.
                    </p>
                </div>
                <div className={s.containerImg}>
                    <button 
                        onClick={() => {downloaderFunct('https://drive.google.com/uc?id=13D2Rh4y8aWflsAkCRY0uliEa-QyA9Ymy&export=download', 'CV - Ruiz Rodrigo')}} 
                        className={s.downloadBTN}>Descarga mi CV
                    </button>
                    <img src={currentPhoto} alt="perfil" className={s.descriptionImg}/>
                </div>
            </div>
        </div>
    )
}