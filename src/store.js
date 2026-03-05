export const initialStore = () => {
  return {
 usuarios: []
  }
}

export default function storeReducer(state, action) {
  switch (action.type) {
    case "set_usuarios":
      return {
        ...state,
        usuarios: action.payload
      }
    default:
      return state;
  }
}














