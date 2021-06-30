import * as React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Category from './components/category/Category';
import Play from './components/play/Play';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';



class App extends React.Component<RouteComponentProps> {

  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route  exact path='/' component={Category}/>
          <Route path='/category' component={Category}/>
          <Route path="/cards/:cat_url" component={Play}/>
        </Switch>

      </div>
    );
  }
};
export default withRouter(App);

/*<Header />
<Category/>
<Footer />*/
