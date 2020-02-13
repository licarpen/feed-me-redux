import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '';

export default function reducer(state, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snack: state.snack + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, study: state.study + 1 };
    default: 
      console.log(`unhandled name: ${name}`);
      return state;
  }
}
