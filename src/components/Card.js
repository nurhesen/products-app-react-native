import React, { useEffect } from "react";
import {
  VStack,
  Box,
  Divider,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  Text,
  Button,
} from "native-base";
import ProductDetail from "../pages/ProductsList/ProductDetail";

export default function ({ image, title, description, id }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Box alignItems="center">
      <ProductDetail
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={id}
      />

      <Box maxW="80" rounded="lg" overflow="hidden">
        <Box position={"relative"} py="40px">
          <AspectRatio w="60%" mx="auto" ratio={16 / 9}>
            <Image source={image} alt="image" />
          </AspectRatio>

          <Button
            variant={"ghost"}
            onPress={() => setModalVisible(!modalVisible)}
            position={"absolute"}
            right="0"
            top="0"
          >
            <AspectRatio w="20px" ratio={16 / 16}>
              <Image
                source={require("../../assets/pencil-square 1.svg")}
                alt="image"
              />
            </AspectRatio>
          </Button>
        </Box>
        <Stack p="4" space={1}>
          <Stack space={2}>
            <Heading fontSize={"1rem"} textAlign={"center"}>
              {title}
            </Heading>
          </Stack>
          <Text fontWeight="400" textAlign={"center"}>
            {description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
