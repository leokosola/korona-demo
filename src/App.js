import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
// import { LineChart, Line } from 'recharts';

const App = () => {
  const [tests, setTests] = useState([])

  const baseUrl = "https://plus.yle.fi/lambda_sheets/korona/2020-04-test-amounts-cumulative/data.json"

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setTests(response.data.data)
      })
  }, [])
  console.log(tests[21])
  
  
  
  return (
    <div>
      <h1>Positiivisten koronatestien osuus on yhä alle kaksi prosenttia</h1>
      {tests.filter(d => d.shp === "Kaikki sairaanhoitopiirit").map(d => 
        <p><b>{d.date}</b> Suomessa tehtiin <b>{d.new}</b> uutta testiä, joista oli positiivisia <b>{d.positivetests}</b>.</p>
      )}
    </div>
  );
}

export default App;



// https://plus.yle.fi/lambda_sheets/korona/2020-04-municipalities-infections-cumulative/data.json
// https://plus.yle.fi/lambda_sheets/korona/2020-04-test-amounts-cumulative/data.json
// https://plus.yle.fi/lambda_sheets/korona/2021-01-korona_ikaryhma/data.json
// https://plus.yle.fi/lambda_sheets/korona/2021-01-korona_sukupuoli/data.json


/* <LineChart width={600} height={400} data={filtered}>
<Line type="monotone" dataKey="infections" stroke="#0000ff" />
</LineChart> */

  // console.log(tests.filter(c => c.shp === "Ahvenanmaa").map(d => d.cumulative))


  // const numbers = [
  //   {
  //   area: 'Espoo',
  //   cumulative: '80',
  //   new: '2'
  //   },
  //   {
  //   area: 'Vantaa',
  //   cumulative: '180',
  //   new: '25'
  //   },
  //   {
  //   area: 'Turku',
  //   cumulative: '50',
  //   new: '4'
  //   },
  //   {
  //   area: 'Raisio',
  //   cumulative: '..',
  //   new: '0'
  //   }
  // ]

  // const cleanData = numbers.filter(d => d.cumulative !== "..")

  // const sortNumbers = (a, b) => { return b.cumulative - a.cumulative}
  // // const sorted = cleanData.sort(sortNumbers)
  // console.log(cleanData)

  // {sorted.map(d => 
  //   <p key={d.area}>{d.area} // {d.perhundredthousand} // {d.cumulative} </p>
  //   )}


  // const filterDate = tests.filter(d => d.date === "15.1.2021")
  
  // const removeEmpties = filterDate.filter(d => d.cumulative !== "..")

  // const sorted = removeEmpties.sort(function (a, b) {
  //   return b.cumulative - a.cumulative;
  // });
