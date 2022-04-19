// Stylesheet
import styles from "styles/Home.module.scss";

type Props = {
	post: {
		title: String;
	};
};

const RecentPostCard = ({ post }: Props) => {
	return (
		<ul className={styles["recent-post-card"]}>
			<h4>{post.title}</h4>
		</ul>
	);
};
export default RecentPostCard;
