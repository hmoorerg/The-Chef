import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class FakePaper extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div class="paperContentSplitter">
          {
            this.props.image != null &&
            <div class="articleImage" style={{backgroundImage:"url("+this.props.image+")"}}/>
          }
          <div className="fakePaper" style={{ borderColor: this.props.accentColor }}>
            <div>
              <strong className="paperTitle" >{this.props.title}</strong>
              <div className="paperContent">
                {this.props.children}
              </div>
            </div>
            <p className="paperInfo">
              {this.props.timestamp}
            </p>
          </div>
        </div>
      </a>
    );
  }


}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    console.log("tick");

    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="mainGrid">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title"><a href="/">The Chef</a></h1>
        {/*<Clock />*/}
        </header>
          
          <div id="sidebar">
            <hr/>
            <p><a href="/">Photos</a></p>
            <hr/>
            <p><a href="/recipe">Recipes</a></p>
            <hr/>
            <p><a href="/stories">Stories</a></p>
            <hr/>

          </div>

          <div id="articleStack">          
          
          <FakePaper image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&auto=compress&cs=tinysrgb" accentColor="white" title="What a good project" link="/articles/goodDay" timestamp="Dec 23">
            <p>Today, the chef decided to build a website</p>
            <p>This made the chef feel happy</p>
            <p>He stil wanted to work on it though</p>
          </FakePaper>

          <br/>

          <FakePaper title="The chef welcomes you" link="/articles/welcomeNewcomers" image="https://images.pexels.com/photos/710916/pexels-photo-710916.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" timestamp="Jan 2">
          <p>
            The chef is very happy with how popular this website is (probably)
          </p>
          </FakePaper>

          <br/>
          <FakePaper title="Why did the chef make this website?" link="/articles/howIWasMade" image="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" timestamp="Feb 9">
          <p>Nobody will ever know</p>
          </FakePaper>
          <br/>
          
          <FakePaper accentColor="darkred" title="This page needs more articles" link="/articles/badBlogger" timestamp="Oct 1">
          <p>
            And they are easy to add
          </p>
          </FakePaper>
          <br/>

          <FakePaper accentColor="darkGreen" title="The chef is hungry" link="/articles/hungryToday" timestamp="Sep 1">
            <p>
              He should get more food.
            </p>
          </FakePaper>
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
