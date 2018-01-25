import React from 'react'

const Form = ({ addPerson, handlePersonChange, handleNumberChange, newName, newNumber }) => {

    return (
        <div>
            <h2>Lisää uusi</h2>
            <form onSubmit={addPerson}>
                <div>
                    nimi: <input value={newName}
                        onChange={handlePersonChange} />
                </div>
                <div>
                    numero: <input value={newNumber}
                        onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

export default Form