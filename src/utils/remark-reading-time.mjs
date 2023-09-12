import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime () {
	return function (tree, { data }) {
		const textOnPage = toString(tree);
		const { minutes, words } = getReadingTime(textOnPage);
		data.astro.frontmatter.minutesRead = `共${words}字，阅读需 ${Math.ceil(minutes)} 分钟`;
	};
}
