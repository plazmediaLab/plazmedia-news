import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Noticia = ({noticia}) => {

  const {urlToImage, title, description, url, source} = noticia;

  return (
    <Fragment>
      <div className="card">
        <div className="card-img">
          <img src={urlToImage} alt={urlToImage}/>
          <p className="card-img-tag">{source.name}</p>
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <a href={url} className="card-link">Leer más <i className="a-link-strong af-m"></i></a>
        </div>
      </div>
    </Fragment>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
}

export default Noticia