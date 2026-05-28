export const metadata = {
  title: 'ECOSOL Direct',
  description: 'Solutions photovoltaïques au sol pour particuliers, professionnels et agriculteurs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H593VXW1K1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H593VXW1K1');
            `,
          }}
        />
      </body>
    </html>
  )
}
