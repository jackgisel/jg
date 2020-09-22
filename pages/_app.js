import { Container } from "../componets";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Container pageTitle="Jack Gisel" description="Jack Gisel's Blog">
      <Component {...pageProps} />;
    </Container>
  );
}

export default MyApp;
