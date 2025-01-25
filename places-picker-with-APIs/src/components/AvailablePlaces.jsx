import { useEffect, useState } from 'react';
import ErrorPage from './Error.jsx';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/places');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const placesData = await response.json();
        setAvailablePlaces((prev) => {
          if (!placesData) {
            return prev;
          }
          return placesData.places;
        });
      } catch (error) {
        setError({message: error.message || 'Could not fetch places. Try again later.'});
      }
      setIsLoading(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return (
      <ErrorPage
        title="An error occurred!"
        message={error.message}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
