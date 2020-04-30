import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemNasaJplUrl: '',
      itemIsPotentiallyHazardousAsteroid: ''
    }
  }

  componentDidMount(){
    if(this.props.location.state !== undefined){
      this.setState({
        itemName: this.props.location.state.itemName,
        itemNasaJplUrl: this.props.location.state.itemNasaJplUrl,
        itemIsPotentiallyHazardousAsteroid: this.props.location.state.itemIsPotentiallyHazardousAsteroid
      })
    }
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.itemName}</p>
        <p>Nasa Jpl URL: {this.state.itemNasaJplUrl}</p>
        <p>Is Potentially Hazardous Asteroid: {this.state.itemIsPotentiallyHazardousAsteroid.toString()}</p>
      </div>
    );
  }
}

export default Detail;
