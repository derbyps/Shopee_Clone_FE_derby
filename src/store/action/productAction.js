import axios from "axios";

const url = "http://0.0.0.0:9090";

export const getProduct = (props) => {
  return async (dispatch, getState) => {
    const page = getState().product.pageNumber;

    try {
      const response = await axios.get(url + "/product/list?rp=6&p=" + page);

      if (response.data.length === 0) {
        dispatch({ type: "STOP_GET_PRODUCT" });
      }

      setTimeout(() => {
        dispatch({ type: "SUCCESS_GET_PRODUCT", payload: response.data });
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
};
