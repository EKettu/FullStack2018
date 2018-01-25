import React from 'react';
import Persons from './components/Persons'
import Form from './components/Form'
import axios from 'axios'

//Tehtävät 2.6-2.11

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
   // console.log('constructor')
  }

  componentWillMount() {
    //console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
       // console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (!this.state.persons.find(person => person.name === personObject.name)) {
      const persons = this.state.persons.concat(personObject)

      this.setState({
        persons: persons,
        newName: '',
        newNumber: ''
      })
    }
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFiltering = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          rajaa näytettäviä <input value={this.state.filter}
            onChange={this.handleFiltering} />
        </div>
        <Form addPerson={this.addPerson}
          handlePersonChange={this.handlePersonChange} handleNumberChange={this.handleNumberChange}
          newName={this.state.newName} newNumber={this.state.newNumber}
        />
        <h2>Numerot</h2>
        <Persons persons={this.state.persons} filter={this.state.filter} />
      </div>
    )
  }
}

export default App
