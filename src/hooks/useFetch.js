import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((response) => {
        return setState({
          loading: false,
          error: null,
          data: response,
        });
      });
  }, [url]);

  return state;
};
