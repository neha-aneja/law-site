// src/app/layout.js
import StyledComponentsRegistry from '../lib/registry';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
