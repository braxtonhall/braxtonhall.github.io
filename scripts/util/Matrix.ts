export type Point = Readonly<{x: number, y: number}>;
export type Area = Readonly<{width: number, height: number}>;

export default class Matrix<T> {
	private readonly matrix: T[][];

	constructor(public readonly area: Area) {
		this.matrix = Array.from({length: area.height}).map(() => Array.from({length: area.width}));
	}

	public at(point: Point): T | undefined {
		return this.matrix[point.y]?.[point.x];
	}

	public assign(point: Point, value: T): void {
		this.matrix[point.y] ??= [];
		this.matrix[point.y][point.x] = value;
	}

	public map<U>(callback: (value: T, point: Point, matrix: this) => U): Matrix<U> {
		const matrix: Matrix<U> = new Matrix(this.area);
		for (let y = 0; y < this.area.height; y++) {
			for (let x = 0; x < this.area.width; x++) {
				const point = {x, y};
				matrix.assign(point, callback(this.at(point), point, this));
			}
		}
		return matrix;
	}

	public rows(): T[][] {
		return this.matrix;
	}

	public columns(): T[][] {
		return this.transpose().rows();
	}

	public transpose(): Matrix<T> {
		const transpose = new Matrix({width: this.area.height, height: this.area.width});
		return transpose.map((_, {x, y}) => this.at({x: y, y: x}));
	}
}
