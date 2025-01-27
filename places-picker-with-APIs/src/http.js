export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }
  const placesData = await response.json();
  return placesData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ places }),
  });
  if (!response.ok) {
    throw new Error("Failed to update places.");
  }
  const resData = await response.json();
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  if (!response.ok) {
    throw new Error("Failed to fetch user places.");
  }
  const placesData = await response.json();
  return placesData.places;
}