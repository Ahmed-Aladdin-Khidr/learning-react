import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError: true, message: 'Failed to fetch events'};
    throw new Response(JSON.stringify({ message: "Failed to fetch events" }), {
      status: 500,
    });
  }
  const data = await response.json();
  const events = data.events;
  return events;
}
export function loader() {
  return {
    events: loadEvents(),
  };
}
