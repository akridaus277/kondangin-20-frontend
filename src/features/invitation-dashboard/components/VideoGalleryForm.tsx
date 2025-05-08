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
  Select,
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

interface VideoGallery {
  id: string
  platform: string
  link: string
}

const createEmptyVideoGallery = (): VideoGallery => ({
  id: crypto.randomUUID(),
  platform: "",
  link: "",
})

const VideoGalleryForm = () => {
  const [videoGalleries, setVideoGalleries] = useState<VideoGallery[]>([createEmptyVideoGallery()])

  const handleAdd = () => {
    setVideoGalleries([...videoGalleries, createEmptyVideoGallery()])
  }

  const handleRemove = (index: number) => {
    setVideoGalleries((current) => {
      const updated = [...current]
      updated.splice(index, 1)
      return updated
    })
  }

  const handleChange = (index: number, field: keyof VideoGallery, value: any) => {
    setVideoGalleries((current) => {
      const updated = [...current]
      updated[index] = {
        ...updated[index],
        [field]: value,
      }
      return updated
    })
  }

  // Swap the dragged and target items on drag end
  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    if (sourceIndex === destinationIndex) return

    setVideoGalleries((current) => {
      const updated = [...current]

      // Swap the source and destination items
      const temp = updated[sourceIndex]
      updated[sourceIndex] = updated[destinationIndex]
      updated[destinationIndex] = temp

      return updated
    })
  }

  // Helper function to get video embed URL
  const getEmbedUrl = (platform: string, link: string) => {
    switch (platform) {
      case "youtube":
        const youtubeId = new URL(link).searchParams.get("v");
        return youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : "";
      case "tiktok":
        // TikTok embed requires video ID from URL - simplistic approach:
        const tiktokId = link.split("/").filter(Boolean).pop() || "";
        return tiktokId ? `https://www.tiktok.com/embed/${tiktokId}` : "";
      default:
        return "";
    }
  }
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Video Galleries:", videoGalleries)
  }

  return (
    <Box w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Update Galeri Video
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="videoGalleryList" direction="horizontal">
              {(provided) => (
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={4}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {videoGalleries.map((video, index) => (
                    <Draggable key={video.id} draggableId={video.id} index={index}>
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
                              <Box
                                {...provided.dragHandleProps}
                                cursor="grab"
                                aria-label="Drag Handle"
                                _active={{ cursor: "grabbing" }}
                                color="gray.500"
                              >
                                <Icon as={MdDragIndicator as ComponentType<any>} />
                              </Box>
                              <Text fontWeight="semibold">Video #{index + 1}</Text>
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
                            <FormLabel>Platform</FormLabel>
                            <Select
                              value={video.platform}
                              onChange={(e) => handleChange(index, "platform", e.target.value)}
                            >
                              <option value="">Pilih Platform</option>
                              <option value="youtube">YouTube</option>
                              <option value="tiktok">TikTok</option>
                            </Select>
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel>Link Video</FormLabel>
                            <Input
                              type="url"
                              value={video.link}
                              onChange={(e) => handleChange(index, "link", e.target.value)}
                              placeholder="Masukkan link video"
                            />
                          </FormControl>

                          {video.platform && video.link && (
                            <Box mt={4}>
                              <iframe
                                width="100%"
                                height="200"
                                src={getEmbedUrl(video.platform, video.link)}
                                title={`Video ${index + 1} Embed`}
                                frameBorder="0"
                                allowFullScreen
                              />
                            </Box>
                          )}
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
            Tambah Video Galeri
          </Button>

          <Button type="submit" colorScheme="blue">
            Simpan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default VideoGalleryForm
