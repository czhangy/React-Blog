import styles from "../styles/Layout.module.scss";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
