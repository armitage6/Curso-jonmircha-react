import { useEffect, useState } from 'react'

const ScrollHooks = () => {

    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState('Jon')


    useEffect(() => {
        console.log('Moviendo el scroll')

        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        }

        window.addEventListener('scroll', detectarScroll);

        return () => {
            console.log('Fase de Desmontaje')
            window.removeEventListener('scroll', detectarScroll);

        }
    }, [scrollY]);

    useEffect(() => {
        console.log('Fase de Montaje')
    }, [])

    useEffect(() => {
        console.log('Fase de Actualizacion')
    })

    useEffect(() => {




        return () => {
            console.log('Fase de Desmontaje')
        }
    })



    return (
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida </h2>
            <p>ScrollY Del Navegador {scrollY} px</p>
        </>
    )
}

export default ScrollHooks
