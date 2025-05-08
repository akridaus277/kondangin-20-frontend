import { Center, Text, VStack } from "@chakra-ui/react"

interface FailedProps {
  message?: string
}

const Failed = ({ message = "Gagal memuat data." }: FailedProps) => {
  return (
    <Center py={10}>
      <VStack spacing={2}>
        <Text fontWeight="bold" color="red.500">Terjadi kesalahan</Text>
        <Text>{message}</Text>
      </VStack>
    </Center>
  )
}

export default Failed
