import React from "react";

// Chakra imports
import {
  Box,
} from "@chakra-ui/react";

// Custom components
import StatisticCard from "./components/StatisticCard";
import SearchButton from "./components/SearchButton";
import AddButton from "./components/AddButton";
import { Flex } from "antd";
import ComplexTable from "./components/ComplexTable";
import { columnsDataComplex } from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json"

export default function Birth() {

  const handleSearch = (value) => {
    console.log('Search for:', value);
    // Logique de recherche ici (par exemple, appel API, filtrage des données, etc.)
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "100px" }}>
      {/* Main Fields */}
      
        
        <StatisticCard />
        <br/><br/>
        <Flex>
          <SearchButton onSearch={handleSearch} />
          <AddButton />
        </Flex>
        <br/><br /><br /><br />
        <ComplexTable
        columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        

      {/* Delete Product */}
    </Box>
  );
}
