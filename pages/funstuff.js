import Head from "next/head";

function Page() {
  return (
    <div class="padded-content">
      <Head>
        <title>Wedding Funsies!!!</title>
      </Head>
      <h1>Spotify playlist</h1>
      <section>
        <div>
          Please join the wedding fun by collaborating on our spotify playlist{" "}
          <a href="https://open.spotify.com/playlist/0uZ8qgeFIY8NzulA7e6Jma?si=da342a09d85545a2&pt=f3ab52f0498b7f5952921c64104bafd8">
            here
          </a>
        </div>
      </section>
      <section>
        <h1>Instraphragm</h1>
        <div>Please tag us on the phragm to give us dopamine</div>
        <br></br>
        <div></div>
      </section>
    </div>
  );
}

export default Page;
