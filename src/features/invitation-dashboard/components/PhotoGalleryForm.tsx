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
  Grid,
  GridItem,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react"
import { AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import React, { ComponentType, useState } from "react"
import { MdDragIndicator } from "react-icons/md"

interface GalleryPhoto {
  id: string
  photo: File | null
  preview: string
}

const createEmptyGalleryPhoto = (): GalleryPhoto => ({
  id: crypto.randomUUID(),
  photo: null,
  preview: "",
})

const PhotoGalleryForm = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([createEmptyGalleryPhoto()])

  const handleAdd = () => {
    setGalleryPhotos([...galleryPhotos, createEmptyGalleryPhoto()])
  }

  const handleRemove = (index: number) => {
    setGalleryPhotos((current) => {
      const updated = [...current]
      updated.splice(index, 1)
      return updated
    })
  }

  const handlePhotoChange = (index: number, file: File | null) => {
    setGalleryPhotos((current) => {
      const updated = [...current]
      updated[index] = {
        ...updated[index],
        photo: file,
        preview: file ? URL.createObjectURL(file) : "",
      }
      return updated
    })
  }

  // Swap positions of dragged and target items instead of moving one over others
  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    if (sourceIndex === destinationIndex) return

    setGalleryPhotos((current) => {
      const updated = [...current]

      // Swap items at sourceIndex and destinationIndex
      const temp = updated[sourceIndex]
      updated[sourceIndex] = updated[destinationIndex]
      updated[destinationIndex] = temp

      return updated
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Gallery Photos:", galleryPhotos)
  }

  return (
    <Box w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Update Galeri Foto
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="galleryPhotoList" direction="horizontal">
              {(provided) => (
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={4}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {galleryPhotos.map((photo, index) => (
                    <Draggable key={photo.id} draggableId={photo.id} index={index}>
                      {(provided, snapshot) => (
                        <GridItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          bg={snapshot.isDragging ? "gray.100" : "gray.50"}
                          borderWidth="1px"
                          borderRadius="lg"
                          p={2}
                          position="relative"
                        >
                          <Flex align="center" justify="space-between" mb={2}>
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
                              <Text fontWeight="semibold">Foto #{index + 1}</Text>
                            </HStack>

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
                          </Flex>

                          <FormControl>
                            <FormLabel>Unggah Foto</FormLabel>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handlePhotoChange(index, e.target.files?.[0] || null)}
                            />
                            {photo.preview && (
                              <Image
                                src={photo.preview}
                                alt={`Preview ${index + 1}`}
                                mt={2}
                                borderRadius="md"
                                maxH="150px"
                                objectFit="cover"
                              />
                            )}
                          </FormControl>
                        </GridItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>

          <Button onClick={handleAdd} leftIcon={<AddIcon />} colorScheme="teal">
            Tambah Foto Galeri
          </Button>

          <Button type="submit" colorScheme="blue">
            Simpan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default PhotoGalleryForm

