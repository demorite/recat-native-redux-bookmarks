import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './app/store/reducers'
import App from "./app/components/App";

const store = createStore(reducers);

export default class Root extends React.Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>
    }
}