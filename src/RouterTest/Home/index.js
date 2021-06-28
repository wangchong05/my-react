import React, {Component, Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MyNavLink from './../MyNavLink'
import News from './../Other/News';
import Info from './../Other/Info';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }
    

    render() {
      return (
          <Fragment>
            <div>
              Home
              <br/>
              <div style={{width: '200px', backgroundColor: 'white'}}>
                <MyNavLink to='/home/news' children={'News'}/>
                <MyNavLink to='/home/info' children={'Info'}/>
              </div>
              <br/>
              <br/>
              <div>
                <Switch>
                  <Route path="/home/news" component={News}/>
                  <Route path="/home/info" component={Info}/>
                  <Redirect to="/home/news"/>
                </Switch>
              </div>
            </div>
          </Fragment>
      );
    }
}

export default Home;
