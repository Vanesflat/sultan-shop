import { Helmet } from 'react-helmet-async';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type LayoutProps = {
  pageTitle?: string;
  children: React.ReactNode;
}

function Layout({ pageTitle = '', children }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Султан {pageTitle}</title>
      </Helmet>
      <Header />
      <BreadCrumbs />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
