import {createStore} from "redux";
import RootReducer from "../reducer";

const Store = createStore(
    RootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;