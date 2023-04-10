import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Events app and booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <EventList items={featuredEvents} />
        </div>
      </main>
    </>
  );
}
