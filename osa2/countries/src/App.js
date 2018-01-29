import React from 'react';
import axios from 'axios'
import Countries from './components/Countries'

//Tehtävät 2.12 ja 2.13

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
    // console.log('constructor')
  }

  componentWillMount() {
    // console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  handleFiltering = (event) => {
    this.setState({ filter: event.target.value })
  }


  selectCountry = (country) => {
    return () => {
      this.setState({ filter: country.name })
    }
  }

  render() {
    return (
      <div>
        <div>
          find countries<input value={this.state.filter}
            onChange={this.handleFiltering} />
        </div>
        <ul>
          <Countries countries={this.state.countries} filter={this.state.filter}
            selectCountry={this.selectCountry} />
        </ul>
      </div>
    );
  }
}

export default App;
