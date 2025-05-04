// src/providers/ChakraProvider.tsx
import { ChakraProvider as Chakra, ColorModeScript } from "@chakra-ui/react"
import theme from "@/theme/theme"
import React from "react"

interface Props {
  children: React.ReactNode
}

const ChakraProvider = ({ children }: Props) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Chakra theme={theme}>{children}</Chakra>
    </>
  )
}

export default ChakraProvider
