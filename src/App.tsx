import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Category from './components/category/Category';
import TrainPlay from './components/TrainPlay/TrainPlay';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';


export type IParams = { cat_url: string } ;

class App extends React.Component<RouteComponentProps> {

state = {
  isPlay: false,
  changeMode: false,
  startPlay: false,
  startPressed: false
}

changeMode = () => {
  this.setState({
    startPressed: false
  })
  if(this.state.isPlay === false) {
      this.setState ({
          isPlay: true
      })
  } else  {
    this.setState ({
              isPlay: false
           })
          }
}

startPlay = () => {
  this.setState({
    startPressed: true
  })
}

  render() {
    return (
      <div className="App">
        <Switch>

          <Route path='/category' component={() => <Category isPlay={this.state.isPlay} changeMode={this.changeMode} startPlay = {this.startPlay} startPressed = {this.state.startPressed}/> }/>
          <Redirect exact from='/' to="/category"/>
          <Route path="/cards/:cat_url" component={(props: RouteComponentProps<IParams>) => (<TrainPlay {...props} isPlay={this.state.isPlay} changeMode={this.changeMode} startPlay={this.startPlay} startPressed = {this.state.startPressed}/>)}/>
        </Switch>

      </div>
    );
  }
};
export default withRouter(App);

