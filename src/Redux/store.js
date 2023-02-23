import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', "users" , "user", "userLogged", ], // Aquí especificamos el reducer "cart" que deseamos almacenar
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persist = persistStore(store);