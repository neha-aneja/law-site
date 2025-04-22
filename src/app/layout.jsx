// src/app/layout.js
import StyledComponentsRegistry from '../lib/registry';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Law & Justice Legal Firm',
  description:
    'Trusted legal advisors providing top-tier representation in India.',
  keyword:
    'law, justice, legal firm, personal injury lawyer, family law, corporate & business law,estate planning, best lawyer in delhi, best legal firm in delhi',
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
