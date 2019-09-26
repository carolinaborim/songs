import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:23' },
        { title: 'Macarena', duration: '8:10' },
        { title: 'La Bicicleta', duration: '3:46' },
        { title: 'I love my dogs', duration: '2:17' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SELECT_SONG") {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
