export type AprilTagConfig = {
  size: number;
  layout: string;
  codes: number[];
};

export type Pixel = "b" | "w" | "x";

export type LayoutPixel = Pixel | "d";

export class AprilTagFamily {
  size: number;
  codes: number[];
  private layout: LayoutPixel[];
  private numBitsMinusOne: bigint;

  constructor({ size, layout, codes }: AprilTagConfig) {
    this.size = size;
    this.codes = codes;
    this.layout = layout.split("") as LayoutPixel[];
    this.numBitsMinusOne = -1n;
    for (const char of this.layout) {
      if (char === "d") {
        this.numBitsMinusOne++;
      }
    }
  }

  render(id: number): Pixel[][] {
    let code = BigInt(this.codes[id]);
    const im = newSquare<Pixel>(this.size);

    for (let i = 0; i < 4; i++) {
      for (let y = 0; y <= this.size / 2; y++) {
        for (let x = y; x < this.size - 1 - y; x++) {
          const layoutChar = this.layout[y * this.size + x];
          im[y][x] = this.computePixel(layoutChar, code);
          if (layoutChar === "d") {
            code <<= 1n;
          }
        }
      }
      rotate90(im);
    }

    if (this.size % 2 === 1) {
      const h = Math.floor(this.size / 2);
      im[h][h] = this.computePixel(this.layout[h * this.size + h], code);
    }

    return im;
  }

  private computePixel(layoutChar: LayoutPixel, code: bigint): Pixel {
    if (layoutChar === "d") {
      if ((code & (1n << this.numBitsMinusOne)) !== 0n) {
        return "w";
      } else {
        return "b";
      }
    }
    return layoutChar;
  }
}

function newSquare<T>(size: number): T[][] {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
  }
  return arr;
}

function rotate90<T>(im: T[][]) {
  const n = im.length;
  for (let y = 0; y < n / 2; y++) {
    for (let x = y; x < n - y - 1; x++) {
      const temp = im[y][x];
      im[y][x] = im[x][n - 1 - y];
      im[x][n - 1 - y] = im[n - 1 - y][n - 1 - x];
      im[n - 1 - y][n - 1 - x] = im[n - 1 - x][y];
      im[n - 1 - x][y] = temp;
    }
  }
}
