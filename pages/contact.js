import Image from "next/image";
import Head from "next/head";
import Photo from "../public/IMG_1451.jpg";

function Page() {
  return (
    <div class="padded-content">
      <Head>
        <title>Contact | Georgina & Chris</title>
      </Head>
      <Image src={Photo} width="732" height="549" placeholder="blur" />
      <h1>Contact</h1>
      <section>
        <h2>Georgina Horsburgh</h2>
        <div>NZ number (+64 (0) 21 028 10238)</div>
        <br></br>
        <div>georgina.horsburgh@gmail.com</div>
      </section>
      <section>
        <h2>Chris Dawson</h2>
        <div>NZ number (+64 (0) 21 028 16309)</div>
        <br></br>
        <div>chrisdawson1@gmail.com</div>
      </section>
    </div>
  );
}

export default Page;
