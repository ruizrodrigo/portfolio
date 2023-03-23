import s from './Carrousel.module.css'

export const Info = ({selection}: {selection:string}) => {
    return (
        <div className={s.divInfo}>
            {selection === 'img0' &&
            <>
                <h3>Proyecto Individual Dogs</h3>
                <h5>Henry Bootcamp (27/05/22 - 16/06/22) <a className={s.anchor} href='https://github.com/ruizrodrigo/PI-Henry-dogs' target='_blank' rel='noreferrer'>repositorio</a></h5>
                <p>Aplicación web realizada como proyecto individual que consume una API externa
                Principales funcionalidades: LandingPage, Listado de tarjetas con paginado interactivo, Detalles extras, Filtros y ordenamientos, Búsqueda y Formulario de creación</p>
            </>
            }
            {selection === 'img1' &&
            <>
                <h3>Proyecto Grupal Sehos</h3>
                <h5>Henry Bootcamp (19/08/22 - 29/09/22) <a className={s.anchor} href='https://github.com/ruizrodrigo/PI-Henry-dogs' target='_blank' rel='noreferrer'>repositorio</a></h5>
                <p>Aplicación web realizada como proyecto final del bootcamp SoyHenry que resuelve la necesidad de una empresa para la administración de las ventas de su comercio y la gestión de sus productos de forma online. 
                Estuve relacionado de forma fullstack, aunque con mayor presencia en el sector frontend.
                Principales funcionalidades: LandingPage, Login/Register, Mailing, Listado de productos, Filtros y ordenamientos, Búsqueda, Panel de usuario, Carrito, Pasarela de Pago con sistema de órdenes, Favoritos, Dashboard de Admin (Sistema CRUD), Reviews, entre otros.
                De estas funcionalidades destaco mi participación en el Login/Register, Carrito de Compras, Pasarela de pago y favoritos, además de la presentación final del proyecto frente a los correctores</p>
            </>
            }
            {selection === 'img2' &&
            <>
                <h3>Proyecto RR</h3>
                <h5>Freelance (1/2023)</h5>
                <p>Aplicación web realizada como proyecto freelance para una fábrica como método de descarga de listas y catálogos, buscando la solución a la tarea de enviar las listas a los clientes cada vez que hay un cambio. La misma consta de una landing page con inicio de sesion que redirige (una vez logueado) a la sección de información donde se encuentran los datos de contacto, ubicación (por google maps) y horarios. Además, dispone de otra sección para descargas, donde se pueden realizar de forma individual o conjunta.</p>
            </>
            }
        </div>
    )
}