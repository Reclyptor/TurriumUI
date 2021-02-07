import {Action as ReduxAction} from "redux";

interface Action<T> extends ReduxAction<string> {
    type: string;
    payload: T
}

export default Action;