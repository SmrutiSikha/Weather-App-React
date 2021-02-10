import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,FormControl,Button} from 'react-bootstrap';

function Weather() {
    const api = {api_key:'ad0d0fa197f94831081362f9e874c5d5',base:'https://api.openweathermap.org/data/2.5/'}
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = (q) => {
          console.log(q);
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.api_key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery("");
                console.log(result);
            });
    };
    return (
        <div>
            {/* <input type="text" onChange={e => setQuery(e.target.value)} value={query}></input>
            <button onClick={() => search({query})}>Search</button> */}
            <Card>
                <div className="mt-5 mb-2">
                    <FormControl type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder="Search" className="mr-sm-2" />
                </div>
                <div className="text-center">
                    <Button onClick={() => search({query})}>Search</Button>
                </div>
                <div className="mt-5 text-center mb-5">
                    <Card.Body>This is some text within a card body.</Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default Weather
