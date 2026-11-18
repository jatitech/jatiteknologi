/**
 * The header values the built site must send, written out here rather than imported from
 * `src/shared/security`, so that a wrong value in the module or in `public/_headers` fails the e2e run.
 */
export const EXPECTED_SECURITY_HEADERS = {
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy":
    "accelerometer=(), browsing-topics=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), hid=(), interest-cohort=(), magnetometer=(), microphone=(), payment=(), serial=(), usb=()",
  "cross-origin-opener-policy": "same-origin",
  "x-frame-options": "DENY",
  "content-security-policy": "frame-ancestors 'none'",
} as const;
