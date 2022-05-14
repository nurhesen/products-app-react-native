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
  Button,
} from "native-base";
import LeftPart from "./LeftPart";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log("state", state);
  }, [state]);
  return (
    <Center flex={1}>
      <Stack
        m="4"
        w="100%"
        h="100%"
        direction={{ base: "column", md: "row" }}
        rounded="xl"
      >
        <Box flex={{ base: 1, md: 3 }}>
          <VStack display="flex" space="6" mt="1">
            <Flex
              direction="row"
              justifyContent={"space-between"}
              width="95%"
              mx="auto"
            >
              <Box>
                <AspectRatio w="22px" ratio={16 / 16}>
                  <Image
                    source={require("../../../assets/arrow-back 1.svg")}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <VStack
                direction={"row"}
                display="flex"
                alignItems={"center"}
                space="6"
              >
                <Button
                  variant="outline"
                  px="25px"
                  py="5px"
                  _text={{ color: "black", fontWeight: "600" }}
                  textTransform={"uppercase"}
                  fontWeight="bold"
                >
                  Gallery
                </Button>
                <Button
                  variant="outline"
                  px="25px"
                  py="5px"
                  _text={{ color: "black", fontWeight: "600" }}
                  textTransform={"uppercase"}
                  fontWeight="bold"
                >
                  Unreal
                </Button>
                <AspectRatio w="12px" ratio={16 / 16}>
                  <Image
                    source={require("../../../assets/Vector.svg")}
                    alt="image"
                  />
                </AspectRatio>
              </VStack>
            </Flex>

            <LeftPart />
          </VStack>
        </Box>
        <VStack
          space={{ base: "2", md: "4" }}
          flex={{ base: "none", md: 1 }}
          p="4"
          borderWidth={"1.5px 0px 0px 0px"}
          borderColor="gray.300"
        >
          <VStack display={{ base: "none", md: "flex" }} space="6" mt="1">
            <Flex direction="row" justifyContent={"flex-end"}>
              <VStack direction={"row"} display="flex" space="6">
                <Text>Help</Text>
                <Text>Settings</Text>
                <AspectRatio w="20px" ratio={16 / 16}>
                  <Image
                    source={require("../../../assets/Group 604.svg")}
                    alt="image"
                  />
                </AspectRatio>
              </VStack>
            </Flex>
            <VStack display={{ base: "none", md: "flex" }} space="6" mt="3">
              <HStack justifyContent="space-between" p="10px 20px">
                <Text fontSize={"1.6rem"} fontWeight="600">
                  Fixtures
                </Text>
              </HStack>
              <VStack display={{ base: "none", md: "flex" }} space="2" mt="4">
                <HStack
                  justifyContent="space-between"
                  p="10px 20px"
                  textTransform={"uppercase"}
                >
                  <Text fontWeight="600">Package</Text>
                </HStack>
                <VStack display={{ base: "none", md: "flex" }} space="1">
                  <HStack
                    justifyContent="space-between"
                    borderColor={"gray.800"}
                    borderWidth="1.4px"
                    p="10px 20px"
                  >
                    <Text fontWeight="600">Premium</Text>
                    <Text fontWeight="600">$0</Text>
                  </HStack>
                  <HStack
                    justifyContent="space-between"
                    borderColor={"gray.300"}
                    borderWidth="1.4px"
                    p="10px 20px"
                  >
                    <Text>Luxury</Text>
                    <Text>+$100.000</Text>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </Stack>
    </Center>
  );
};

export default () => {
  return <ProductsList />;
};
