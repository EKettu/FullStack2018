import React from 'react'
import Osa from './Osa'


const Yhteensa = ({ kurssi }) => {
    return (
        <p>yhteensä {kurssi.osat.reduce((acc, cur) => {
            acc += cur.tehtavia
            return acc
        }, 0)} tehtävää</p>
    )
}

const Sisalto = ({ kurssi }) => {
    return (
        <div>
            <h1>{kurssi.nimi}</h1>
            {kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}



export default Sisalto