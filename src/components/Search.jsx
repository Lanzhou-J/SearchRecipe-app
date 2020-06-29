import React from 'react';
import Form from './Form'

class Search extends React.Component{

  state = {food: ""}

  handleInputChange=(input)=>{
    this.setState({food:input})
  }

  render(){
    return (
      <div className="search">
        <Form handleInputChange={this.handleInputChange} search={this.props.search} searchState={this.state}/>
        <p>{this.state.food}</p>
      </div>
    );
  }

}

export default Search;