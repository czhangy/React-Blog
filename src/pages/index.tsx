// NextJS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Stylesheet
import styles from "styles/Home.module.scss";

// TS
import type { NextPage } from "next";

// Components
import RecentPostCard from "components/RecentPostCard";

const Home: NextPage = () => {
	const test = {
		id: "test",
		title: "Test Post #1",
		timestamp: new Date().toISOString().slice(0, 10),
		thumb: "/profile1.JPG",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non justo in ex interdum vestibulum. Morbi vulputate ligula quis pharetra mattis. Sed magna ligula, rutrum vel porttitor eu, interdum nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eu lacus fermentum, tincidunt ligula eget, aliquet nulla. Nulla nec malesuada justo. Ut eget hendrerit ipsum. Pellentesque pretium eros vel purus ullamcorper lobortis. Maecenas sit amet gravida libero. Aenean in mi mi. Nam consectetur elementum dui, ut sollicitudin sem pellentesque nec. Cras risus ipsum, interdum dapibus ullamcorper id, posuere at est. Interdum et malesuada fames.",
	};

	return (
		<>
			<Head>
				<title>Victoria Delk&apos;s Blog</title>
			</Head>
			<div id={styles.home}>
				<div id={styles["image-container"]}>
					<div id={styles["image-wrapper"]}>
						<Image
							src="/profile1.JPG"
							alt=""
							height="600"
							width="450"
						/>
					</div>
					<p id={styles["main-title"]}>Hi! I'm Vicky Delk :)</p>
				</div>
				<div id={styles["recent-posts-container"]}>
					<h2 id={styles["recent-posts-header"]}>RECENT POSTS</h2>
					<ul id={styles["recent-posts-list"]}>
						<RecentPostCard post={test} />
						<RecentPostCard post={test} />
						<RecentPostCard post={test} />
					</ul>
					<Link href="/blog">
						<a id={styles["see-more-link"]}>See More!</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
