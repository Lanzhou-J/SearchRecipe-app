import React from 'react';

class Form extends React.Component {

  onInputChange = (event)=>{
    // console.log(event.target.value)
    this.props.handleInputChange(event.target.value)
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    // console.dir(event.target[0].value)
    this.props.search(this.props.searchState)
  }

  render(){
    return (
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.onInputChange}/>
            <input type="submit" />
          </form>
        </div>
      );
  }
  
}

export default Form;