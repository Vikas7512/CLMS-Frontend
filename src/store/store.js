import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  blacklist: ["register"],
};

const persistUserReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  auth: persistUserReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store); // Corrected import here

export { store, persistor };
