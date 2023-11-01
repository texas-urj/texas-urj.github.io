export const metadata = {
  title: 'Texas URJ',
  description: 'The official website of the Texas Undergraduate Research Journal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}