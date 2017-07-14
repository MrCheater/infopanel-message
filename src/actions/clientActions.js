export default {
    changeText: (value) => ({
        type: 'CHANGE_TEXT',
        value: value
    }),
    changeAuthor: (value) => ({
        type: 'CHANGE_AUTHOR',
        value: value
    }),
    changeLocation: (value) => ({
        type: 'CHANGE_LOCATION',
        value: value
    }),
    changeEventDate: (value) => ({
        type: 'CHANGE_EVENTDATE',
        value: value
    }),
    changeStartDate: (day, dayRange) => ({
        type: 'CHANGE_STARTDATE',
        day: day,
        dayRange: dayRange
    }),
    updateButton: () => ({
        type: 'UPDATE_BUTTON'
    }),
    createButton: () => ({
        type: 'CREATE_BUTTON'
    }),
    deleteButton: (value) => ({
        type: 'DELETE_BUTTON',
        value: value
    }),
    cancelButton: () => ({
        type: 'CANCEL_BUTTON'
    }),
    editRowData: (value) => ({
        type: 'EDIT_ROW_DATA',
        value: value
    }),
    setRowFocus: (value) => ({
        type: 'SET_ROW_FOCUS',
        value: value
    }),
    validateError: (value) => ({
        type: 'VALIDATE_ERROR',
        value: value
    })
};