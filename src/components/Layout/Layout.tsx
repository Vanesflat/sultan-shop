import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type LayoutProps = {
  pageTitle?: string;
  children: React.ReactNode;
}

function Layout({ pageTitle, children }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Султан {pageTitle}</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
