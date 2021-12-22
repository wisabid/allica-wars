export const allicaFetch = async (url:string): Promise<any> => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  };
  