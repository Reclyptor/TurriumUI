import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import State from "../redux/state/State";

type RootProps = {

};

const ConnectedRoot = (props: RootProps) => {
    return (
        <div/>
    );
};

const mapStateToProps = (state: State) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
}

const Root = connect(mapDispatchToProps, mapStateToProps)(ConnectedRoot);
export default Root;