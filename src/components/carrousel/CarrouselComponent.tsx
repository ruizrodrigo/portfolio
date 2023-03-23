import { useState } from 'react'
import { CarrouselInfo} from '../../types/types'
import s from './Carrousel.module.css'
import { Info } from './InfoComponent'
import { Skills } from './Skills'

export const Carrousel = ({info}: {info: CarrouselInfo[]}) => {
    const [imgSelected, setImgSelected] = useState('img0')
    const [index, setIndex] = useState(0)

    const handleClick = (e: React.MouseEvent<HTMLImageElement>, index: number) => {
        e.preventDefault();
        setImgSelected(e.currentTarget.id)
        setIndex(index)
    }

    return (
        <div className={s.carrouselContainer}>
            <div className={s.carrouselDiv}>
                {info.map((el, i) => {
                    return (
                        <img src={el.img} alt={`img${i}`} id={`img${i}`} onClick={(e) => handleClick(e, i)} className={s.carrouselImg} key={i}/>
                    )
                })}
            </div>
            <>
                <Info selection={imgSelected}/>
            </>
            <>
                <Skills skills={info[index].skills}/>
            </>
        </div>
    )
}