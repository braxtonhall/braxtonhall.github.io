export default class Random {
	private static cyrb128(string: string) {
		let h1 = 1779033703;
		let h2 = 3144134277;
		let h3 = 1013904242;
		let h4 = 2773480762;
		for (let i = 0, k; i < string.length; i++) {
			k = string.charCodeAt(i);
			h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
			h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
			h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
			h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
		}
		h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
		h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
		h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
		h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
		h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
		return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
	}

	private a: number;
	private b: number;
	private c: number;
	private d: number;

	constructor(seed: string) {
		[this.a, this.b, this.c, this.d] = Random.cyrb128(seed);
	}

	public next() {
		this.a >>>= 0;
		this.b >>>= 0;
		this.c >>>= 0;
		this.d >>>= 0;
		let t = (this.a + this.b) | 0;
		this.a = this.b ^ this.b >>> 9;
		this.b = this.c + (this.c << 3) | 0;
		this.c = (this.c << 21 | this.c >>> 11);
		this.d = this.d + 1 | 0;
		t = t + this.d | 0;
		this.c = this.c + t | 0;
		return (t >>> 0) / 4294967296;
	}
}
