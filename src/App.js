import React, { Component } from 'react';//importaciones 1ro reac, 2do dependencias, 3ro componentes que yo creo, 4to estilos
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    }  
  }

  hadlerSelectionLocation = city =>{
    this.setState({city});
    console.log(`hadlerSelectionLocation ${city}`)
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

export default App;
