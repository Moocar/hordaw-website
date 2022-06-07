import Head from "next/head";

function Page() {
  return (
    <div class="padded-content">
      <Head>
        <title>RSVP</title>
      </Head>
      <h1>RSVP</h1>
      <section>
        <div>
          Please click on <a href="https://gumtree.rsvp.com.au/"> this link </a>{" "}
          to RSVP by the 30th September{" "}
        </div>
      </section>
    </div>
  );
}

export default Page;
