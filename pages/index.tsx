import { Suspense } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Heading, Box } from '@chakra-ui/react';
import { BlogPost } from '../components/blog/BlogPost';


const IndexPage = () => (
	<Suspense
		fallback={() => {
			<Box>Error</Box>;
		}}
	>
		<Layout title="Home | Mommy sTeps">
			<Heading as={'h1'}>The Mommy sTeps Blog 👋</Heading>
			<Box as="p">
				<Link href="/about">About</Link>
			</Box>
			<Box>
				<BlogPost />
			</Box>
		</Layout>
	</Suspense>
);

export default IndexPage;
