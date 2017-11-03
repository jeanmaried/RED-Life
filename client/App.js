import React from 'react';
import Layout from '../imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../imports/ui/config/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Theme from './imports/ui/config/theme';
import CreateIdea from '../imports/ui/containers/CreateIdea';
import {Provider} from 'react-redux';
import muiTheme from '../imports/ui/config/theme';
import Idea from '../imports/ui/containers/IdeaContainer';

const App = () => (
      <div>
        <BrowserRouter>
          {/* <Provider> */}
            <MuiThemeProvider muiTheme={muiTheme}>
              <Switch>
                <Layout>
                  {/* <Route exact path="/login" component={Login} /> */}
                  <Route exact path="/idea" component={Idea} />
                  {/* <Route path="/profile/:userid" component={Profile} /> */}
                </Layout>
              </Switch>
            </MuiThemeProvider>
          {/* </Provider> */}
        </BrowserRouter>
      </div>
);

export default App;
