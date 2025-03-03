import { assertEquals, assertExists } from "@std/assert";
import "@std/dotenv/load";

Deno.test("Test dotenv auto-loading", () => {
  assertExists(Deno.env.get("FOOBAR"));
  assertEquals(Deno.env.get("FOOBAR"), "Hello World!");
});
