import { EventHandler, useState, ChangeEvent } from 'react';
import { Box, Button, Textarea, Text } from '@chakra-ui/react';

export const BlogPost = () => {
	const [isBlogCreate, setIsBlogCreate] = useState(false);
	const [blogText, setBlogText] = useState('');

	const handleNewBlogClick = () => {
		setIsBlogCreate(!isBlogCreate);
	};

	const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setBlogText(event.target.value);
	};

	return (
		<Box as="div">
			<Button onClick={handleNewBlogClick}>Create New Blog Post</Button>
			{isBlogCreate && <Textarea onChange={handleTextAreaChange} />}
			<Button onClick={handleNewBlogClick}>Submit</Button>
			<Box>{!isBlogCreate && <Text>{<b>{blogText}</b>}</Text>}</Box>
		</Box>
	);
};
