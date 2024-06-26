import '../styles/global.css';
import Navigation from './components/navigation';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className='background'>
          {children}
        </div>
      </body>
    </html>
  )
}
