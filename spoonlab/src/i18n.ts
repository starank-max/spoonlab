// ==========================================================================
// next-intl configuration
// ==========================================================================
// To fully activate:
// 1. Move middleware.ts to use next-intl's createMiddleware
// 2. Wrap RootLayout with NextIntlClientProvider
// 3. Use useTranslations() in components
//
// Current state: middleware redirects locales manually (works for basic i18n).

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
