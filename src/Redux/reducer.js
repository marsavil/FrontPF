import {
  ERROR,
  GET_ALL_PRODUCTS,
  GET_USERS,
  GET_PRODUCT_BY_QUERY,
  GET_PRODUCT_ID,
  FILTER_BY_USER,
  POST_PRODUCTS,
  ORDER_BY_NAME,
  ORDER_MARCA,
  ORDER_PRICE
} from "./actions";

const initialState = {
  product: [],
  users: [],
  detail: [],
  error: [],
  filteredProducts: [],
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

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case POST_PRODUCTS:
      return {
        ...state,
      };

    
      case ORDER_BY_NAME:
        let allProducts =[...state.product]
        let sortedArr = action.payload === "asc" ?
            allProducts.sort(function(a, b){
                if(a.marca > b.marca){
                    return 1 ;
                }
                if(b.marca > a.marca){
                    return -1;
                }
                return 0
            }) :
            allProducts.sort(function(a, b){
                if(a.marca > b.marca){
                    return -1; 
                }
                if(b.marca > a.marca){
                    return 1 ;
                }
                return 0;
            })
        return {
            ...state,
            filteredProducts: sortedArr
        }

      case ORDER_PRICE:
        let allProducts3 =[...state.product]
        let sortedArr1 = action.payload === "smaller" ?
        allProducts3.sort(function(a, b){
                if(a.price > b.price){
                    return 1 ;
                }
                if(b.price > a.price){
                    return -1;
                }
                return 0
            }) :
            allProducts3.sort(function(a, b){
                if(a.price > b.price){
                    return -1; 
                }
                if(b.price > a.price){
                    return 1 ;
                }
                return 0;
            })
        return {
            ...state,
            filteredProducts: sortedArr1
        }
      case ORDER_MARCA:
        const allProducts2 = state.product;
            const productFiltered = action.payload === 'All' ? 
            allProducts2 : 
            allProducts2.filter(c => c.marca === action.payload)
            
            return {
              ...state,
              filteredProducts: productFiltered
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
    default:
      return { ...state };
  }
};

export default rootReducer;
