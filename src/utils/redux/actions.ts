export const ADD_ARTICLE = 'ADD_ARTICLE';
export const SET_LANG = 'SET_LANG';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addArticle = (payload: unknown) => {
    return { type: ADD_ARTICLE, payload };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setLang = (payload: unknown) => {
    return { type: SET_LANG, payload };
};
