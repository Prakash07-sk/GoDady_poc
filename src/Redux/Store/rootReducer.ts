import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import RepoSlice from './Repository/Repository.slice';

const rootPersistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    repository: RepoSlice
});

export {rootReducer, rootPersistConfig};
