import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/pages/LoginPage';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { AdminLayout } from './components/Layout';
import { CssBaseline } from '@material-ui/core';
import { history } from 'utils';
function App() {
  return (
    <>
      <Router history={history}>
        <CssBaseline>
          <Switch>
            <Redirect exact from="/" to="/admin/dashboard" />
            <Route path="/login">
              <LoginPage />
            </Route>

            <PrivateRoute path="/admin">
              <AdminLayout />
            </PrivateRoute>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </CssBaseline>
      </Router>

    </>
  );
}

export default App;
