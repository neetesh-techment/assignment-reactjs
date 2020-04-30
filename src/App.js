import React from 'react';

const API_KEY = 'XQwNWMtBfoKitMkWCbBh2wDdM0V6nYCudfkMQ2qU'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
      asteroidInputVal: '',
      name: '',
      nasaJplUrl: '',
      isPotentiallyHazardousAsteroid: ''
    }
  }

  changeValue(evt){
    this.setState({asteroidInputVal: evt.target.value})

    if(evt.target.value.length > 0){
      this.setState({bool: false})
    }else{
      this.setState({bool: true})
    }
  }

  handleSubmit(){
    let url = `https://api.nasa.gov/neo/rest/v1/neo/` + this.state.asteroidInputVal + `?api_key=`+ API_KEY
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            name: result.name,
            nasaJplUrl: result.nasa_jpl_url,
            isPotentiallyHazardousAsteroid: result.is_potentially_hazardous_asteroid
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <input type='text'
               value={this.state.asteroidInputVal}
               placeholder="Enter Asteroid ID"
               onChange={inputValue => this.changeValue(inputValue)} />
        <button onClick={() => this.handleSubmit()} disabled={this.state.bool}>Submit</button>
        <button >Random Asteroid</button>

        <div>
          <p>Name: {this.state.name}</p>
          <p>Nasa Jpl URL: {this.state.nasaJplUrl}</p>
          <p>Is Potentially Hazardous Asteroid: {this.state.isPotentiallyHazardousAsteroid}</p>
        </div>
      </div>
    );
  }
}

export default App;
