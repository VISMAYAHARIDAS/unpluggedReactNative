// src/service/api.ts

export const fetchData = async (endpoint: string): Promise<any> => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  