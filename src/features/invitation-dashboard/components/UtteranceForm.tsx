// src/components/invitation/UtteranceForm.tsx

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Heading,
} from "@chakra-ui/react"
import { useState } from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const UtteranceForm = () => {
  const [openingGreeting, setOpeningGreeting] = useState("")
  const [closingGreeting, setClosingGreeting] = useState("")
  const [prayerGreeting, setPrayerGreeting] = useState("")
  const [giftGreeting, setGiftGreeting] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: handle save logic (e.g. send to API)
    console.log({
      openingGreeting,
      closingGreeting,
      prayerGreeting,
      giftGreeting,
    })
  }

  return (
    <Box
      w="full"
      maxW="8xl"
      mx="auto"
      p={6}
      bg="white"
      rounded="lg"
      shadow="md"
    >
      <Heading size="md" mb={4}>Update Ucapan</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">

          <FormControl isRequired>
            <FormLabel>Ucapan Pembuka</FormLabel>
            <CKEditor
              editor={ClassicEditor as any}
              data="<p>Masukkan ucapan pembuka...</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setOpeningGreeting(data);
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Ucapan Penutup</FormLabel>
            <CKEditor
              editor={ClassicEditor as any}
              data="<p>Masukkan ucapan penutup...</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setClosingGreeting(data);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Ucapan Doa</FormLabel>
            <CKEditor
              editor={ClassicEditor as any}
              data="<p>Masukkan ucapan doa...</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setPrayerGreeting(data);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Ucapan Hadiah</FormLabel>
            <CKEditor
              editor={ClassicEditor as any}
              data="<p>Masukkan ucapan hadiah...</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setGiftGreeting(data);
              }}
            />
          </FormControl>

          <Button colorScheme="teal" type="submit" mt={4}>
            Simpan Perubahan
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default UtteranceForm
