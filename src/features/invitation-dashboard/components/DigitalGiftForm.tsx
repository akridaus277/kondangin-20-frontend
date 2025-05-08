import { DeleteIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  Flex,
  HStack,
  Icon,
  Text,
  IconButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import React, { ComponentType, useState } from "react"
import { MdDragIndicator } from "react-icons/md"

interface DigitalGift {
  id: string
  bankType: string
  accountNumber: string
  accountHolderName: string
}

const createEmptyDigitalGift = (): DigitalGift => ({
  id: crypto.randomUUID(),
  bankType: "",
  accountNumber: "",
  accountHolderName: "",
})

const DigitalGiftForm = () => {
  const [digitalGifts, setDigitalGifts] = useState<DigitalGift[]>([createEmptyDigitalGift()])

  const handleAdd = () => {
    setDigitalGifts([...digitalGifts, createEmptyDigitalGift()])
  }

  const handleChange = (index: number, field: keyof DigitalGift, value: string) => {
    setDigitalGifts((current) => {
      const updated = [...current]
      updated[index] = {
        ...updated[index],
        [field]: value,
      }
      return updated
    })
  }

  const handleRemove = (index: number) => {
    setDigitalGifts((current) => {
      const updated = [...current]
      updated.splice(index, 1)
      return updated
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Digital Gifts:", digitalGifts)
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return
    setDigitalGifts((current) => {
      const items = Array.from(current)
      const [reordered] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reordered)
      return items
    })
  }

  return (
    <Box w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Update Digital Gift
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="brideGroomList">
              {(provided) => (
                <Accordion allowMultiple {...provided.droppableProps} ref={provided.innerRef}>
                  {digitalGifts.map((digitalGift, index) => (
                    <Draggable key={digitalGift.id} draggableId={digitalGift.id} index={index}>
                      {(provided, snapshot) => (
                        <AccordionItem
                          borderWidth="1px"
                          borderRadius="lg"
                          mb={4}
                          bg={snapshot.isDragging ? "gray.100" : "gray.50"}
                          ref={provided.innerRef}
                          {...provided.draggableProps }
                        >
                          <AccordionButton>
                            <Flex
                              align="center"
                              justify="space-between"
                              w="full"
                              userSelect="none"
                            >
                              <HStack spacing={3}>
                                <Box
                                  {...provided.dragHandleProps}
                                  cursor="grab"
                                  aria-label="Drag Handle"
                                  _active={{ cursor: "grabbing" }}
                                  color="gray.500"
                                >
                                  <Icon as={MdDragIndicator as ComponentType<any>}></Icon>
                                </Box>
                                <Text fontWeight="semibold">
                                  Digital Gift #{index + 1}
                                </Text>
                              </HStack>

                              <HStack spacing={2}>
                                {digitalGifts.length > 1 && (
                                  <IconButton
                                    aria-label="Delete"
                                    icon={<DeleteIcon />}
                                    size="sm"
                                    colorScheme="red"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleRemove(index)
                                    }}
                                  />
                                )}
                                <AccordionIcon />
                              </HStack>
                            </Flex>
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                          <FormControl isRequired>
                            <FormLabel>Tipe Bank</FormLabel>
                            <Select
                              value={digitalGift.bankType}
                              onChange={(e) => handleChange(index, "bankType", e.target.value)}
                            >
                              <option value="">Pilih Tipe Bank</option>
                              <option value="Bank A">Bank A</option>
                              <option value="Bank B">Bank B</option>
                              <option value="Bank C">Bank C</option>
                            </Select>
                          </FormControl>
                          <FormControl mt={2} isRequired>
                            <FormLabel>Nomor Rekening</FormLabel>
                            <Input
                              value={digitalGift.accountNumber}
                              onChange={(e) => handleChange(index, "accountNumber", e.target.value)}
                            />
                          </FormControl>

                          <FormControl mt={2} isRequired>
                            <FormLabel>Nama Pemilik Rekening</FormLabel>
                            <Input
                              value={digitalGift.accountHolderName}
                              onChange={(e) => handleChange(index, "accountHolderName", e.target.value)}
                            />
                          </FormControl>

                            
                          </AccordionPanel>
                        </AccordionItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Accordion>
              )}
            </Droppable>
          </DragDropContext>

          <Button onClick={handleAdd} colorScheme="teal">
            Tambah Digital Gift
          </Button>

          <Button type="submit" colorScheme="blue">
            Simpan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default DigitalGiftForm



{/* <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
              <FormControl isRequired>
                <FormLabel>Tipe Bank</FormLabel>
                <Select
                  value={gift.bankType}
                  onChange={(e) => handleChange(index, "bankType", e.target.value)}
                >
                  <option value="">Pilih Tipe Bank</option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                  <option value="Bank C">Bank C</option>
                </Select>
              </FormControl>

              <FormControl mt={2} isRequired>
                <FormLabel>Nomor Rekening</FormLabel>
                <Input
                  value={gift.accountNumber}
                  onChange={(e) => handleChange(index, "accountNumber", e.target.value)}
                />
              </FormControl>

              <FormControl mt={2} isRequired>
                <FormLabel>Nama Pemilik Rekening</FormLabel>
                <Input
                  value={gift.accountHolderName}
                  onChange={(e) => handleChange(index, "accountHolderName", e.target.value)}
                />
              </FormControl>

              <Button mt={4} colorScheme="red" onClick={() => handleRemove(index)}>
                Hapus Gift
              </Button>
            </Box> */}
