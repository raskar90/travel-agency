/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAG = createActionName('CHANGE_TAG');
//export const ADD_TAG = createActionName('ADD_TAG');
//export const REMOVE_TAG = createActionName('REMOVE_TAG');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeTag= payload => ({ payload, type: CHANGE_TAG});
//export const addTag = payload => ({ payload, type: ADD_TAG});
//export const removeTag = payload => ({ payload, type: REMOVE_TAG});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: action.payload.value,
        },
      };
    case CHANGE_TAG:
      return {
        ...statePart,
        tags: action.payload.checked ? [...statePart.tags, action.payload.tag] :
          statePart.tags.filter(tag => tag !== action.payload.tag),
      };
      /*case ADD_TAG:
        return {
          ...statePart,
          tags: action.payload.checked ? [...statePart.tags, action.payload.tag] :
          statePart.tags.filter(tag => tag !== action.payload.tag),
        };
      case REMOVE_TAG:
        return {
          ...statePart,
          tags: action.payload.checked ? [...statePart.tags, action.payload.tag] :
          statePart.tags.filter(tag => tag !== action.payload.tag),
        };
        */
    default:
      return statePart;
  }
}
