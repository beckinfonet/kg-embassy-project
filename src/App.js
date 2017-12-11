import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SingleNews from './SingleNews';
import SearchNewsByKeyword from './SearchNewsByKeyword.js'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      dailyNews: [],
      search: '',
      dataReceived: []
    }
this.searchNewsByKeyword = this.searchNewsByKeyword.bind(this);
  }


  componentDidMount(){
    axios.get("/pullnews").then(response => {
      console.log(response);
      this.setState({ dailyNews: response.data})
      console.log(this.state.dailyNews)
    })
  }

searchNewsByKeyword(){
  axios
    .post('/searchByKeyword', {search: this.state.search})
    .then(response => {
      console.log(response.data);
      this.setState({ dataReceived: response.data.articles })
    })
    .catch(console.log);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">World News In The Palm Of Your Hand!</h1>
        </header> 


{/* onChage and onClick event are not working */}
<div className="searchBox">
<input onChange= {e => this.setState({search: e.target.value})} /> 

<button onClick={this.searchNewsByKeyword}>Search</button>



   {/* this function works*/}  
</div>

    <div className="newsSection">
        {this.state.dailyNews.map(news => <SingleNews key={news.id} {...news} />)}
        </div>



 
   <div className="searchSection">
         {this.state.dataReceived.map((news, index) => <SearchNewsByKeyword key= {index} {...news}/>)}
    </div>   

      


<footer className="footer">  </footer>




      </div>
    );
  }
}

export default App;
