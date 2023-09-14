import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => (
	<Layout title="About | Mommy sTeps">
		<h1>About</h1>
		<p>
			I am the most beautiful, loving mom in the world and my husband Pat loves me more than anything on this
			Earth
		</p>
		<p>
			<Link href="/">Go home</Link>
		</p>
	</Layout>
);

export default AboutPage;
