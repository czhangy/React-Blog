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
				<div id={styles["image-wrapper"]}>
					<Image src="/profile1.JPG" height="400" width="300" />
				</div>
				<div id={styles["recent-posts-container"]}>
					<h2>RECENT POSTS</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
