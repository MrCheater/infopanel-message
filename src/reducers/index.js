const initialState = {
    id:-1,
    text: '',
    author: 'User156',
    location: '',
    eventDate: new Date(),
    startDate: new Date(),
    messageAuthor:'User156',
    messageDate:'',
    authorList:example(),
    eventList:getEventList(),
    focusRow:''
};

function example(){
    return ['Кошкин','Кудрявцев', 'Туголуков', 'User15', 'User156'];
}

function getEventList(){
    var list = [];

    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i),
            date, hours, min;
            
        list.push(JSON.parse(localStorage[key]));

        date = new Date(list[i].eventDate);
        hours = date.getHours().lenght == 1 ? '0'+date.getHours():date.getHours();
        min = date.getMinutes().lenght == 1 ? '0'+date.getMinutes():date.getMinutes();
        list[i].correctEventDate = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + ' ' + hours + ':' + min;
        
        date = new Date(list[i].startDate);
        hours = date.getHours().lenght == 1 ? '0'+date.getHours():date.getHours();
        min = date.getMinutes().lenght == 1 ? '0'+date.getMinutes():date.getMinutes();
        list[i].correctStartDate = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + ' ' + hours + ':' + min;
    }
    
    return list;
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_TEXT': {
            return { ...state, text: action.value }
        }
        case 'CHANGE_AUTHOR': {
            return { ...state, author: action.value }
        }
        case 'CHANGE_LOCATION': {
            return { ...state, location: action.value }
        }
        case 'CHANGE_EVENTDATE':{
            var date = new Date(action.value);
            date.setDate(date.getDate() - 5);
            if(date < new Date()) {
                date = new Date();
            }
            
            return { ...state, eventDate: action.value, startDate: date }
        }
        case 'CHANGE_STARTDATE':{
            return { ...state, startDate: action.value }
        }
        case 'BUTTON_SAVE':{
            var id;
            if(state.id == -1) {
                id = localStorage.length;
                while(localStorage.getItem(id) != null) id++;
            } else {
                id = state.id;
            }
            localStorage.setItem( id, JSON.stringify({
                                id: id,
                                text : state.text,
                                author: state.author,
                                location: state.location,
                                eventDate: state.eventDate,
                                startDate: state.startDate,
                                messageAuthor: state.messageAuthor,
                                messageDate: new Date()
                             }));
            return { ...state, eventList:getEventList(), text: '', author: state.messageAuthor, location: '', eventDate: new Date(), startDate: new Date(), id:-1, focusRow:'' }
        }
        case 'EDIT_ROW_DATA':{
            return { ...state, text: action.value.text, author: action.value.author, location:action.value.location, eventDate: new Date(action.value.eventDate), startDate: new Date(action.value.startDate), id:action.value.id  }
        }
        case 'BUTTON_DELETE':{
            localStorage.removeItem(action.value);
            return { ...state, id:-1, eventList:getEventList(), text: '', author: state.messageAuthor, location: '', eventDate: new Date(), startDate: new Date(), focusRow:'' }
        }
        case 'BUTTON_CANCEL':{
            return { ...state, id:-1, text: '', author: state.messageAuthor, location: '', eventDate: new Date(), startDate: new Date(), focusRow:'' };
        }
        case 'SET_ROW_FOCUS':{
            return { ...state, focusRow: action.value };
        }
        case 'VALIDATE_ERROR':{
            return {...state, id:-2 }
        }
    }
    return state;
}