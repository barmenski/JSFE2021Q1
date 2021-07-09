import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Category from './components/category/Category';
import TrainPlay from './components/TrainPlay/TrainPlay';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';


export type IParams = { cat_url: string } ;

class App extends React.Component<RouteComponentProps> {

state = {
  isPlay: false,
  changeMode: (value: boolean) => value as boolean
}

changeMode = (value: boolean) => {
  if(this.state.isPlay === false) {
      this.setState ({
          isPlay: value
      })
  } else  this.setState ({
              isPlay: value
           })
}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route  exact path='/' component={Category}/>
          <Route path='/category' component={() => <Category isPlay={this.state.isPlay} changeMode={this.changeMode} /> }/>
          <Route path="/cards/:cat_url" component={(props: RouteComponentProps<IParams>) => (<TrainPlay {...props} isPlay={this.state.isPlay} changeMode={(value: boolean) => value as boolean}/>)}/>
        </Switch>

      </div>
    );
  }
};
export default withRouter(App);

