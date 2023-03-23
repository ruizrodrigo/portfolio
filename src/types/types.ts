export interface Skill {
    name: string,
    href: string,
    value: boolean,
}

export interface CarrouselInfo {
    img: string
    skills: Skill[]
}