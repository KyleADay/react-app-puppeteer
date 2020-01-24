import { load, getTitle } from "../pageObjects/index";

describe("React App", () => {
  it("should be titled 'React App'", async () => {
    await load();
    expect(await getTitle()).toBe("React App");
  });
});
