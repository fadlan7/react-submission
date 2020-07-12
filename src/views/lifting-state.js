import React from 'react';

class ConvertInput extends React.Component{
  _handleChange = (e) =>{
    this.props.onChangeConvert(e.target.value);
  }

  render(){
    const { curLabel, convert } = this.props;

    return(
      <>
        <label>
          {curLabel === 'Kg' ? 'Kilogram: ' : 'Gram: '};
          <input type="number" value={convert} onChange={this._handleChange} />
        </label>
        <br />
      </>
    )
  }
}

class LiftingState extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kg:0,
      gram:0
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.kg} Kilogram adalah ${this.state.gram} Gram`)
  }

  onChangeKilogram = (kg) =>{
    let gram = (parseFloat(kg) * 1000).toString();
    this.setState({ kg, gram })
  }

  onChangeGram = (gram) =>{
    let kg = (parseFloat(gram) / 1000).toString();
    this.setState({ kg, gram })
  }

  render(){
    const { kg, gram } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <ConvertInput curLabel="Kg" convert={kg} onChangeConvert={this.onChangeKilogram}/>
        <ConvertInput curLabel="g"  convert={gram} onChangeConvert={this.onChangeGram}/>
        <button type="submit">Convert!</button>
      </form>
    );
  }
}

export default LiftingState;
