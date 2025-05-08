import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  IconButton,
  Heading,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react"
import { AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import React, { ComponentType, useState } from "react"
import { MdDragIndicator } from "react-icons/md"

interface PhotoTemplate {
  id: string
  photo: File | null
  preview: string
}

const createEmptyPhotoTemplate = (): PhotoTemplate => ({
  id: crypto.randomUUID(),
  photo: null,
  preview: "",
})

const PhotoTemplateForm = () => {
  const [photoTemplates, setPhotoTemplates] = useState<PhotoTemplate[]>([createEmptyPhotoTemplate()])

  const handleAdd = () => {
    setPhotoTemplates([...photoTemplates, createEmptyPhotoTemplate()])
  }

  const handleRemove = (index: number) => {
    setPhotoTemplates((current) => {
      const updated = [...current]
      updated.splice(index, 1)
      return updated
    })
  }

  const handlePhotoChange = (index: number, file: File | null) => {
    setPhotoTemplates((current) => {
      const updated = [...current]
      updated[index] = {
        ...updated[index],
        photo: file,
        preview: file ? URL.createObjectURL(file) : "",
      }
      return updated
    })
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return
    setPhotoTemplates((current) => {
      const items = Array.from(current)
      const [reordered] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reordered)
      return items
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Photo Templates:", photoTemplates)
  }

  return (
    <Box w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Update Foto Template
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="photoTemplateList">
              {(provided) => (
                <Accordion allowMultiple {...provided.droppableProps} ref={provided.innerRef}>
                  {photoTemplates.map((template, index) => (
                    <Draggable key={template.id} draggableId={template.id} index={index}>
                      {(provided, snapshot) => (
                        <AccordionItem
                          borderWidth="1px"
                          borderRadius="lg"
                          mb={4}
                          bg={snapshot.isDragging ? "gray.100" : "gray.50"}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <AccordionButton>
                            <Flex align="center" justify="space-between" w="full" userSelect="none">
                              <HStack spacing={3}>
                                {/* Drag handle icon */}
                                <Box
                                  {...provided.dragHandleProps}
                                  cursor="grab"
                                  aria-label="Drag Handle"
                                  _active={{ cursor: "grabbing" }}
                                  color="gray.500"
                                >
                                  <Icon as={MdDragIndicator as ComponentType<any>} />
                                </Box>
                                <Text fontWeight="semibold">Foto Template #{index + 1}</Text>
                              </HStack>

                              <HStack spacing={2}>
                                {photoTemplates.length > 1 && (
                                  <IconButton
                                    aria-label="Delete"
                                    icon={<DeleteIcon />}
                                    size="sm"
                                    colorScheme="red"
                                    onClick={(e) => {
                                      e.stopPropagation() // Prevent accordion toggle
                                      handleRemove(index)
                                    }}
                                  />
                                )}
                                <AccordionIcon />
                              </HStack>
                            </Flex>
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            <FormControl>
                              <FormLabel>Unggah Foto</FormLabel>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handlePhotoChange(index, e.target.files?.[0] || null)}
                              />
                              {template.preview && (
                                <Image
                                  src={template.preview}
                                  alt={`Preview ${index + 1}`}
                                  mt={2}
                                  borderRadius="md"
                                  maxH="150px"
                                />
                              )}
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

          <Button onClick={handleAdd} leftIcon={<AddIcon />} colorScheme="teal">
            Tambah Foto Template
          </Button>

          <Button type="submit" colorScheme="blue">
            Simpan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default PhotoTemplateForm
