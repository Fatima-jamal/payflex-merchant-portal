# PayFlex Merchant Portal

This is the ReactJS-based frontend for PayFlex merchants to manage their transactions, generate QR codes, and process refunds in real time.

## Features

- Secure login system for merchants
- Dashboard with real-time financial summaries
- Dynamic QR code generation for payments
- Refund request module linked to transactions
- Profile update and merchant information view
- Protected routes and session persistence

## Pages

- `Login.jsx`: Merchant login
- `Dashboard.jsx`: Transaction overview and analytics
- `GenerateQR.jsx`: Input-based QR creation
- `RefundRequest.jsx`: Submit and track refunds
- `Profile.jsx`: Edit business details
- `Settlements.jsx`: Placeholder for future payouts

## Technology Stack

- ReactJS
- React Router DOM
- Axios
- qrcode.react
- Scoped CSS (no Tailwind or frameworks)
- GitHub Actions (CI)
- Netlify (Hosting)

## Deployment

Live: [https://payflex-merchant-portal.fatima-jamal.com/login](https://payflex-merchant-portal.fatima-jamal.com/login)

## Setup Instructions

1. Clone the repository
2. Configure `REACT_APP_API_URL` in `.env` file
3. Run using `npm install && npm start`

## License

© 2025 Fatima Jamal – All rights reserved.
