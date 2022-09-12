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
          Thanks for letting us know if you can join us!
          <br></br>
          Please click on <a href="https://forms.gle/djkWeDfRQFZLxMF77"> this link </a>{" "}
          to RSVP by the 30th September{" "}
        </div>
      </section>
    </div>
  );
}

export default Page;
