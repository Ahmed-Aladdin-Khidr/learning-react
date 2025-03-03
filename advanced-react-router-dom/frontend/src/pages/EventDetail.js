import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event}/>;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to fetch event" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
