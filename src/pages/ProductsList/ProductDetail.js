import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  ScrollView,
  Text,
  Center,
  VStack,
  NativeBaseProvider,
  Stack,
  Box,
  Image,
  AspectRatio,
  HStack,
} from "native-base";
// import { fetchDataDetail } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../../api";
import { fetchDataDetail } from "../../../actions";

export default function ({ modalVisible, setModalVisible, id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalVisible) {
      dispatch(fetchDataDetail(id));
    }
  }, [modalVisible]);

  const productDetail = useSelector((state) => state.appDataDetail.data);

  if (Object.keys(productDetail).length) {
    return (
      <>
        <Modal
          isOpen={modalVisible}
          borderRadius={"0"}
          onClose={setModalVisible}
          size={"70%"}
          height="70vh"
          mx="auto"
          my="15vh"
          minWidth={"50vw"}
        >
          <Modal.Content borderRadius={"0"}>
            <Modal.CloseButton />

            <Modal.Body borderRadius={"0"} minWidth={"50vw"}>
              <Stack
                minWidth={"50vw"}
                m="2"
                w="100%"
                h="100%"
                direction={{ base: "column", md: "row" }}
                // rounded="xl"
                borderRadius={"0"}
              >
                <Box flex={2} overflow="hidden">
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    space="2"
                    w="90%"
                    mx="auto"
                  >
                    <HStack justifyContent="space-between" p="10px 20px">
                      <Text fontSize={"1rem"} fontWeight="600">
                        {productDetail.type}
                      </Text>
                    </HStack>
                    <VStack display={{ base: "none", md: "flex" }} space="4">
                      {productDetail.quality.map((quality, index) => {
                        return (
                          <VStack
                            display={{ base: "none", md: "flex" }}
                            space="6"
                          >
                            <HStack
                              justifyContent="space-between"
                              p="10px 20px"
                            >
                              <Text fontSize={"1rem"} fontWeight="600">
                                {quality.name}
                              </Text>
                            </HStack>
                            <AspectRatio
                              w="220px"
                              maxWidth={"100%"}
                              borderWidth="2px"
                              borderColor={index ? "gray.200" : "gray.900"}
                              ratio={16 / 16}
                            >
                              <Image source={quality.image} alt="image" />
                            </AspectRatio>
                          </VStack>
                        );
                      })}
                    </VStack>
                  </VStack>
                </Box>
                <Box flex={4}>
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    w="90%"
                    mx="auto"
                    space="4"
                  >
                    <HStack direction={"row"} justifyContent="space-between">
                      <HStack justifyContent="space-between">
                        <Text fontSize={"1.5rem"} fontWeight="700">
                          {productDetail.title}
                        </Text>
                      </HStack>
                      <HStack justifyContent="space-between">
                        <Text fontSize={"1rem"} fontWeight="600">
                          ${productDetail.price}
                          {productDetail.included
                            ? " (included)"
                            : " (not-included)"}
                        </Text>
                      </HStack>
                    </HStack>

                    <HStack justifyContent="space-between">
                      <Text fontSize={"1rem"} fontWeight="600">
                        {productDetail.short_description}
                      </Text>
                    </HStack>
                    <VStack display={{ base: "none", md: "flex" }} space="2">
                      {productDetail.detail.map((detail) => {
                        return (
                          <HStack
                            direction={"row"}
                            justifyContent="flex-start"
                            p="0px 0px"
                          >
                            <HStack justifyContent="space-between">
                              <Text
                                fontSize={"1rem"}
                                style={{
                                  color: "gray",
                                }}
                                fontWeight="300"
                              >
                                {detail.name}:
                              </Text>
                            </HStack>
                            <HStack
                              justifyContent="space-between"
                              paddingLeft="2rem"
                            >
                              <Text fontSize={"1rem"} fontWeight="600">
                                {detail.description}
                              </Text>
                            </HStack>
                          </HStack>
                        );
                      })}
                    </VStack>
                    <hr style={{ width: "100%", height: "1px" }} />
                    <HStack justifyContent="space-between" p="10px 20px">
                      <Text fontSize={"1rem"} fontWeight="600">
                        {productDetail.description}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </Stack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <Center>
          <VStack space={4}></VStack>
        </Center>
      </>
    );
  } else {
    return <></>;
  }
}
