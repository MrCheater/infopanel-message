import React, { Component } from 'react';

export default class Row extends Component {
    onRowClick = () => {
        let props = this.props;
        props.actions.editRowData({ id: props.aggregateId, ...props.data });
    }
    onPreview = () => {
        this.props.actions.preview({value: this.props.data});
    }
    render() {
        let that  = this,
            data  = that.props.data;

        return (
            <tr className={that.props.aggregateId == that.props.focusId ? 'viewBar_table_tr_focus' : 'viewBar_table_tr' }
              tabIndex='-1' onClick={that.onRowClick}>
                <td className='viewBar_table_text'>{data.text}</td>
                <td className='viewBar_table_author' onClick={that.onPreview}>{data.displayName}</td>
                <td className='viewBar_table_location'>{data.location}</td>
                <td className='viewBar_table_eventDate'>{data.correctEventDate}</td>
                <td className='viewBar_table_startDate'>{data.correctStartDate}</td>
            </tr >
        )
    }
}