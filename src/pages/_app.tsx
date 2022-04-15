// Components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

// Stylesheet
import "styles/globals.scss";

// TS
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
            <Footer />
		</>
	);
}

export default MyApp;
