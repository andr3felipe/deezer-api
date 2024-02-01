export const fetchSearch = async (search: string) => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0492d44ec4msh7a629407f73cdc5p18c887jsn2ff0a62214f1",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
