import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Change Website Link If Domain is Bought */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/imgs/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Muay Thai coach in Damascus, Syria. Offering public and private lessons. Khaled Shouqal Fighter."
        />
        <meta
          name="keywords"
          content="Muay Thai, Khaled Shouqal, Damascus, Syria, Coach, Fighter, Private Lessons, Public Lessons, Khaled Shouqal Fighter"
        />
        <meta name="author" content="Khaled Shouqal" />
        <meta property="og:title" content="Khaled Shouqal Fighter Official" />
        <meta
          property="og:description"
          content="Muay Thai coach in Damascus, Syria. Offering public and private lessons. Khaled Shouqal Fighter."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://khaled-shouqal-fighter.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://instagram.flca1-1.fna.fbcdn.net/v/t51.2885-19/131246542_2822956924586519_7262382244330193690_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flca1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=w5Y5ITaw2DgAX_4Oflo&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAV1nFds8JoLqeOu7xNz4Vvz1QEcGm8F_S2spaYacZ-pA&oe=658A5431&_nc_sid=ee9879"
        />
        {/* Arabic Tags*/}
        <meta
          name="description"
          lang="ar"
          content="مدرب مواي تاي في دمشق، سوريا. يقدم دروس عامة وخاصة. خالد شوقال فايتر. بطل سوريا. كيك بوكسينغ. جيم موعلا"
        />
        <meta
          name="keywords"
          lang="ar"
          content="مواي تاي، خالد شوقال، دمشق، سوريا، مدرب، فايتر، دروس خاصة، دروس عامة، خالد شوقال فايتر، كيك بوكسينغ، كي وان، بطل سوريا"
        />
        <meta
          property="og:description"
          lang="ar"
          content="مدرب مواي تاي في دمشق، سوريا. يقدم دروس عامة وخاصة. خالد شوقال فايتر. بطل سوريا. كيك بوكسينغ. جيم موعلا"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
