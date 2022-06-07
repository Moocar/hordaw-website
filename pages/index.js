import Head from "next/head";

function HomePage() {
  return (
    <div class="body-content">
      <Head>
        <title>Georgina & Chris</title>
      </Head>
      <div class="hero-image"></div>
      <div class="full-screen-centered">
        <div class="big-name">
          <span class="big-name-name">Georgina Elizabeth Horsburgh</span>
          <span class="big-name-and">AND</span>
          <span class="big-name-name">Christopher John Dawson</span>
        </div>
      </div>
      <div class="full-screen-centered strong-background">
        <div class="big-date">
          <div class="big-date-month">October 15</div>
          <div class="big-date-year">2022</div>
        </div>
      </div>
    </div>
  );
}

// colors are
// 5A5D35
// 85C3FD
// 4E89AF
// 408FF3
// 2A291C
export default HomePage;
