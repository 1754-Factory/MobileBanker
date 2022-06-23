import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, createStore } from "redux";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 0,
  blacklist: ["walletConnect"],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * 
 * const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
 */
