// src/components/ui/useToastMessage.ts
import { useToast } from "@chakra-ui/react"

export const useToastMessage = () => {
  const toast = useToast()

  const showToast = (
    title: string,
    status: "info" | "warning" | "success" | "error",
    description?: string
  ) => {
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: true,
      position: "top",
    })
  }

  return { showToast }
}
