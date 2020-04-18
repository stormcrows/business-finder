import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"

const ResultsDetail = ({ result }) => (
  <View style={styles.container}>
    {result.image_url ? (
      <Image style={styles.image} source={{ uri: result.image_url }} />
    ) : null}
    <Text style={styles.name}>{result.name}</Text>
    <Text>
      {result.rating} Stars, {result.review_count} Reviews
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 15,
  },
  name: {
    fontWeight: "bold",
  },
})

export default ResultsDetail
