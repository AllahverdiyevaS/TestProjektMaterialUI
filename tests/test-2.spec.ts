import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("anna");
  await page.getByRole("textbox", { name: "Email" }).press("ControlOrMeta+q");
  await page.getByRole("textbox", { name: "Email" }).fill("anna@gmail.com");
  await page.getByRole("textbox", { name: "Enter password" }).click();
  await page
    .getByRole("textbox", { name: "Enter password" })
    .fill("Annna1234@");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByText("Log in to your account")).toBeVisible();
  page.pause();
});
