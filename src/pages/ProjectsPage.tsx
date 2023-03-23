import { Carrousel } from "../components/carrousel/CarrouselComponent"
import portada1 from '../images/PortadaDogs.png'
import portada2 from '../images/PortadaSehos.png'
import portada3 from '../images/PortadaRR.png'
import skill1 from '../images/skills/expressLogo.png'
import skill2 from '../images/skills/jsLogo.png'
import skill3 from '../images/skills/logoMUI.png'
import skill4 from '../images/skills/PostgresqlLogo.png'
import skill5 from '../images/skills/reactLogo.png'
import skill6 from '../images/skills/reduxLogo.png'
import skill7 from '../images/skills/trelloLogo.png'
import skill8 from '../images/skills/typescriptLogo.png'
import skill9 from '../images/skills/cssLogo.png'
import skill10 from '../images/skills/sequelizeLogo.png'
import skill11 from '../images/skills/photoshopLogo.png'
import s from '../components/carrousel/Carrousel.module.css'

export const Projects = () => {
    const info = [
        {
            img: portada1,
            skills: [
                {
                    name: 'Node + Express',
                    href: skill1,
                    value: true
                },
                {
                    name: 'Javascript',
                    href: skill2,
                    value: true
                },
                {
                    name: 'Material UI',
                    href: skill3,
                    value: false
                },
                {
                    name: 'PostgreSQL',
                    href: skill4,
                    value: true
                },
                {
                    name: 'React',
                    href: skill5,
                    value: true
                },
                {
                    name: 'Redux',
                    href: skill6,
                    value: true
                },
                {
                    name: 'Trello',
                    href: skill7,
                    value: false
                },
                {
                    name: 'Typescript',
                    href: skill8,
                    value: false
                },
                {
                    name: 'CSS',
                    href: skill9,
                    value: true
                },
                {
                    name: 'Sequelize',
                    href: skill10,
                    value: true
                },
                {
                    name: 'Photoshop',
                    href: skill11,
                    value: false
                },
            ]
        },
        {
            img: portada2,
            skills: [
                {
                    name: 'Node + Express',
                    href: skill1,
                    value: true
                },
                {
                    name: 'Javascript',
                    href: skill2,
                    value: false
                },
                {
                    name: 'Material UI',
                    href: skill3,
                    value: true
                },
                {
                    name: 'PostgreSQL',
                    href: skill4,
                    value: true
                },
                {
                    name: 'React',
                    href: skill5,
                    value: true
                },
                {
                    name: 'Redux-thunk',
                    href: skill6,
                    value: true
                },
                {
                    name: 'Trello',
                    href: skill7,
                    value: true
                },
                {
                    name: 'Typescript',
                    href: skill8,
                    value: true
                },
                {
                    name: 'CSS',
                    href: skill9,
                    value: false
                },
                {
                    name: 'Sequelize',
                    href: skill10,
                    value: true
                },
                {
                    name: 'Photoshop',
                    href: skill11,
                    value: false
                },
            ]
        },
        {
            img: portada3,
            skills: [
                {
                    name: 'Node + Express',
                    href: skill1,
                    value: false
                },
                {
                    name: 'Javascript',
                    href: skill2,
                    value: false
                },
                {
                    name: 'Material UI',
                    href: skill3,
                    value: false
                },
                {
                    name: 'PostgreSQL',
                    href: skill4,
                    value: false
                },
                {
                    name: 'React',
                    href: skill5,
                    value: true
                },
                {
                    name: 'Redux',
                    href: skill6,
                    value: false
                },
                {
                    name: 'Trello',
                    href: skill7,
                    value: false
                },
                {
                    name: 'Typescript',
                    href: skill8,
                    value: true
                },
                {
                    name: 'CSS',
                    href: skill9,
                    value: true
                },
                {
                    name: 'Sequelize',
                    href: skill10,
                    value: false
                },
                {
                    name: 'Photoshop',
                    href: skill11,
                    value: true
                },
            ]
        },
    ]

    return (
        <> 
            <h1 className={s.title}>Proyectos</h1>
            <Carrousel info={info}/>
        </>
    )
}