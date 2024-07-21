export type AprilTagConfig = {
    size: number;
    layout: string;
    codes: number[];
};
export type Pixel = "b" | "w" | "x";
export type LayoutPixel = Pixel | "d";
export declare class AprilTagFamily {
    size: number;
    codes: number[];
    private layout;
    private numBitsMinusOne;
    constructor({ size, layout, codes }: AprilTagConfig);
    render(id: number): Pixel[][];
    private computePixel;
}
