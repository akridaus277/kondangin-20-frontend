import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Select,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaGift, FaMobileAlt, FaShareAlt } from 'react-icons/fa';
// import heroImage from '../assets/hero-kondangin.png'; // Ganti dengan ilustrasi yang sesuai
import Navbar from '@/components/ui/navbar';
import KondanginLogo from '@/assets/kondangin-logo.webp';
import Slider from "react-slick";
import {
  HeroComponent,
  InvitationThemeExampleComponent,
  InvitationCategoryExampleComponent,
  FeaturedFeature,
  SummaryListFeature,
  PriceList,
  ResellerProgramSection
} from "@/pages/landing/component";

export default function Landing() {
  return (
    <Box bg="gray.50" minH="100vh" pb={10} >
      <Navbar />
      <Box bg="gray.50" minH="100vh" px={20} >
        {/* Hero */}
        <HeroComponent/>

        {/* Contoh Template Undangan */}
        <InvitationThemeExampleComponent/>

        {/* Undangan yang Telah Dibuat */}
        <InvitationCategoryExampleComponent/>

        {/* Fitur Unggulan */}
        <FeaturedFeature/>

        {/* Summary List Fitur */}
        <SummaryListFeature/>

        {/* Price List */}
        <PriceList/>

        {/* Program Reseller */}
        <ResellerProgramSection/>


      </Box>
      
    </Box>
  );
}
