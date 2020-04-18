import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 25,
          term: term,
          location: "london city",
        },
      })
      console.log(response)
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage(`error: ${err.message}`)
    }
  }

  useEffect(() => {
    searchApi("wine bar")
  }, [])

  return [searchApi, results, errorMessage]
}
