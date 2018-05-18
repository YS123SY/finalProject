import React, { Component } from 'react';
import { BrowserRouter as Router , Link} from 'react-router-dom'
import './App.css';
import MainPageComponent from './MainPageComponent'
import NavBar from './NavBar';





class App extends Component {

  constructor(props){
    super(props);
    this.list=[
      {
        category: "educations",
        image  : "http://www.pcquest.com/wp-content/uploads/2016/07/Development-Tools.jpg",
        title: "why we teach computer science at an early age",
        date: "17/05/2018 13:19",
        paragh :"it s not surprise that will it s not surprise that will it s not surprise that will it s not surprise that will  "
      },
      {
        category: "project management",
        image  : "https://images.firstpost.com/wp-content/uploads/2013/02/380x285_China_Blog_InternetUsers_Reuters.jpg",
        title: "why we teach computer science at an early age",
        date: "18/05/2018 13:19",
        paragh :"it s not surprise that will it s not surprise that will it s not surprise that will it s not surprise that will  "
      },
      {
        category: "project management",
        image  : "http://jnro.co.in/wp-content/uploads/2015/11/Alacriti_Infosystems_1.jpg",
        title: "why we teach computer science at an early age",
        date: "19/05/2018 13:19",
        paragh :"it s not surprise that will it s not surprise that will it s not surprise that will it s not surprise that will  "
      },
      {
        category: "educations",
        image  : "https://upload.wikimedia.org/wikipedia/commons/2/26/Nous_Infosystems_HSR_Annex2_Building.jpg",
        title: "why we teach computer science at an early age",
        date: "20/05/2018 13:19",
        paragh :"it s not surprise that will it s not surprise that will it s not surprise that will it s not surprise that will  "
      }
    ]
  }

  render() {
    return (
      <Router>
      <div className="App">
      <NavBar/>
      <div className='article-list'>
        {this.list.map((el)=><MainPageComponent comp={el}/>)}
      </div>
    
      </div>
      </Router>
    );
  }
}

export default App;
