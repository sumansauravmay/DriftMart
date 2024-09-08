import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Center,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  let [name, setName] = React.useState("");
  let [mobile, setMobile] = React.useState("");
  let [state2, setState2] = React.useState("");
  let [city, setCity] = React.useState("");
  let [street, setStreet] = React.useState("");
  let [pin, setPin] = React.useState("");

  const addaddress = () => {
    if (
      name == "" ||
      mobile == "" ||
      state2 == "" ||
      city == "" ||
      street == "" ||
      pin == "" ||
      mobile.length < 10 ||
      mobile.length > 12 ||
      pin.length < 6 ||
      pin.length > 6
    ) {
      toast({
        title: "Please fill all the details",
        description: "One or more input,you need to put",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Save Address successfully.",
        description: "Now select payment method.",
        status: "success",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
      navigate("/payment");
    }
  };

  let total = JSON.parse(localStorage.getItem("itemvalue"));
  console.log(total);

  return (
    <>
      <Flex
        minH={"100vh"}
        alignItems={"center"}
        // alignContent={"center"}
        justifyItems={"center"}
        display={{ base: "grid", md: "grid", lg: "Flex" }}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            w="100%"
            p="15px"
            mt={{ base: "20px", md: "20px", lg: "auto" }}
            h="180px"
            ml={{ base: "auto", md: "auto", lg: "100px" }}
          >
            <Box>
              <Text fontSize={16} fontWeight="bold">
                Order Details
              </Text>
              <Flex
                justifyContent="space-between"
                fontSize={14}
                p="10px"
                fontWeight="bold"
              >
                <Text>Item Total(MRP)</Text>
                <Text>₹ {total}</Text>
              </Flex>
            </Box>
            <hr></hr>
            <Box>
              <Flex
                justifyContent="space-between"
                fontSize={14}
                p="10px"
                fontWeight="bold"
              >
                <Text>Shipping Fee</Text>
                <Text>{total >= 1000 ? "Free" : 100}</Text>
              </Flex>
            </Box>
            <hr></hr>
            <Box>
              <Flex
                justifyContent="space-between"
                fontSize={14}
                p="10px"
                fontWeight="bold"
              >
                <Text>To be paid</Text>
                <Text>₹ {total >= 1000 ? total : total + 100}</Text>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Add Your Address</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  isRequired
                />
              </FormControl>

              <FormControl id="number" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  isRequired
                />
              </FormControl>

              <FormControl id="state" isRequired>
                <FormLabel>State</FormLabel>
                <Input
                  value={state2}
                  onChange={(e) => setState2(e.target.value)}
                  type="text"
                  isRequired
                />
              </FormControl>

              <FormControl id="city" isRequired>
                <FormLabel>City</FormLabel>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  isRequired
                />
              </FormControl>

              <FormControl id="street" isRequired>
                <FormLabel>Street</FormLabel>
                <Input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  type="text"
                  isRequired
                />
              </FormControl>

              <FormControl id="pin" isRequired>
                <FormLabel>Pin code</FormLabel>
                <Input
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  type="number"
                  isRequired
                />
              </FormControl>

              <Center spacing={10}>
                <Button
                  w="200px"
                  onClick={addaddress}
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Add
                </Button>
              </Center>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Checkout;
