import React, { useEffect } from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  VStack,
  Icon,
  Flex,
  Divider,
  StyleProvider,
} from "native-base";
import Card from "../../components/Card";
import ProductDetail from "./ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../actions";

// const products = [
//   {
//     image: require("../../../assets/products/faucet.png"),
//     title: "Brizo",
//     description: "Two Handle Wail-Mount Faucet",
//   },
//   {
//     image: require("../../../assets/products/washbowl.png"),
//     title: "Brizo",
//     description: "Two Handle Wail-Mount Faucet",
//   },
//   {
//     image: require("../../../assets/products/shower_head.png"),
//     title: "Brizo",
//     description: "Two Handle Wail-Mount Faucet",
//   },
//   {
//     image: require("../../../assets/products/hand_shower.png"),
//     title: "Brizo",
//     description: "Two Handle Wail-Mount Faucet",
//   },
//   {
//     image: require("../../../assets/products/80092-BL-B1 1.png"),
//     title: "Brizo",
//     description: "Two Handle Wail-Mount Faucet",
//   },
//   {
//     image: require("../../../assets/products/T65735LF-GL-B1 1.png"),
//     title: "Brizo",
//     description: "Two Handle Wail-Mount Faucet",
//   },
// ];

const LeftPart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const products = useSelector((state) => state.appData.data);

  return (
    <Box>
      <VStack
        display={{ base: "none", md: "flex" }}
        space="6"
        mt="3"
        w="90%"
        mx="auto"
      >
        <HStack justifyContent="space-between" p="10px 20px">
          <Text fontSize={"1rem"} fontWeight="600">
            Bath
          </Text>
        </HStack>

        <HStack
          space={3}
          display="grid"
          style={{ gridTemplateColumns: "auto auto auto auto auto auto" }}
        >
          {products?.map((product, index) => {
            return (
              <div key={index}>
                <Card {...product} />
              </div>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
};

export default () => {
  return <LeftPart />;
};
