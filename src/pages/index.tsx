// NextJS
import Head from "next/head";

// Stylesheet
import styles from "styles/Home.module.scss";

// TS
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Victoria Delk's Blog</title>
			</Head>
            <div id={styles.home}>
                
            </div>
		</div>
	);
};

export default Home;
