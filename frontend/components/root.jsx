import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import BoardIndexContainer from './board/board_index_container';
import BoardDetailContainer from './board/board_detail_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/boards');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SplashContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/login" component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/boards" component={BoardIndexContainer}
            onEnter={_ensureLoggedIn} />
          <Route path="/boards/:boardId" component={BoardDetailContainer}
              onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
