import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			body: {
				background: 'teal.200',
			},
		},
	},
});

export default theme;
