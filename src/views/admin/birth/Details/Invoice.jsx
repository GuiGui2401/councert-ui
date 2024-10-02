import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import nb1 from 'assets/img/Birth/nb1.png'; // Assurez-vous que l'image est correctement importée

const Invoice = ({ rowData }) => {
  // Définition des styles du PDF
  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    section: {
      marginBottom: 10,
      padding: 10,
    },
    image: {
      width: '100%',
      height: 200,
      objectFit: 'cover',
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      marginBottom: 6,
    },
    label: {
      fontWeight: 'bold',
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Certificate type: {rowData.certificateType || "Birth certificate"}</Text>
          <Text style={styles.text}><Text style={styles.label}>Act Number:</Text> {rowData.act || "____________________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>NAME OF CHILD:</Text> {rowData.name || "____________________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>BORN ON THE:</Text> {rowData.date || "________________"} <Text style={styles.label}>AT:</Text> {rowData.status || "________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>Mr:</Text> {rowData.mr || "________________"} <Text style={styles.label}>AGED:</Text> {rowData.age || "________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>BORN ON THE:</Text> {rowData.birthDate || "________________"} <Text style={styles.label}>AT:</Text> {rowData.birthPlace || "________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>OCCUPATION:</Text> {rowData.occupation || "________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>RESIDENT AT:</Text> {rowData.residence || "________________"}</Text>
          <Text style={styles.text}><Text style={styles.label}>SON/DAUGHTER OF:</Text> {rowData.parentName || "________________"}</Text>
        </View>

        <View style={styles.section}>
          <Image style={styles.image} src={rowData.image || nb1} />
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
