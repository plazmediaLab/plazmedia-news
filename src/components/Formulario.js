import React, { Fragment } from 'react';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';



const Formulario = ( { guardarCategoria } ) => {

  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertainment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnología'}
  ]

  const [categoria, SelectCategoria] = useSelect('general', OPCIONES); 

  const submitFormulario = (e) => {
    e.preventDefault();
    
    // Mandar categoría al componente APP
    guardarCategoria(categoria);
  };

  return (
    <Fragment>
      <h2 className="txt-brand-2"><i className="a-rocket af-m"></i>&nbsp; Encuentra noticias por categoría</h2>
      <form 
        onSubmit={submitFormulario}
      >
        <hr />

        <div className="pb-2">
          <SelectCategoria />
        </div>

        <button type="submit" className="btn btn-br btn-100 btn-secondary">
          Buscar <i className="a-search1 i-h-flip"></i>
        </button>

      </form>
    </Fragment>
  );
};


Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
}


export default Formulario