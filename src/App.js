import React, { Component } from 'react';
import './App.css';



class ArticleBox extends React.Component {
  render() {
    return (
      <a className="articleBoxBorder" href={this.props.link}>
        <div className="articleContentSplitter">
          {
            this.props.image != null &&
            <div className="articleImage" style={{backgroundImage:"url("+this.props.image+")"}}/>
          }
          <div className="articleBox" style={{ borderColor: this.props.accentColor }}>
            <div>
              <strong className="articleBoxTitle" >{this.props.title}</strong>
              <div className="articleBoxContent">
                {this.props.children}
              </div>
            </div>
            <p className="articleInfo">
              {this.props.timestamp}
            </p>
          </div>
        </div>
      </a>
    );
  }


}

class NavBox extends React.Component {
    render(){
        return (
            <div className="navBox">
            <a href={this.props.link}>{this.props.children}</a>
            </div>
        )}
}


class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="mainGrid">
        <header className="App-header">
          <h1 className="App-title"><a href="/">The Chef</a></h1>
        </header>
          
          <nav id="sidebar">
            <NavBox link="/">Home</NavBox>
            <NavBox link="/">Articles</NavBox>
            <NavBox link="/">Recipes</NavBox>
          </nav>

          <div id="articleStack">          
          
          <ArticleBox image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&auto=compress&cs=tinysrgb" title="What a good project" link="/" timestamp="Dec 23">
            <p>Today, the chef decided to build a website</p>
            <p>The chef enjoyed this</p>
            <p>He stil wanted to work on it though</p>
          </ArticleBox>


          <ArticleBox title="The chef welcomes you" link="/" image="https://images.pexels.com/photos/710916/pexels-photo-710916.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" timestamp="Jan 2">
          <p>
            The chef is very happy with how popular this website is (probably)
          </p>
          </ArticleBox>

          <ArticleBox title="Why did the chef make this website?" link="/" image="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" timestamp="Feb 9">
          <p>Nobody will ever know</p>
          </ArticleBox>
          
          <ArticleBox accentColor="#D00" title="This page needs more articles" link="/" timestamp="Oct 1">
          <p>
            And they are easy to add
          </p>
          </ArticleBox>

          <ArticleBox accentColor="#0A0" title="The chef is hungry" link="/" timestamp="Sep 1">
            <p>
              He should get more food.
            </p>
          </ArticleBox>
          </div>
          <div id="footer">
            <a>
              Made in 2018
            </a>
          </div>
        </div>



      </div>
    );
  }
}

export default App;
