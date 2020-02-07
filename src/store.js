import { createStore } from 'redux';
import rootReducer from './reducers';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const appStore = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development' ? devTool : (function () { })()
);

export default appStore;