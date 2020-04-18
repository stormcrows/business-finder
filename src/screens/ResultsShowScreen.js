import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import yelp from "../api/yelp"

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam("id")

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View style={styles.container}>
      {result.name ? <Text style={styles.name}>{result.name}</Text> : null}
      {result.location.display_address ? (
        <Text style={styles.text}>
          {result.location.display_address.join("\n")}
        </Text>
      ) : null}
      {result.display_phone ? (
        <Text style={styles.text}>Phone: {result.display_phone}</Text>
      ) : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return item !== "" ? (
            <Image style={styles.image} source={{ uri: item }} />
          ) : null
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    marginBottom: 15,
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
  },
})

export default ResultsShowScreen
