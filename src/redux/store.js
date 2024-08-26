import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeSlice from "./slices/themeSlice";
import messageSlice from "./slices/messageSlice";
import popupSlice from "./slices/popupSlice";

const persistConfig = {
  key: "reach_inbox_data",
  storage,
};

const reducers = combineReducers({
  theme: themeSlice,
});

const persistSliceReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    persistSliceReducer,
    message: messageSlice,
    popup: popupSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
persistStore(store);
export default store;
