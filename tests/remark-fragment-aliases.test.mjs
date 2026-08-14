import assert from "node:assert/strict";
import test from "node:test";
import { remarkFragmentAliases } from "../astro.config.mjs";

test("adds a safe fragment alias before its matching heading", () => {
  const tree = {
    type: "root",
    children: [
      {
        type: "paragraph",
        children: [
          {
            type: "link",
            url: "#price",
            children: [{ type: "text", value: "💳 套餐价格" }],
          },
        ],
      },
      {
        type: "heading",
        depth: 2,
        children: [{ type: "text", value: "💳 套餐价格" }],
      },
    ],
  };

  remarkFragmentAliases()(tree);

  assert.equal(tree.children[1].value, '<span id="price"></span>');
  assert.equal(tree.children[2].type, "heading");
});
