import Image from "next/image";

function HomePage() {
  return (
    <div>
      <div class="hero-image"></div>
      <div class="full-screen-centered">
        <div class="big-name">
          <span class="big-name-name">Georgina Elizabeth</span>
          <span class="big-name-and">and</span>
          <span class="big-name-name">Chris Dawson</span>
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
