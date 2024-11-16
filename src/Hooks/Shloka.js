import React, { useState, useEffect } from 'react';

export default function useShloka(id, subid = null) {
  const [shlokas, setShlokas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const fetchData = async () => {
      try {
        const url = subid 
          ? `http://localhost:3000/balKand/${id}/${subid}` 
          : `http://localhost:3000/balKand/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch shlokas');
        }
        const data = await response.json();

        if (isMounted) {
          // Handle both array and single object
          if (Array.isArray(data)) {
            setShlokas(data);
          } else {
            setShlokas([data]);
          }
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, [id, subid]);

  return { shlokas, error };
}