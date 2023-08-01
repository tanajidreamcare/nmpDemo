import './globals.css'

export const metadata = {
  title: 'Navi Mumbai Police | Government of Maharashtra',
  description: 'This is the official website of Navi Mumbai Police Department',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="./android-chrome-512x512.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="./android-chrome-192x192.png" />
          <link rel="manifest" href="./.webmanifest" />
      <body>{children}</body>
    </html>
  )
}
