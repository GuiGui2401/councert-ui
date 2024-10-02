import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text, Button, Image, Flex } from '@chakra-ui/react';
import { FaEdit, FaTrash, FaPrint } from 'react-icons/fa';
import nb1 from "assets/img/Birth/nb1.png";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Invoice from './Invoice'; // Composant PDF
import { saveAs } from 'file-saver';
import { BlobProvider } from '@react-pdf/renderer';

const BirthDetails = () => {
  const location = useLocation();
  const rowData = location.state?.rowData || {}; // Récupère les données transmises via le lien

  const handleShare = async (blob) => {
  await saveAs(blob, 'birth_certificate.pdf');
  window.location.href = `mailto:?subject=${encodeURIComponent('Certificat de naissance')}&body=${encodeURIComponent('Veuillez trouver ci-joint le certificat de naissance')}`;
};

  return (
    <Box p={8} bg="gray.50" borderRadius="md" shadow="lg" mt={40}>
      <Flex justify="space-between">
        {/* Section gauche avec les détails du certificat */}
        <Box flex="1" pr={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={6}>
            Certificate type: {rowData.certificateType || "Birth certificate"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>Act Number:</strong> {rowData.act || "____________________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>NAME OF CHILD:</strong> {rowData.name || "____________________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>BORN ON THE:</strong> {rowData.date || "________________"} <strong>AT:</strong> {rowData.status || "________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>Mr:</strong> {rowData.mr || "________________"} <strong>AGED:</strong> {rowData.age || "________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>BORN ON THE:</strong> {rowData.birthDate || "________________"} <strong>AT:</strong> {rowData.birthPlace || "________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>OCCUPATION:</strong> {rowData.occupation || "________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>RESIDENT AT:</strong> {rowData.residence || "________________"}
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>SON/DAUGHTER OF:</strong> {rowData.parentName || "________________"}
          </Text>
        </Box>

        {/* Section droite avec les boutons */}
        <Box flex="0" textAlign="center">
          <Flex justify="end">
            <Button
              leftIcon={<FaEdit />}
              colorScheme="brand"
              variant="solid"
              size="lg"
              borderRadius="10px"
              marginRight={20}
              mb={4}
            >
              Modifier
            </Button>
            
            <Button
              leftIcon={<FaTrash />}
              colorScheme="redButton"
              variant="solid"
              size="lg"
              borderRadius="10px"
              mb={4}
            >
              Supprimer
            </Button>
          </Flex>

          <Image
            src={rowData.image || nb1} // Chemin vers l'image du bébé ou une image par défaut
            alt="Baby Image"
            boxSize="350px"
            objectFit="cover"
            borderRadius="md"
            mb={6}
          />

<Button
  leftIcon={<FaPrint />}
  colorScheme="brandScheme"
  variant="solid"
  size="lg"
  borderRadius="10px"
  mb={4}
>
  <BlobProvider document={<Invoice rowData={rowData} />}>
    {({ url }) => (
      <a href={url} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
        Print certificate
      </a>
    )}
  </BlobProvider>
</Button>
<Flex justify="end" direction="column" align="center">
  {/* Bouton de téléchargement PDF */}
  <PDFDownloadLink
    document={<Invoice rowData={rowData} />}
    fileName="birth_certificate.pdf"
  >
    {({ loading }) =>
      loading ? "Loading document..." : (
        <Button colorScheme="green" variant="solid" size="lg" borderRadius="10px">
          Télécharger le PDF
        </Button>
      )
    }
  </PDFDownloadLink>

  {/* Bouton de partage PDF */}
  <BlobProvider document={<Invoice rowData={rowData} />}>
    {({ url, blob }) => (
      <Button
        colorScheme="blue"
        variant="solid"
        size="lg"
        borderRadius="10px"
        mt={4}
        onClick={() => handleShare(blob)}
      >
        Partager le certificat
      </Button>
    )}
  </BlobProvider>
</Flex>

        </Box>
      </Flex>
    </Box>
  );
};

export default BirthDetails;
