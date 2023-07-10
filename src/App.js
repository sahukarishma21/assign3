import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './Reducers/PostReducer';
import userReducer from './Reducers/UserReducer';
import User from './component/Users/users';
import Post from './component/Posts/posts';

// Combine reducers
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer
});

// Create the Redux store
const store = createStore(rootReducer);
const App = () => {
  return (
    
    <Provider store={store}>
      {/* Your app content */}
      <User/>
      <Post/>
    </Provider>
  
  );
};

export default App;