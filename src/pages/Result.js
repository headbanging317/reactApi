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

    // constructor(props) {
    //     super(props);
    //      const { data } = this.props;
    //     this.state = {
    //         id: data
    //     }
    // }
    
    render() {

        // const data = api.getId();
        // console.log(data)
        // const idList = data.map(
        //     user => <li>{user.id}</li>
        // )

        // const idList = this.props.id.map(
        //     user => <li>{user.id}</li>
        // )
        
        const { data } = this.props;

        const userProfile = data.map(
            user => <li>{user.name}</li>
        )

        return (
            <div>
                <h2>아니</h2>
                {userProfile}
            </div>
        );
    }
}

// export default Result;

export default withDone(connect(
    (state) => ({
        data: state.id.data
    }),
    (dispatch) => ({
        ResultAction: bindActionCreators(resultAction, dispatch)
    })
)(Result));
