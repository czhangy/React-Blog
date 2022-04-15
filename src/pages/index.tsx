// NextJS
import Head from "next/head";
import Image from "next/image";

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
				<p id={styles["home-text"]}>Hi!</p>
				<div id={styles["home-collage"]}>
					<div id={styles["img-1"]} className={styles["home-img"]}>
						<Image
							src="/profile1.JPG"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div id={styles["img-2"]} className={styles["home-img"]}>
						<Image
							src="/profile2.JPG"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
