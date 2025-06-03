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
            <div style={{
              // height: '100vh',
              backgroundColor: '#282c34',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <Switch>
                  <Route path="/PageOne" component={PageOne}/>
                  <Route exact={false} path="/TodoList" component={TodoList}/>
                  {/* <Redirect to="/PageOne"/> */}
                </Switch>
              </div>
              <div style={{
                width: '100%',
                height: '70px',
                backgroundColor: 'white',
                position: 'fixed',
                bottom: '0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <NavLink to='/PageOne' style={{flex: 1}} activeStyle={{fontWeight: 'bold',color: 'red'}}>PageOne</NavLink><br/>
                <NavLink to='/TodoList' style={{flex: 1}} activeStyle={{fontWeight: 'bold',color: 'red'}}>TodoList</NavLink><br/>
              </div>
            </div>
          </Fragment>
      );
    }
}

export default withRouter(RouterPage);
