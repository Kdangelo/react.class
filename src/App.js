import React, { Component } from 'react';//importaciones 1ro reac, 2do dependencias, 3ro componentes que yo creo, 4to estilos
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import { createStore } from 'redux';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
// import { store } from './store';
import './App.css';

const cities = [
  'Santiago,scl',
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br',
  'London,uk'
];

// primera parte necesaria para redux, esto va a ser nuestro store de reduce
// const store = createStore(() => {});
// const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

// const setCity = value => ({
//   type: 'setCity',
//   value})

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    }  
  }

  hadlerSelectionLocation = (city) =>{
    this.setState({city});
    console.log(`hadlerSelectionLocation ${city}`)

    // esto idealmente no debe estar dentro del componente, lo vamos a crear afuera del componente 
    // const action = {type: 'setState' , value: city}

    // store.dispatch(setCity(city));

    this.props.setCity(city);

  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
              onSelectedLocation={this.hadlerSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    city === null ? <h1>No seleccionó ciudad</h1> : <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

      /*<MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
          onSelectedLocation={this.hadlerSelectionLocation}/>
        </div>
      </MuiThemeProvider>*/
    );
  }
}

// const mapDispatchToPropsActions = () => {};
// const componentConnected = connect(null, mapDispatchToPropsActions)(App)

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App)

export default AppConnected;
