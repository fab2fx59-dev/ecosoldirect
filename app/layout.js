import './globals.css'

export const metadata = {
  title: 'ECOSOL Direct',
  description: 'Entreprise spécialisée en énergie solaire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
