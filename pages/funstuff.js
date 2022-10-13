import Head from "next/head";

function Page() {
  return (
    <div class="padded-content2">
      <Head>
        <title>Wedding Funsies!!!</title>
      </Head>
      <section>
        <h1 class="centered">Spotify playlist</h1>
        <div>
          <span>
            Please join the wedding fun by joining our spotify playlist and
            adding your favourite tunes for the dance floor
          </span>{" "}
          <a
            href="https://open.spotify.com/playlist/0uZ8qgeFIY8NzulA7e6Jma?si=da342a09d85545a2&pt=f3ab52f0498b7f5952921c64104bafd8"
            target="_blank"
          >
            here.
          </a>
        </div>
      </section>
      <section>
        <h1 class="centered">Things to do in Wellington</h1>
        <ul>
          <li class="left-aligned">Te Papa Museum</li>
          <li class="left-aligned">City gallery (Nikau cafe next door)</li>
          <li class="left-aligned">Weta Cave</li>
          <li class="left-aligned">Paddle boarding on harbour</li>
          <li class="left-aligned">
            Crocodile bikes on oriental parade (try the and fish and chips from
            Mt Vic Chippery after)
          </li>
          <li class="left-aligned">Wellington Zoo</li>
          <li class="left-aligned">Wellington Chocolate Factory</li>
          <li class="left-aligned">Maitu Somes island </li>
        </ul>
      </section>
      <section>
        <h1 class="centered">Walks</h1>
        <ul>
          <li class="left-aligned">
            Walk through Zealandia or Otari Wilton, Botanic garden (take the
            cable car!)
          </li>
          <li class="left-aligned">Makara Beach - beautiful walk and views</li>
          <li class="left-aligned">
            Walk up Mt Vic at sunset - take a picnic{" "}
          </li>
        </ul>
        <div>For the adventurous</div>
        <ul>
          <li class="left-aligned"> Skyline walkway</li>
          <li class="left-aligned"> Northern walkway</li>
          <li class="left-aligned"> Escarpment track</li>
        </ul>
      </section>
      <section>
        <h1 class="centered">Restaurants</h1>
        <div>
          (some of these we've tried, some we haven't got to yet but all come
          highly recommended)
        </div>
        <ul>
          <li class="left-aligned">Sweet Mother’s Kitchen</li>
          <li class="left-aligned">1154 Pasteria </li>
          <li class="left-aligned">Mekong cafe</li>
          <li class="left-aligned">Som Tum Thai </li>
          <li class="left-aligned">Old quarter </li>
          <li class="left-aligned">Satay Palace</li>
          <li class="left-aligned">Little Panang </li>
          <li class="left-aligned">Apache</li>
          <li class="left-aligned">Capitol </li>
          <li class="left-aligned">Tatsushi</li>
          <li class="left-aligned">Cicocacio </li>
          <li class="left-aligned">KC Cafe and Takeaway </li>
          <li class="left-aligned">Saffron Haveli </li>
          <li class="left-aligned">Bikaner</li>
          <li class="left-aligned">Chilli masala</li>
          <li class="left-aligned">Bella Italia Lower Hutt </li>
          <li class="left-aligned">Hillside </li>
        </ul>
      </section>
      <section>
        <h1 class="centered">Cafés</h1>
        <ul>
          <li class="left-aligned">Egmont st eatery </li>
          <li class="left-aligned">Little grump coffee</li>
          <li class="left-aligned">Scorchorama cafe</li>
          <li class="left-aligned">Leeds Street Bakery</li>
        </ul>
      </section>
      <section>
        <h1 class="centered">Kid Friendly Cafés</h1>
        <ul>
          <li class="left-aligned">Seashore Cabaret</li>
          <li class="left-aligned">Maranui</li>
          <li class="left-aligned">La Cloche - Kaiwharawhara</li>
          <li class="left-aligned">Spruce Goose</li>
          <li class="left-aligned">Te Papa Café</li>
          <li class="left-aligned">Common Ground Cafe (Johsonville)</li>
          <li class="left-aligned">Chocolate Fish Café</li>
        </ul>
      </section>
      <section>
        <h1 class="centered">Bars / cocktails...</h1>
        <ul>
          <li class="left-aligned">
            Cocktails - Hawthorne lounge, The Library, Dragonfly, Hanging Ditch
          </li>
          <li class="left-aligned">Goldings Free Dive</li>
          <li class="left-aligned">Sprig and Fern</li>
          <li class="left-aligned">Southern Cross Garden Bar Restaurant </li>
        </ul>
      </section>
      <section>
        <h1 class="centered">For Shopping</h1>
        <ul>
          <li class="left-aligned">Lambton Quay</li>
          <li class="left-aligned">Victoria Street</li>
          <li class="left-aligned">Cuba Street</li>
        </ul>
      </section>
    </div>
  );
}

export default Page;
