import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return <>{event.title}</>;
};

export default EventDetailPage;
