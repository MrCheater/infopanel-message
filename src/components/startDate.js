import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/actions'

import 'react-widgets/lib/less/react-widgets.less';
import {DateTimePicker} from 'react-widgets'

var Globalize = require('globalize')
var globalizeLocalizer = require('react-widgets/lib/localizers/globalize')
Globalize('ru');
globalizeLocalizer(Globalize);

class StartDate extends Component {
    
    changeStartDate(e) {
        this.props.actions.changeStartDate(e);
    }
    render() {
        var that = this,
            user=that.props.user;

        return <div>
                <label>StartDate</label> 
                <DateTimePicker 
                    defaultValue={user.startDate}
                    value={user.startDate}
                    onChange={::that.changeStartDate}
                />
            </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StartDate);