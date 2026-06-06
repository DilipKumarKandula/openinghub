import { test, expect } from "@playwright/test";

test("jobs page loads", async ({ page }) => {
  await page.goto("/jobs");

  await expect(
    page.getByText("Latest Jobs")
  ).toBeVisible();
});

test("search input exists", async ({
  page,
}) => {
  await page.goto("/jobs");

  await expect(
    page.getByPlaceholder(
      "Search by title, company, location..."
    )
  ).toBeVisible();
});

test("search updates url", async ({
  page,
}) => {
  await page.goto("/jobs");

  const searchInput =
    page.getByPlaceholder(
      "Search by title, company, location..."
    );

  await searchInput.fill("Java");

  await searchInput.press("Enter");

  await page.waitForURL(
    /search=Java/
  );

  expect(page.url()).toContain(
    "search=Java"
  );
});



test("edit page opens", async ({
  page,
}) => {
  await page.goto("/admin/jobs");

  await page
    .getByRole("link", {
      name: "Edit",
    })
    .first()
    .click();

  await expect(
    page.getByText("Edit Job")
  ).toBeVisible();
});