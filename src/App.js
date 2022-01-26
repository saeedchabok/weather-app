import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './App.css'
import Search from './components/Search';
import { WeatherContext } from './WeatherContext';

const App = () => {
  const [Weather, setWeather] = useState([]);
  const weathers = { Weather, setWeather };
  return (
    <WeatherContext.Provider value={weathers}>
      <Container>
        <Card style={{ width: '25rem' }}>
          <br />
          <Search />
        </Card>
      </Container>
    </WeatherContext.Provider>
  )
};

export default App;

