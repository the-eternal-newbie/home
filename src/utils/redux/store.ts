import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    whitelist: ['lang'],
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
