import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Category from './components/category/Category';
import TrainPlay from './components/TrainPlay/TrainPlay';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';



class App extends React.Component<RouteComponentProps> {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route  exact path='/' component={Category}/>
          <Route path='/category' component={Category}/>
          <Route path="/cards/:cat_url" component={TrainPlay}/>
        </Switch>

      </div>
    );
  }
};
export default withRouter(App);

