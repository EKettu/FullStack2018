import React from 'react'
import ReactDOM from 'react-dom'

//Tehtävät 1.1 -1.5

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.name} {props.number}</p>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa name={props.kurssi.osat[0].nimi} number={props.kurssi.osat[0].tehtavia} />
            <Osa name={props.kurssi.osat[1].nimi} number={props.kurssi.osat[1].tehtavia} />
            <Osa name={props.kurssi.osat[2].nimi} number={props.kurssi.osat[2].tehtavia} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.kurssi.osat[0].tehtavia+ props.kurssi.osat[1].tehtavia 
            + props.kurssi.osat[2].tehtavia} tehtävää</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)