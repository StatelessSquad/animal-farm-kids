import { test, expect } from '@playwright/test';

test('chicken appears and can be moved', async ({ page }) => {
  await page.goto('/'); // baseUrl will be set
  // Wait for game container to appear
  const container = page.locator('#game-container');
  await expect(container).toBeVisible({ timeout: 5000 });
  const chicken = page.locator('#chicken');
  await expect(chicken).toBeVisible({ timeout: 5000 });

  // Get initial position
  const initialPos = await chicken.evaluate(el => {
    // For simplicity, get bounding rect
    const rect = el.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  });

  // Press right arrow key
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(300); // allow movement

  const newPos = await chicken.evaluate(el => {
    const rect = el.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  });

  // Expect x increased
  expect(newPos.x).toBeGreaterThan(initialPos.x);
});
