import { Reducer } from 'redux';
import { ADD_ARTICLE, SET_LANG } from './actions';
import { SupportedLanguages } from '../i18n/index';

const initialState = {
    articles: [],
    lang: 'en' as SupportedLanguages,
};

const rootReducer: Reducer = (state = initialState, action) => {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload),
        });
    }
    if (action.type === SET_LANG) {
        return Object.assign({}, state, { lang: action.payload as SupportedLanguages });
    }
    return state;
};

export default rootReducer;
