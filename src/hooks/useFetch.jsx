import { useEffect, useState } from "react";

const useFetch = (url) => {
  // Initializing the response
  const [response, setResponse] = useState({
    loading: false,
    data: [],
    error: {}
  })
  
  // Fetching all the data on page reload
  useEffect(() => {
    setResponse({...response, loading: true})

    // Utilized no caching
    fetch(url, {
      method: "GET",
      cache: "no-cache"
    }).then((res) => {
      res.json()
    }).then((res) => {
      setResponse({...response, loading: false, data: res})
    }).catch((err) => {
      setResponse({...response, error: err})
    }).finally(() => {
      setResponse({...response, loading: false})
    })

  }, [response, url])

  // Destructured the return
  return [response.loading, response.data, response.error]
}

export default useFetch;