# apriltag-js

apriltag-js is a TypeScript port of [apriltag-generation](https://github.com/AprilRobotics/apriltag-generation)  with no dependencies. See also the [main AprilTag repo](https://github.com/AprilRobotics/apriltag) and [paper](https://april.eecs.umich.edu/papers/details.php?name=krogius2019iros).

While the reference implementation is geared toward designing and evaluating new tag families, this library only renders them, which is a much easier task. It supports all official tag families, and you can easily use your own.

* `16h5`
* `25h9`
* `36h9`
* `36h10`
* `36h11`
* `Circle21h7`
* `Circle49h12`
* `Custom48h12`
* `Standard41h12`
* `Standard52h13`

The main contribution of this library is the introduction of a new JSON format for defining tag families, which is more portable and consistent than the set of Java class definitions found in the reference implementation.

## Installation

```sh
npm install apriltag
```

You can also just copy and paste the code into your project! Or include it on your web page like this:

```html
<script src="https://cdn.jsdelivr.net/npm/apriltag@latest/dist/browser.js"></script>
```

## Usage

If you use npm:

```ts
import { AprilTagFamily } from 'apriltag'
import tagConfig36h11 from 'apriltag/families/36h11.json'

const family = new AprilTagFamily(tagConfig36h11);
console.log(family.render(1));
```

Alternatively, if you're using a plain `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/apriltag@latest/dist/browser.js"></script>
<script>
  async function main() {
    const rsp = await fetch('https://cdn.jsdelivr.net/npm/apriltag@latest/families/36h11.json')
    const tagConfig36h11 = await rsp.json()

    const family = new AprilTagFamily(tagConfig36h11)
    console.log(family.render(1))
  }

  main()
</script>
```

You'll get back a 2D array of characters representing pixels. `w` means white, `b` means black, and `x` means transparent. More details on the format are in the next section.

```ts
[
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
  ['w', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'w'],
  ['w', 'b', 'w', 'w', 'b', 'w', 'w', 'b', 'b', 'w'],
  ['w', 'b', 'b', 'w', 'b', 'w', 'w', 'w', 'b', 'w'],
  ['w', 'b', 'w', 'w', 'w', 'w', 'b', 'b', 'b', 'w'],
  ['w', 'b', 'b', 'w', 'w', 'b', 'b', 'b', 'b', 'w'],
  ['w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b', 'w'],
  ['w', 'b', 'b', 'b', 'w', 'b', 'b', 'w', 'b', 'w'],
  ['w', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'w'],
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
]
```

What you do with it is up to you! You could render them as ASCII art, create HTML elements or SVG, generate images, or draw them on a canvas. Take a look at the unit tests for this library if you're not sure how to begin.

You can check the size and number of IDs a tag family supports by accessing `family.size` and `family.codes.length` respectively.

## Tag family format

Look in the `families/` folder for examples. Tag families must adhere to the following type:

```ts
type AprilTagConfig = {
  size: number;
  layout: string;
  codes: number[];
};
```

### size

`size` is the length of one side of a tag in pixels. Squaring it gives you the area. It's the measurement of the entire tag, not just the data region (e.g. `36h11` has size `10`).

### layout

`layout` is a string consisting of `size × size` characters, which can be `w` for white, `b` for black, `x` for transparent, or `d` for data. See Fig. 3 of the paper:

<img width="400" alt="Fig. 3. The layout string for the 21h7 circular tag family overlaid onto an example tag from this family" src="https://github.com/user-attachments/assets/99eb42fc-5054-47b7-ae6b-7c60d95a0fc1">

### codes

`codes` is a list of numbers representing the bits encoded in each tag. One code is one tag, and a tag's ID is its index in the `codes` array.

These are the AprilTag 3 "upgraded" codes, so the codes for tags from earlier generations are written differently than how they appear in the reference implementation, but they mean the same thing.
