import { describe, expect, test } from "vitest";

import { AprilTagFamily } from "./index";

import tagConfig16h5 from "./families/16h5.json";
import tagConfig25h9 from "./families/25h9.json";
import tagConfig36h9 from "./families/36h9.json";
import tagConfig36h10 from "./families/36h10.json";
import tagConfig36h11 from "./families/36h11.json";
import tagConfigCircle21h7 from "./families/circle21h7.json";
import tagConfigCircle49h12 from "./families/circle49h12.json";
import tagConfigCustom48h12 from "./families/custom48h12.json";
import tagConfigStandard41h12 from "./families/standard41h12.json";
import tagConfigStandard52h13 from "./families/standard52h13.json";

function renderASCII(family: AprilTagFamily, index: number) {
  const tag = family.render(index);
  const rows: string[] = [];
  for (let y = 0; y < family.size; y++) {
    const row: string[] = [];
    for (let x = 0; x < family.size; x++) {
      switch (tag[y][x]) {
        case "b":
          row.push("██");
          break;
        case "w":
          row.push("--");
          break;
        case "x":
          row.push("XX");
          break;
      }
    }
    rows.push(row.join(""));
  }
  return rows.join("\n");
}

describe("16h5", () => {
  const family = new AprilTagFamily(tagConfig16h5);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
----------------
--████████████--
--██████--████--
--██████----██--
--████████--██--
--██--██----██--
--████████████--
----------------`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
----------------
--████████████--
--██████--████--
--██------████--
--██--██--████--
--████--██--██--
--████████████--
----------------`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
----------------
--████████████--
--██████----██--
--████--██████--
--████----████--
--██--██--████--
--████████████--
----------------`);
  });
});

describe("25h9", () => {
  const family = new AprilTagFamily(tagConfig25h9);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
------------------
--██████████████--
--██--██--██--██--
--████--██----██--
--██--████--████--
--██----------██--
--██--██████--██--
--██████████████--
------------------`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
------------------
--██████████████--
--██--------████--
--████--████--██--
--██--██--██████--
--████----██--██--
--██--██----████--
--██████████████--
------------------`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
------------------
--██████████████--
--██--██------██--
--██--██----████--
--████████--████--
--██----██----██--
--████--████████--
--██████████████--
------------------`);
  });
});

describe("36h9", () => {
  const family = new AprilTagFamily(tagConfig36h9);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
--------------------
--████████████████--
--████████--██████--
--██----██████--██--
--██--██----██████--
--██--██--████--██--
--██------██----██--
--████----██--████--
--████████████████--
--------------------`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
--------------------
--████████████████--
--████████--██--██--
--██--██----██████--
--████--██████████--
--████----██--████--
--████--████--████--
--████----------██--
--████████████████--
--------------------`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
--------------------
--████████████████--
--████████----████--
--██--████----████--
--██----██--██████--
--██████--██--████--
--██--██--████--██--
--██--████--██████--
--████████████████--
--------------------`);
  });
});

describe("36h10", () => {
  const family = new AprilTagFamily(tagConfig36h10);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
--------------------
--████████████████--
--████████------██--
--██████--██--████--
--██--████--██████--
--██--██--██--████--
--████----██--████--
--████████------██--
--████████████████--
--------------------`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
--------------------
--████████████████--
--██████--████████--
--████████--██--██--
--██████--████████--
--████----██--████--
--██----██████--██--
--██████----██████--
--████████████████--
--------------------`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
--------------------
--████████████████--
--██████--████--██--
--██------██--████--
--██████--------██--
--██------██----██--
--████----------██--
--████--██----████--
--████████████████--
--------------------`);
  });
});

describe("36h11", () => {
  const family = new AprilTagFamily(tagConfig36h11);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
--------------------
--████████████████--
--██----██--██--██--
--████------██--██--
--████----████████--
--██--██--████████--
--████--██----████--
--████████--██████--
--████████████████--
--------------------`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
--------------------
--████████████████--
--██----██----████--
--████--██------██--
--██--------██████--
--████----████████--
--██--██----██--██--
--██████--████--██--
--████████████████--
--------------------`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
--------------------
--████████████████--
--██----██------██--
--████--████--████--
--██--████████████--
--██████--████--██--
--████████--██████--
--██████------████--
--████████████████--
--------------------`);
  });
});

describe("circle21h7", () => {
  const family = new AprilTagFamily(tagConfigCircle21h7);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
XXXXXX--██--XXXXXX
XX██████████████XX
XX██----------██XX
████--██------████
████----------██--
--██--██--██--██--
XX██----------██XX
XX██████████████XX
XXXXXX██████XXXXXX`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
XXXXXX████--XXXXXX
XX██████████████XX
XX██----------██XX
--██--████----████
████--████----██--
--██--██████--██--
XX██----------██XX
XX██████████████XX
XXXXXX██----XXXXXX`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
XXXXXX--████XXXXXX
XX██████████████XX
XX██----------██XX
--██------██--██--
████--██--██--████
--██----------████
XX██----------██XX
XX██████████████XX
XXXXXX----██XXXXXX`);
  });
});

describe("circle49h12", () => {
  const family = new AprilTagFamily(tagConfigCircle49h12);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
XXXXXXXX██----XXXXXXXX
XXXX██████----██--XXXX
XX--████████████████XX
XX████----------██--XX
██████----████--██████
██--██----████--████--
██████--██------██--██
XX--██----------████XX
XX██████████████████XX
XXXX████████----██XXXX
XXXXXXXX------XXXXXXXX`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
XXXXXXXX██----XXXXXXXX
XXXX██████----██--XXXX
XX--████████████████XX
XX████----------██--XX
--████----██----██████
██████------██--██----
██████----------██████
XX--██----------██--XX
XX--██████████████--XX
XXXX██------████--XXXX
XXXXXXXX--████XXXXXXXX`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
XXXXXXXX██----XXXXXXXX
XXXX██████----██--XXXX
XX██████████████████XX
XX--██----------██--XX
--████----██----██--██
----██--████----████--
██--██----------██████
XX████----------██--XX
XX██████████████████XX
XXXX████----██----XXXX
XXXXXXXX----██XXXXXXXX`);
  });
});

describe("custom48h12", () => {
  const family = new AprilTagFamily(tagConfigCustom48h12);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
----██--██----██----
████████████████████
--██------------████
--██----████----████
--██--██XXXX----██--
--██--██XXXX██--████
--██--██--██----██--
--██------------████
--████████████████--
----██----██------██`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
----██--██----██----
████████████████████
--██------------████
--██----██████--████
████----XXXX██--██--
--██--██XXXX----██--
--██----██------██--
████------------████
--████████████████--
██----██--██████████`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
----██--██----██----
--██████████████████
--██------------████
--██----██████--██--
--██--██XXXX----████
████----XXXX----████
--██--████------██--
--██------------████
████████████████████
----████--██--████--`);
  });
});

describe("standard41h12", () => {
  const family = new AprilTagFamily(tagConfigStandard41h12);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
----██--------████
██████████████████
--██----------████
████----------██--
████--████----████
████--██--██--██--
--██----------████
██████████████████
----██--████--████`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
----██--------██--
██████████████████
--██----------████
████----------████
--██--██------██--
--██----██----████
████----------████
--██████████████--
██--██------████--`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
----██--------██--
--██████████████--
--██----------██--
████------██--██--
████----████--██--
--██--██------██--
████----------██--
████████████████--
██--██--██--██████`);
  });
});

describe("standard52h13", () => {
  const family = new AprilTagFamily(tagConfigStandard52h13);

  test("tag 0", () => {
    expect(renderASCII(family, 0)).equals(`\
██--██████████████--
--██████████████████
--██------------████
--██------████--██--
--██--██████----████
--██--██--██----██--
--██--██████----████
--██------------████
--██████████████████
--██--████----██--██`);
  });

  test("tag 1", () => {
    expect(renderASCII(family, 1)).equals(`\
██--██████████████--
--██████████████████
--██------------████
████------████--██--
--██----████----████
--██----██--██--██--
████--████████--████
--██------------████
██████████████████--
████--██------------`);
  });

  test("tag 2", () => {
    expect(renderASCII(family, 2)).equals(`\
██--██████████████--
--██████████████████
--██------------████
--██------████--██--
████----██--██--████
--██--██--------██--
--██----████----████
████------------██--
--██████████████████
██--██████████--██--`);
  });
});
