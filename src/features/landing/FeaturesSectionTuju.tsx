import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, Icon, ListItem, OrderedList, Text } from "@chakra-ui/react"
import { useState } from "react";

const faqData = [
    {
        question: "Umum",
        answer: (
            <>
                <OrderedList spacing={2}>
                    <ListItem>
                        <Text fontWeight="bold">Apa itu undangan digital?</Text>
                        <Text mt={1}>
                            Undangan digital adalah undangan pernikahan, ulang tahun, atau acara lainnya yang dibuat dalam format digital dan dapat diakses melalui tautan/link secara online.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold">Apa saja jenis undangan digital yang tersedia?</Text>
                        <Text mt={1}>
                            Kami menyediakan undangan pernikahan, ulang tahun, aqiqah, khitanan, dan acara lainnya, baik dalam bentuk website, video, maupun e-invitation interaktif.
                        </Text>
                    </ListItem>
                

                </OrderedList>
            </>
        ),
    },
    {
        question: "Fitur & Kustomisasi",
        answer: (
            <>
                <OrderedList spacing={2}>
                    <ListItem>
                        <Text fontWeight="bold">
                            Apa saja fitur yang tersedia dalam undangan digital?
                        </Text>
                        <Text mt={1}>
                            Fitur kami meliputi: Hitung mundur acara, Galeri foto, Peta lokasi, RSVP online, Musik latar, Buku tamu, Link Google Calendar, Tautan ke live streaming (jika ada)
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apakah desain undangan bisa disesuaikan?</Text>
                        <Text mt={1}>
                            Ya, Anda bisa menyesuaikan tema, warna, foto, dan kata-kata undangan sesuai keinginan.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apakah bisa menambahkan lebih dari satu acara? (akad & resepsi)</Text>
                        <Text mt={1}>Bisa. Kami mendukung penambahan jadwal acara ganda dalam satu undangan.</Text>
                    </ListItem>

                </OrderedList>
            </>
        ),
    },
    {
        question: "Proses Pemesanan",
        answer: (
            <>
                <OrderedList spacing={2}>
                    <ListItem>
                        <Text fontWeight={"bold"}>Bagaimana cara memesan undangan digital?</Text>
                        <Text mt={1}>Anda bisa memesan melalui formulir pemesanan di website kami, atau hubungi kami langsung via WhatsApp/Instagram.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Berapa lama proses pembuatan undangan?</Text>
                        <Text mt={1}>Rata-rata 1–30 menit setelah semua data dan foto dimasukan ke sistem kami.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apakah saya bisa melihat preview sebelum undangan dipublikasikan?</Text>
                        <Text mt={1}>Tentu, kami akan mengirimkan preview terlebih dahulu untuk Anda cek sebelum undangan siap dibagikan.</Text>
                    </ListItem>

                </OrderedList>
            </>
        ),
    },
    {
        question: "Harga & Pembayaran",
        answer: (
            <>
                <OrderedList spacing={2}>
                    <ListItem>
                        <Text fontWeight={"bold"}>Berapa harga pembuatan undangan digital?</Text>
                        <Text mt={1}>Harga bervariasi tergantung jenis dan fitur yang dipilih. Mulai dari Rp90.000 – Rp190.000. Cek halaman harga untuk detailnya.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apa metode pembayaran yang tersedia?</Text>
                        <Text mt={1}>Kami menerima pembayaran melalui transfer bank, QRIS.</Text>
                    </ListItem>
                    
                </OrderedList>
            </>
        ),
    },
    {
        question: "Pengiriman & Pembagian",
        answer: (
            <>
            <OrderedList spacing={2}>
            <ListItem>
                        <Text fontWeight={"bold"}>Bagaimana saya membagikan undangan digital ke tamu?</Text>
                        <Text mt={1}>Anda akan menerima link yang bisa dibagikan melalui WhatsApp, media sosial, atau email.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apakah undangan ini bisa dibuka di semua perangkat?</Text>
                        <Text mt={1}>Ya, undangan kami responsif dan dapat diakses di smartphone, tablet, maupun desktop.</Text>
                    </ListItem>
          
            </OrderedList>
            </>
        ),
    },
    {
        question: "Lainnya",
        answer: (
            <>
            <OrderedList spacing={2}>
            <ListItem>
                        <Text fontWeight={"bold"}>Apakah undangan digital bisa diedit setelah jadi?</Text>
                        <Text mt={1}>Bisa, kami memberikan unlimited revisi gratis.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apakah undangan memiliki masa aktif/link kadaluarsa?</Text>
                        <Text mt={1}>Ya,undangan aktif selamanya</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={"bold"}>Apakah bisa request undangan dalam dua bahasa?</Text>
                        <Text mt={1}>Bisa. Kami menyediakan opsi undangan bilingual (misalnya Bahasa Indonesia dan Inggris).</Text>
                    </ListItem>
            </OrderedList>
            </>
        ),
    },
];


const FeaturesSectionTuju = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <>
            <Box pt={16} pb={0} position="relative" px={{ base: 4, md: 8 }}>
                <Heading
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontWeight="bold"
                    mb={16}
                    textAlign="center"
                    color="blue.600"
                >
                    FAQ{' '}
                    <Text as="span" color="cyan.300">
                        Kondangin
                    </Text>
                </Heading>
                <Accordion allowToggle index={openIndex !== null ? openIndex : undefined}>
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} border="none" mb={3} borderRadius="md" boxShadow={"lg"} bg="white">
                            {({ isExpanded }) => (
                                <>
                                    <AccordionButton
                                        px={6}
                                        py={5}
                                        onClick={() => setOpenIndex(isExpanded ? null : index)}
                                        _expanded={{ bg: "gray.200" }}
                                        justifyContent="space-between"
                                    >
                                        <Box fontWeight="semibold" textAlign="left" >
                                            {faq.question}
                                        </Box>
                                        <Icon as={isExpanded ? MinusIcon : AddIcon} color="cyan.400" />
                                    </AccordionButton>
                                    <AccordionPanel mt={3} px={6} pb={6} pt={0} fontSize="sm" color="gray.700">
                                        {faq.answer}
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </>
    )
}

export default FeaturesSectionTuju;