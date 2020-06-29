import React from 'react';

class Recipes extends React.Component{
  render(){
    return (
        <div className="recipes">
          <h1>Recipes</h1>
          {this.props.recipes.map((item, index)=>{
            return(
              <div key={index}>
                <h3>Title: {item.title}</h3> 
                {console.log(this.props.baseUri+item.id+".jpg")}
                <img src={this.props.baseUri+item.id+"-240x150.jpg"} alt="foodImg"/>
                <hr/>         
              </div>
            )
          })}
        </div>
      );
  }
  

}

export default Recipes;