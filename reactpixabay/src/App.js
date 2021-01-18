import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es 1, ya no ir hacia atras
    if(pagina === 1) return null;

    // Sumar uno a la pagina actual
    pagina -= 1;

    // Agregar el cambio al state
    this.setState({
        pagina
    }, () => {

      this.consultarApi();
      this.scroll();

  });

    //console.log(pagina);


     //console.log('anterior...');
  }

  paginaSiguiente = () => {
      // Leer el state de la pagina actual
      let pagina = this.state.pagina;

      // Sumar uno a la pagina actual
      pagina += 1;

      // Agregar el cambio al state
      this.setState({
          pagina
          
      }, () => {

          this.consultarApi();
          this.scroll();

      });

      //console.log(pagina);

    //console.log('siguiente...');
  }

  consultarApi = () => {

     const termino = this.state.termino;
     const pagina = this.state.pagina;
     const url = `https://pixabay.com/api/?key=16330767-4b895adefa39233bbcf2ccb48&q=${termino}&per_page=30&page=${pagina}`;

     console.log(url);
     fetch(url)
     .then(respuesta => respuesta.json())
     .then(resultado => this.setState({ imagenes : resultado.hits }))
     //.then(resultado => console.log(resultado.hits))
  }

  datosBusqueda = ( termino ) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
       this.consultarApi();
    })
  }

  render() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>

        <Buscador 
           datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div className="row justify-content-center">
           <Resultado 
               imagenes={this.state.imagenes}
               paginaAnterior={this.paginaAnterior}
               paginaSiguiente={this.paginaSiguiente}
           />
      </div>
      
    </div>
  );
 }
}


export default App;
