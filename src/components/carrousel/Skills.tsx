import { Skill } from "../../types/types";
import {useState} from 'react'
import s from './Carrousel.module.css'

export const Skills = ({skills}: {skills: Skill[]}) => {
    const [index, setIndex] = useState<number | null>(null)

    const handleMouse = (index: number) => {
        setIndex(index)
    }
    
    return (
        <div className={s.skillsDiv}>
            <div className={s.skillsContainer}>
                {skills.map((skill, i) => {
                    return (
                        skill.value && 
                            <img src={skill.href} alt={skill.name} onMouseOver={() => handleMouse(i)} onMouseLeave={() => setIndex(null)}  className={s.skillImg}/>
                            )
                        })}
            </div>
            <div className={s.skillSpan}>
                {index !== null && <span className={s.tooltip}>{skills[index].name}</span>}
            </div>
        </div>
    )
}