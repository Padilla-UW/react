export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Aun no esta terminado");

    default:
      return initialState;
  }
};
