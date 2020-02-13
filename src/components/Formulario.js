import React, { Fragment } from 'react';
import useSelect from '../hooks/useSelect';



const Formulario = () => {

  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertaiment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnología'}
  ]

  const [categoría, SelectCategoria] = useSelect('general', OPCIONES); 

  return (
    <Fragment>
      <h2 className="txt-brand-2"><i className="a-rocket af-m"></i>&nbsp; Encuentra noticias por categoría</h2>
      <form className="">
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

export default Formulario