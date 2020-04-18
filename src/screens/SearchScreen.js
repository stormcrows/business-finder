import React, { useState } from "react"
import { Text, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price)

  const price1 = filterResultsByPrice("£")
  const price2 = filterResultsByPrice("££")
  const price3 = filterResultsByPrice("£££")

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        {price1.length ? (
          <ResultsList results={price1} title="Low price" />
        ) : null}
        {price2.length ? (
          <ResultsList results={price2} title="Medium price" />
        ) : null}
        {price3.length ? (
          <ResultsList results={price3} title="High price" />
        ) : null}
      </ScrollView>
    </>
  )
}

export default SearchScreen
