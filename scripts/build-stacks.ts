import * as fs from "fs-extra";
import path from "path";
import Matrix, {Area, Point} from "./util/Matrix";
import Random from "./util/Random";

const width = 6;
const height = 5;

type Post = Readonly<{content: string, point: Point}>;

const getPosts = (): Post[] => {
	const stacksPath = path.resolve(__dirname, '..', 'stacks');
	const fileNames = fs.readdirSync(stacksPath);
	return fileNames.map((name) => {
		const content = fs.readFileSync(path.join(stacksPath, name)).toString('utf-8');
		const random = new Random(content);
		const point = {
			x: random.next(),
			y: random.next(),
		}
		return {content, point};
	})
};

const placePost = (post: Post, matrix: Matrix<Set<string>>): void => {
	const area = matrix.area;
	const point = {
		x: Math.floor(post.point.x * area.width),
		y: Math.floor(post.point.y * area.height)
	};
	matrix.at(point)?.add(post.content);
};

const getLinkTo = (point: Point, matrix: Matrix<unknown>) => {
	const addLooping = (a: Point, b: Point, area: Area) => ({
		x: (area.width + a.x + b.x) % area.width,
		y: (area.height + a.y + b.y) % area.height,
	});
	const move = (distance: Point) => addLooping(point, distance, matrix.area);
	const makeLink = (point: Point) => `./${point.x}-${point.y}.md`;
	const relativeLink = (distance: Point) => makeLink(move(distance));

	const left = relativeLink({x: -1, y: 0});

	const right = relativeLink({x: 1, y: 0});

	const up = relativeLink({x: 0, y: -1});

	const down = relativeLink({x: 0, y: 1});

	const here = makeLink(point);

	return {left, right, up, down, here};
}

const buildStack = (content: Set<string>, point: Point, matrix: Matrix<Set<string>>): string => {
	const links = getLinkTo(point, matrix);
	return `${Array.from(content).join('\n\n') || '_Nothing here_'}

#

[h](${links.left}) [j](${links.down}) [k](${links.up}) [l](${links.right})
`;
}

const buildIndex = (stacks: Matrix<string>): string => {
	const links = stacks.map((_, point, matrix) => ` [_visit_](${getLinkTo(point, matrix).here}) `);
	const rows = [
		Array.from({length: links.area.width}).fill('                     '),
		Array.from({length: links.area.width}).fill('---------------------'),
		...links.rows(),
	];
	return rows.map((row) => `|${row.join('|')}|`).join('\n');
};

const write = (index: string, content: Matrix<string>) => {
	const writeDir = path.resolve(__dirname, '..', 'build', 'stacks');
	fs.outputFileSync(path.join(writeDir, 'index.md'), index);
	content.map((value, point) => {
		const link = path.join(writeDir, getLinkTo(point, content).here);
		fs.outputFileSync(link, value);
	});
}

export const buildStacks = async () => {
	const shelves = new Matrix({width, height}).map(() => new Set<string>());
	getPosts().forEach((post) => placePost(post, shelves));
	const stacks = shelves.map(buildStack);
	write(buildIndex(stacks), stacks);
};


