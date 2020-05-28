const initialState = {
  listProduct: [],
  pageNumber: 1,
  hasMore: true,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_PRODUCT":
      return {
        ...state,
        listProduct: [...state.listProduct, ...action.payload],
        pageNumber: state.pageNumber + 1,
      };

    case "STOP_GET_PRODUCT":
      return {
        ...state,
        hasMore: false,
      };

    default:
      return state;
  }
}
