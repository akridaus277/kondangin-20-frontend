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

interface Event {
  id: string
  eventName: string
  location: string
  date: string
  startTime: string
  endTime: string
  mapsLink: string
  icon: string
  timeZone: string
}

const createEmptyEvent = (): Event => ({
  id: crypto.randomUUID(),
  eventName: "",
  location: "",
  date: "",
  startTime: "",
  endTime: "",
  mapsLink: "",
  icon: "",
  timeZone: "",
})

const EventScheduleForm = () => {
  const [events, setEvents] = useState<Event[]>([createEmptyEvent()])

  const handleAdd = () => {
    setEvents([...events, createEmptyEvent()])
  }

  const handleRemove = (index: number) => {
    setEvents((current) => {
      const updated = [...current]
      updated.splice(index, 1)
      return updated
    })
  }

  const handleChange = (index: number, field: keyof Event, value: any) => {
    setEvents((current) => {
      const updated = [...current]
      updated[index] = {
        ...updated[index],
        [field]: value,
      }
      return updated
    })
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return
    setEvents((current) => {
      const items = Array.from(current)
      const [reordered] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reordered)
      return items
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Events:", events)
  }

  return (
    <Box w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Update Susunan Acara
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="eventList">
              {(provided) => (
                <Accordion allowMultiple {...provided.droppableProps} ref={provided.innerRef}>
                  {events.map((event, index) => (
                    <Draggable key={event.id} draggableId={event.id} index={index}>
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
                                  <Icon as={MdDragIndicator as ComponentType<any>}></Icon>
                                </Box>
                                <Text fontWeight="semibold">Acara #{index + 1}</Text>
                              </HStack>

                              <HStack spacing={2}>
                                {events.length > 1 && (
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
                            <FormControl mt={2}>
                              <FormLabel>Nama Acara</FormLabel>
                              <Input
                                value={event.eventName}
                                onChange={(e) => handleChange(index, "eventName", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Lokasi Acara</FormLabel>
                              <Input
                                value={event.location}
                                onChange={(e) => handleChange(index, "location", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Tanggal Acara</FormLabel>
                              <Input
                                type="date"
                                value={event.date}
                                onChange={(e) => handleChange(index, "date", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Jam Mulai Acara</FormLabel>
                              <Input
                                type="time"
                                value={event.startTime}
                                onChange={(e) => handleChange(index, "startTime", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Jam Selesai Acara</FormLabel>
                              <Input
                                type="time"
                                value={event.endTime}
                                onChange={(e) => handleChange(index, "endTime", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Link Maps Lokasi Acara</FormLabel>
                              <Input
                                value={event.mapsLink}
                                onChange={(e) => handleChange(index, "mapsLink", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Ikon</FormLabel>
                              <Input
                                value={event.icon}
                                onChange={(e) => handleChange(index, "icon", e.target.value)}
                              />
                            </FormControl>

                            <FormControl mt={2}>
                              <FormLabel>Zona Waktu</FormLabel>
                              <Select
                                value={event.timeZone}
                                onChange={(e) => handleChange(index, "timeZone", e.target.value)}
                              >
                                <option value="">Pilih Zona Waktu</option>
                                <option value="GMT-12:00">GMT-12:00</option>
                                <option value="GMT-11:00">GMT-11:00</option>
                                <option value="GMT-10:00">GMT-10:00</option>
                                <option value="GMT-9:00">GMT-9:00</option>
                                <option value="GMT-8:00">GMT-8:00</option>
                                <option value="GMT-7:00">GMT-7:00</option>
                                <option value="GMT-6:00">GMT-6:00</option>
                                <option value="GMT-5:00">GMT-5:00</option>
                                <option value="GMT-4:00">GMT-4:00</option>
                                <option value="GMT-3:00">GMT-3:00</option>
                                <option value="GMT-2:00">GMT-2:00</option>
                                <option value="GMT-1:00">GMT-1:00</option>
                                <option value="GMT+0:00">GMT+0:00</option>
                                <option value="GMT+1:00">GMT+1:00</option>
                                <option value="GMT+2:00">GMT+2:00</option>
                                <option value="GMT+3:00">GMT+3:00</option>
                                <option value="GMT+4:00">GMT+4:00</option>
                                <option value="GMT+5:00">GMT+5:00</option>
                                <option value="GMT+6:00">GMT+6:00</option>
                                <option value="GMT+7:00">GMT+7:00</option>
                                <option value="GMT+8:00">GMT+8:00</option>
                                <option value="GMT+9:00">GMT+9:00</option>
                                <option value="GMT+10:00">GMT+10:00</option>
                                <option value="GMT+11:00">GMT+11:00</option>
                                <option value="GMT+12:00">GMT+12:00</option>
                              </Select>
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

          <Button onClick={handleAdd} leftIcon={<AddIcon />} colorScheme=" teal">
            Tambah Acara
          </Button>

          <Button type="submit" colorScheme="blue">
            Simpan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default EventScheduleForm