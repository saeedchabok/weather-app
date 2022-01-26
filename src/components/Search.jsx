import React, { useState, useContext, useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { WeatherContext } from '../WeatherContext';
import Show from './Show';

const Search = () => {
  const { Weather, setWeather } = useContext(WeatherContext)
  const [city, setCity] = useState('')
  const api = {
    API_KEY: "c938d067ade1d4bcd0a71e8ca78cce03",
    BASE_URL: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (evt) => {

    if (evt.target.value !== '') {
      if (evt.key === "Enter") {

        fetch(
          `${api.BASE_URL}weather?q=${city}&units=metric&APPID=${api.API_KEY}&lang='de'`
        )
          .then((response) => response.json())
          .then((result) => {
            setWeather(result);
            console.log('result', result);
            setCity('')
          });
      }
    }
  };

  return (

    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="City"
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </InputGroup>
      <Show />
    </>
  )
};

export default Search;
