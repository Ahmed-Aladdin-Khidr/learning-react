import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [receivedData, setReceivedData] = useState(initialValue);
  const [errorOccurred, setErrorOccurred] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setReceivedData(data);
      } catch (error) {
        setErrorOccurred({
          message: error.message || "Failed to fetch data.",
        });
        setReceivedData(receivedData);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [fetchFn]);
  return { receivedData, errorOccurred, isLoading, setReceivedData };
}
