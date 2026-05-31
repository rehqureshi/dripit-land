// lib/email-template.ts

export function buildWaitlistConfirmationEmail(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Dripit Waitlist 🚀</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background-color: #080808;
      color: #f5f5f0;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .wrapper {
      max-width: 560px;
      margin: 0 auto;
      padding: 48px 24px;
    }

    .logo {
      font-size: 28px;
      font-weight: 300;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #f5f5f0;
      margin-bottom: 48px;
      display: block;
    }

    .badge {
      display: inline-block;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 100px;
      padding: 6px 16px;
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(245,245,240,0.6);
      margin-bottom: 32px;
    }

    .headline {
      font-size: 36px;
      font-weight: 300;
      line-height: 1.25;
      letter-spacing: -0.02em;
      color: #f5f5f0;
      margin-bottom: 20px;
    }

    .headline strong {
      font-weight: 500;
    }

    .body-text {
      font-size: 15px;
      line-height: 1.7;
      color: rgba(245,245,240,0.6);
      margin-bottom: 16px;
    }

    .divider {
      border: none;
      border-top: 1px solid rgba(255,255,255,0.08);
      margin: 40px 0;
    }

    .perks-title {
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(245,245,240,0.35);
      margin-bottom: 20px;
    }

    .perk-row {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 16px;
    }

    .perk-icon {
      width: 32px;
      height: 32px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
    }

    .perk-text {
      font-size: 14px;
      color: rgba(245,245,240,0.65);
      line-height: 1.5;
      padding-top: 6px;
    }

    .perk-text strong {
      color: #f5f5f0;
      font-weight: 500;
    }

    .footer {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    .footer-logo {
      font-size: 13px;
      font-weight: 300;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(245,245,240,0.3);
      display: block;
      margin-bottom: 8px;
    }

    .footer-text {
      font-size: 12px;
      color: rgba(245,245,240,0.2);
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <span class="logo">Dripit</span>

    <div class="badge">Waitlist Confirmed</div>

    <h1 class="headline">
      You're in.<br />
      <strong>Fashion is about to change.</strong>
    </h1>

    <p class="body-text">
      Welcome to Dripit — a platform built for the next generation of fashion discovery. 
      We're putting independent designers front and centre, and you're one of the first to know.
    </p>

    <p class="body-text">
      We'll notify you at <strong style="color:#f5f5f0;">${email}</strong> the moment we launch. 
      Early access members get priority entry and exclusive perks.
    </p>

    <hr class="divider" />

    <p class="perks-title">What's coming</p>

    <div class="perk-row">
      <div class="perk-icon">✦</div>
      <div class="perk-text">
        <strong>Discover Independent Designers</strong><br />
        Curated collections from voices outside the mainstream.
      </div>
    </div>

    <div class="perk-row">
      <div class="perk-icon">◈</div>
      <div class="perk-text">
        <strong>Shop Unique Collections</strong><br />
        One-of-a-kind pieces you won't find anywhere else.
      </div>
    </div>

    <div class="perk-row">
      <div class="perk-icon">○</div>
      <div class="perk-text">
        <strong>A Fashion-First Community</strong><br />
        Connect with designers and tastemakers who define what's next.
      </div>
    </div>

    <div class="footer">
      <span class="footer-logo">Dripit</span>
      <p class="footer-text">
        © ${new Date().getFullYear()} Dripit. All rights reserved.<br />
        You're receiving this because you joined our waitlist.
      </p>
    </div>
  </div>
</body>
</html>`;
}
