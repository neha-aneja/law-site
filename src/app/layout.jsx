// src/app/layout.js
import StyledComponentsRegistry from '../lib/registry';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Lex & Justice Legal Firm',
  description:
    'Trusted legal advisors providing top-tier representation in California.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
