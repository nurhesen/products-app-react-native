import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import configureStore from "./configureStore";
import ProductsList from "./src/pages/ProductsList";
import { Provider } from "react-redux";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const store = configureStore();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <ProductsList />
      </Provider>
    </NativeBaseProvider>
  );
}
