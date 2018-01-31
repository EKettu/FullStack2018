import React from 'react';
import Persons from './components/Persons'
import Form from './components/Form'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

//Tehtävät 2.6-2.11 ja 2.14-2.19

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: null
    }
    // console.log('constructor')
  }

  componentWillMount() {
    // console.log('will mount')
    personService
      .getAll()
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
      personService
        .create(personObject)
        .then(response => {
          console.log(response.data)
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: '',
            newNumber: '',
            notification: 'lisättiiin ' + personObject.name
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
    }
    else {
      this.changeNumber(personObject)
    }
  }

  deletePerson = (id, personObject) => {
    if (window.confirm('Poistetaanko ' + personObject.name + '?')) {
      personService
        .deletePerson(id, personObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.filter(person => person.id !== id),
            notification: 'poistettiin ' + personObject.name
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
    }
  }

  changeNumber = (personObject) => {
    const person = this.state.persons.find(person => person.name === personObject.name)
    const id = person.id
    if (window.confirm(person.name + ' on jo luettelossa, korvataanko vanha numero uudella?')) {

      const changedPerson = { ...person, number: this.state.newNumber }
      personService
        .update(id, changedPerson)
        .then(response => {
          const persons = this.state.persons.filter(person => person.id !== id)
          this.setState({
            persons: persons.concat(changedPerson),
            newName: '',
            newNumber: '',
            notification: 'henkilön ' + changedPerson.name + ' numero vaihdettu'
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
        .catch(error => {
          alert(`henkilö '${person.name}' on jo valitettavasti poistettu palvelimelta`)
          this.setState({ persons: this.state.persons.filter(person => person.id !== id) })
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
        <Notification message={this.state.notification} />
        <div>
          rajaa näytettäviä <input value={this.state.filter}
            onChange={this.handleFiltering} />
        </div>
        <Form addPerson={this.addPerson}
          handlePersonChange={this.handlePersonChange} handleNumberChange={this.handleNumberChange}
          newName={this.state.newName} newNumber={this.state.newNumber}
        />
        <h2>Numerot</h2>
        <Persons persons={this.state.persons} filter={this.state.filter} deletePerson={this.deletePerson} />
      </div>
    )
  }
}

export default App
