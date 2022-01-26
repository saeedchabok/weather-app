import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import { Card } from 'react-bootstrap';

const Show = () => {
  const { Weather, setWeather } = useContext(WeatherContext)
  console.log(Weather);
  return (
    <div>

      {Weather.length !== 0
        ?
        <Card style={{ width: '21rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
          <Card.Body>
            <Card.Title>{Weather.name}&nbsp;/&nbsp;{Weather.sys.country} </Card.Title>
            <Card.Text>{Weather.main.temp}</Card.Text>
            <Card.Text>{Weather.main.feels_like}</Card.Text>
            <Card.Text>{Weather.wind.speed}</Card.Text>
          </Card.Body>
        </Card>
        :
        <h4>Please insert a city name</h4>
      }
    </div>
  )
};

export default Show 
