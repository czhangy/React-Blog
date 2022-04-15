// NextJS
import Link from "next/link";

// Stylesheet
import styles from "styles/Navbar.module.scss";

const Navbar = () => {
	return (
		<nav id={styles.navbar}>
			<Link href="/">
				<a id={styles["site-title"]}>Victoria Delk</a>
			</Link>
			<div id={styles["link-container"]}>
				<Link href="/about">
					<a className={styles["nav-link"]}>About</a>
				</Link>
                <Link href="/blog">
					<a className={styles["nav-link"]}>Blog</a>
				</Link>
                <Link href="/resume">
					<a className={styles["nav-link"]}>Resume</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
