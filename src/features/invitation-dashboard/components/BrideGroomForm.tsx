import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
  HStack,
  IconButton,
  Heading,
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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { ComponentType, useState } from "react"
import { MdDragIndicator } from "react-icons/md"

interface BrideGroom {
  id: string
  photo: File | null
  preview: string
  fullName: string
  nickname: string
  information: string
  instagram: string
  tiktok: string
  facebook: string
}

const createEmptyBrideGroom = (): BrideGroom => ({
  id: crypto.randomUUID(),
  photo: null,
  preview: "",
  fullName: "",
  nickname: "",
  information: "",
  instagram: "",
  tiktok: "",
  facebook: "",
})

const BrideGroomForm = () => {
  const [brideGrooms, setBrideGrooms] = useState<BrideGroom[]>([createEmptyBrideGroom()])

  const handleAdd = () => {
    if (brideGrooms.length >= 2) return
    setBrideGrooms([...brideGrooms, createEmptyBrideGroom()])
  }

  const handleRemove = (index: number) => {
    setBrideGrooms((current) => {
      const updated = [...current]
      updated.splice(index, 1)
      return updated
    })
  }

  const handleChange = (index: number, field: keyof BrideGroom, value: any) => {
    setBrideGrooms((current) => {
      const updated = [...current]
      updated[index] = {
        ...updated[index],
        [field]: value,
      }
      return updated
    })
  }

  const handlePhotoChange = (index: number, file: File | null) => {
    setBrideGrooms((current) => {
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
    setBrideGrooms((current) => {
      const items = Array.from(current)
      const [reordered] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reordered)
      return items
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("BrideGrooms:", brideGrooms)
  }

  return (
    <Box w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md" overflow="auto">
      <Heading size="md" mb={4}>
        Update Mempelai
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="brideGroomList">
              {(provided) => (
                <Accordion allowMultiple {...provided.droppableProps} ref={provided.innerRef}>
                  {brideGrooms.map((bride, index) => (
                    <Draggable key={bride.id} draggableId={bride.id} index={index}>
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
                                  Mempelai #{index + 1}
                                </Text>
                              </HStack>

                              <HStack spacing={2}>
                                {brideGrooms.length > 1 && (
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
                            <FormControl>
                              <FormLabel>Foto Mempelai</FormLabel>
                              <Input
                                bgColor={"white"}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handlePhotoChange(index, e.target.files?.[0] || null)}
                              />
                              {bride.preview && (
                                <Image
                                  src={bride.preview}
                                  alt={`Preview ${index + 1}`}
                                  mt={2}
                                  borderRadius="md"
                                  maxH="150px"
                                />
                              )}
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Nama Lengkap</FormLabel>
                              <Input
                                bgColor={"white"}
                                value={bride.fullName}
                                onChange={(e) => handleChange(index, "fullName", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Nama Panggilan</FormLabel>
                              <Input
                                bgColor={"white"}
                                value={bride.nickname}
                                onChange={(e) => handleChange(index, "nickname", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Informasi Mempelai</FormLabel>
                              <Box border="1px solid" borderColor="gray.200" rounded="md" p={2} minH="120px">
                                <CKEditor
                                  editor={ClassicEditor as any}
                                  data={bride.information}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    handleChange(index, "information", data);
                                  }}
                                />
                              </Box>
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Instagram</FormLabel>
                              <Input
                                bgColor={"white"}
                                value={bride.instagram}
                                onChange={(e) => handleChange(index, "instagram", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>TikTok</FormLabel>
                              <Input
                                bgColor={"white"}
                                value={bride.tiktok}
                                onChange={(e) => handleChange(index, "tiktok", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Facebook</FormLabel>
                              <Input
                                bgColor={"white"}
                                value={bride.facebook}
                                onChange={(e) => handleChange(index, "facebook", e.target.value)}
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

          {brideGrooms.length < 2 && (
            <Button onClick={handleAdd} leftIcon={<AddIcon />} colorScheme="teal">
              Tambah Mempelai
            </Button>
          )}

          <Button type="submit" colorScheme="blue">
            Simpan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default BrideGroomForm