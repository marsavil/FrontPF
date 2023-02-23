import {
  ERROR,
  GET_ALL_PRODUCTS,
  GET_USERS,
  GET_USER_LOGGED,
  GET_USER_BY_EMAIL,
  GET_PRODUCT_BY_QUERY,
  GET_PRODUCT_ID,
  FILTER_BY_USER,
  POST_PRODUCTS,
  ORDER_BY_NAME,
  ORDER_MARCA,
  ORDER_PRICE,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  REGISTER_USER,
  GET_COMMENTS,
  POST_COMMENTS,
  LOW_STOCK,
} from "./actions";

const initialState = {
  product: [],
  users: [],
  user: null,
  userLogged: {},
  userByEmail: {},
  detail: [],
  error: [],
  filteredProducts: [],
  cart: [],
  comments: [],
  lowStock : null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    case GET_PRODUCT_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_PRODUCT_BY_QUERY:
      return {
        ...state,
        product: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER_LOGGED:
      return {
        ...state,
        userLogged: action.payload
      }

    case POST_PRODUCTS:
      return {
        ...state,
      };
    case LOW_STOCK:
      return {
        ...state,
        lowStock : action.payload
      };

    case ORDER_BY_NAME:
      let allProducts = [...state.product];
      let sortedArr =
        action.payload === "asc"
          ? allProducts.sort(function (a, b) {
              if (a.marca > b.marca) {
                return 1;
              }
              if (b.marca > a.marca) {
                return -1;
              }
              return 0;
            })
          : allProducts.sort(function (a, b) {
              if (a.marca > b.marca) {
                return -1;
              }
              if (b.marca > a.marca) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filteredProducts: sortedArr,
      };

    case ORDER_PRICE:
      let allProducts3 = [...state.product];
      let sortedArr1 =
        action.payload === "smaller"
          ? allProducts3.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : allProducts3.sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              }
              if (b.price > a.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filteredProducts: sortedArr1,
      };
    case ORDER_MARCA:
      const allProducts2 = state.product;
      const productFiltered =
        action.payload === "All"
          ? allProducts2
          : allProducts2.filter((c) => c.marca === action.payload);

      return {
        ...state,
        filteredProducts: productFiltered,
      };
    case FILTER_BY_USER:
      const allProduct2 = state.product;
      let filteredUser = state.product;

      if (action.payload === "AllUser") {
        return {
          ...state,
          product: state.product,
          filteredProducts: [],
        };
      } else {
        filteredUser = allProduct2.filter((e) => {
          return e.user?.includes(action.payload);
        });
        return {
          ...state,
          filteredProducts: filteredUser,
        };
      }

    ////CART////
    case ADD_TO_CART:
      let productsCart = [...state.product];

      let newItem = productsCart.find((p) => p.id === action.payload);

      let itemCard = state.cart.find((item) => item.id === newItem.id);

      return itemCard
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

    case REMOVE_ONE_FROM_CART:
      let itemDelete = state.cart.find((item) => item.id === action.payload);

      return itemDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    case POST_COMMENTS:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
