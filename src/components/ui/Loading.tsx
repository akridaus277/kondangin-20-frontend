import { Spinner, Center, Text, VStack } from "@chakra-ui/react"

const Loading = () => {
  return (
    <Center py={10}>
      <VStack spacing={3}>
        <Spinner size="lg" color="teal.500" />
        <Text>Memuat data...</Text>
      </VStack>
    </Center>
  )
}

export default Loading
