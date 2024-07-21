export type TagConfig = {
    size: number;
    layout: string;
    codes: number[];
};
export type Pixel = "b" | "w" | "x";
export type LayoutPixel = Pixel | "d";
export declare class TagFamily {
    size: number;
    codes: number[];
    private layout;
    private numBitsMinusOne;
    constructor({ size, layout, codes }: TagConfig);
    render(id: number): Pixel[][];
    private computePixel;
}
