import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class Location extends Component {
    warningMaxSize = (e) => {
        let refs = this.refs,
            DOM_input_location = ReactDOM.findDOMNode(refs.input_location),
            DOM_input_text_warning = ReactDOM.findDOMNode(refs.input_text_warning);

        DOM_input_text_warning.className = ((DOM_input_location.value.length == 25) ? 'warning-label' : 'none');
    }
    changeLocation = (e) => {
        this.props.actions.changeLocation(e.target.value.trim());
    }
    componentDidUpdate = () => {
        let that = this,
            input_location = that.refs.input_location,
            location = that.props.location;

        ReactDOM.findDOMNode(input_location).value = ((location === '') ? '' : location);
    }

    render() {
        let that = this;

        return <div className='location'>
            <label className='location-label' htmlFor='input-location'
                unselectable='on' title='Place where will be event'>Location</label>
            <input className='location-input'
                id='input-location'
                ref='input_location'
                placeholder='Enter location...'
                onBlur={:: that.changeLocation}
                    onChange={:: that.warningMaxSize}
                    maxLength='25'
                    title='Maximum length is 25 symbol'
                />
                <label htmlFor='input-text' ref='input_text_warning' className='none' unselectable='on'>
                    Reached the maximum number(25) of characters
                </label>
        </div>
    }
}