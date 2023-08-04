

import PropTypes from 'prop-types'

const Propiedades = (props) => {
    return (
        <div>
            <h2>Propiedades </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero' : 'Falso'}
                </li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre + ', ' + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.ComponenteReact}</li>
            </ul>
        </div>
    )
}

export default Propiedades

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
}