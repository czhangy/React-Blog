// NextJS
import Link from "next/link";
import Image from "next/image";

// Stylesheet
import styles from "styles/RecentPostCard.module.scss";

type Props = {
	post: {
        id: String,
		title: String;
		timestamp: String;
		thumb: string;
		body: String;
	};
};

const RecentPostCard = ({ post }: Props) => {
	// Truncate body text and insert ellipses
	const truncateBody = () => {
		if (post.body.length > 175) return post.body.substring(0, 175) + "...";
		else return post.body;
	};

	return (
		<li className={styles["recent-post-card"]}>
			<Link href={"/blog/" + post.id}>
				<a className={styles["card-container"]}>
					<div className={styles["image-container"]}>
						<Image
							src={post.thumb}
							alt=""
							height={160}
							width={120}
						/>
					</div>
					<div className={styles["content-container"]}>
						<div className={styles["header-container"]}>
							<h4 className={styles["post-title"]}>
								{post.title}
							</h4>
							<p className={styles["post-timestamp"]}>
								{post.timestamp}
							</p>
						</div>
						<p className={styles["post-body"]}>{truncateBody()}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};
export default RecentPostCard;
