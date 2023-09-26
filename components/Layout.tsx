import React, { ReactNode } from 'react';
import Head from 'next/head';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import theme from '../theme';
import { TopNavMenu } from './navigation/TopNavMenu';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<ChakraProvider theme={theme}>
		<CSSReset />
		<Box>
			<TopNavMenu />
			{children}
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<footer>
				<hr />
				<span>Footer text here</span>
			</footer>
		</Box>
	</ChakraProvider>
);

export default Layout;
