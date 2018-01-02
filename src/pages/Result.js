import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as resultAction from 'redux/modules/id';
import { withDone } from 'react-router-server';

class Result extends Component {

    componentWillMount() {
        const { ResultAction, data, done } = this.props;
        if(data.length !==0) return false;
        ResultAction.getId().then(done, done);
    }
    

    render() {

        const { data } = this.props;

        const idList = data.map(
            user => <li>{user.id}</li>
        )

        return (
            <div>
                <h2>아니진짜뭐히냐고</h2>
                {idList}
            </div>
        );
    }
}

export default withDone(connect(
    (state) => ({
        data: state.id.data
    }),
    (dispatch) => ({
        ResultAction: bindActionCreators(resultAction, dispatch)
    })
)(Result));
