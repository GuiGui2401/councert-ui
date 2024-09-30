import {
  Box,
  Button,
  Flex,
  Icon,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import * as React from 'react';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { useState } from 'react';

const columnHelper = createColumnHelper();

export default function ComplexTable(props) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState([]);
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  let defaultData = tableData;

  // État pour gérer les données de la ligne sélectionnée
  const [selectedRowData, setSelectedRowData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Fonction appelée au clic sur le bouton "Details"
  const handleDetailsClick = (rowData) => {
    setSelectedRowData(rowData); // Enregistre les données de la ligne sélectionnée
    onOpen(); // Ouvre la modale
  };

  const columns = [
    columnHelper.accessor('no', {
      id: 'no',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          No.
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('act', {
      id: 'act',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          Act No.
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          NAME
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          STATUS
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Icon
            w="24px"
            h="24px"
            me="5px"
            color={
              info.getValue() === 'Completed'
                ? 'green.500'
                : info.getValue() === 'In route'
                  ? 'red.500'
                  : info.getValue() === 'Pending'
                    ? 'blue.500'
                    : null
            }
            as={
              info.getValue() === 'Completed'
                ? MdCheckCircle
                : info.getValue() === 'In route'
                  ? MdCancel
                  : info.getValue() === 'Pending'
                    ? MdOutlineError
                    : null
            }
          />
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('earning', {
      id: 'earning',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          Earning (XAF)
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()} XAF
        </Text>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          DATE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => (
        <Text justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
          PROGRESS
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Progress variant="table" colorScheme="brandScheme" h="8px" w="108px" value={info.getValue()} />
        </Flex>
      ),
    }),
    {
      id: 'details',
      header: '', // Colonne sans nom
      cell: (info) => (
        <Button
          colorScheme="brandScheme" // Couleur verte
          borderRadius="10px" // Définit le radius du bouton
          onClick={() => handleDetailsClick(info.row.original)} // Gérer l'affichage des détails
        >
          Details
        </Button>
      ),
    },
  ];

  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          Certificates list
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id} colSpan={header.colSpan} pe="10px" borderColor={borderColor} cursor="pointer" onClick={header.column.getToggleSortingHandler()}>
                    <Flex justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{ asc: '', desc: '' }[header.column.getIsSorted()] ?? null}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} fontSize={{ sm: '14px' }} minW={{ sm: '150px', md: '200px', lg: 'auto' }} borderColor="transparent">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      {/* Modale pour afficher les détails */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Détails de l'acte</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedRowData ? (
              <Box>
                <Text><strong>No:</strong> {selectedRowData.no}</Text>
                <Text><strong>Act No:</strong> {selectedRowData.act}</Text>
                <Text><strong>Name:</strong> {selectedRowData.name}</Text>
                <Text><strong>Status:</strong> {selectedRowData.status}</Text>
                <Text><strong>Earning:</strong> {selectedRowData.earning} XAF</Text>
                <Text><strong>Date:</strong> {selectedRowData.date}</Text>
              </Box>
            ) : (
              <Text>Aucune donnée sélectionnée.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brandScheme" onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
