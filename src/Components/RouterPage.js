import React, {Component, Fragment} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PageOne from './Page/PageOne';
import TodoList from './TodoList/TodoList';
import { NavLink } from 'react-router-dom';

class RouterPage extends Component {

    render() {
      return (
          <Fragment>
            <div>
              <br/>
              <div style={{width: '200px', backgroundColor: 'white'}}>
                <NavLink to='/PageOne' activeStyle={{fontWeight: 'bold',color: 'red'}}>PageOne</NavLink><br/>
                <NavLink to='/TodoList' activeStyle={{fontWeight: 'bold',color: 'red'}}>TodoList</NavLink><br/>
              </div>
              <br/>
              <br/>
              <br/>
              <div>
                <Switch>
                  <Route path="/PageOne" component={PageOne}/>
                  <Route exact={false} path="/TodoList" component={TodoList}/>
                  {/* <Redirect to="/PageOne"/> */}
                </Switch>
              </div>
            </div>
          </Fragment>
      );
    }
}

export default withRouter(RouterPage);
