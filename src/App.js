import React from 'react';
import Search from './components/Search'
import Recipes from './components/Recipes'

class App extends React.Component{

  state = {recipes:[],baseUri:""};

   searchRecipes = async(search) => {
    console.log("searchRecipes")
    const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${search.food}&apiKey=d3447c6fd59a47a8a9321537f01e8058`)

    const data = await response.json()
    console.log(data.baseUri)

    this.setState({recipes: data.results, baseUri: data.baseUri})
  }

  render(){
    return (
      <div className="App">
        <h1>Recipes app</h1>
        <Search search={this.searchRecipes}/>
        <Recipes recipes={this.state.recipes} baseUri={this.state.baseUri}/>
      </div>
    );
  }

}

export default App;
