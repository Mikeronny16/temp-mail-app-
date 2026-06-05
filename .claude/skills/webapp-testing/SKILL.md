# Skill: webapp-testing

Test Next.js apps — UI debug, screenshot, browser logs. No Playwright needed for basic checks.

## Quick Visual Test (dev server)
```bash
# 1. Start dev server
npm run dev &

# 2. Check it renders (curl)
curl -s http://localhost:3000 | grep -o '<title>[^<]*</title>'

# 3. Check for JS errors in build
npm run build 2>&1 | grep -E "error|Error|warning"
```

## TypeScript Check
```bash
npx tsc --noEmit
```

## Mobile Viewport Test
```bash
# Check page renders at 390px (iPhone 12)
# Open Chrome DevTools → Device Toolbar → iPhone 12 Pro
# Or use puppeteer for automated screenshot:

node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'mobile-test.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved: mobile-test.png');
})();
"
```

## API Route Testing
```bash
# Test GET
curl -s http://localhost:3000/api/your-route | jq .

# Test POST
curl -s -X POST http://localhost:3000/api/your-route \
  -H "Content-Type: application/json" \
  -d '{"key": "value"}' | jq .

# Test with auth cookie
curl -s http://localhost:3000/api/protected \
  -H "Cookie: session=your-session-token" | jq .
```

## Form Testing Checklist
- [ ] Submit with empty fields → shows validation error
- [ ] Submit with valid data → success state shown
- [ ] Submit twice → no duplicate (loading state)
- [ ] Network error → shows error message, not white screen
- [ ] Mobile keyboard → input not obscured by keyboard

## Common Bug Patterns to Check
```bash
# Hydration errors (server/client mismatch)
npm run build && npm start
# Look for: "Hydration failed" in browser console

# Missing env vars
grep -r "process.env\." --include="*.ts" --include="*.tsx" . | \
  grep -v "NEXT_PUBLIC" | grep -v ".env"

# Unused imports (can cause build warnings)
npx eslint . --ext .ts,.tsx
```

## Lighthouse Quick Score
```bash
# Install: npm install -g lighthouse
lighthouse http://localhost:3000 \
  --only-categories=performance,accessibility \
  --output=json \
  --chrome-flags="--headless" \
  | jq '.categories | {perf: .performance.score, a11y: .accessibility.score}'
```
