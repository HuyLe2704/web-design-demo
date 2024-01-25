import { Fragment, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
import Footer from './components/Layout/components/Footer';

function App() {
    const ScrollToTop = () => {
        const pathname = useLocation();

        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, [pathname]);

        return null;
    };
    return (
        <>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                            <Footer />
                                        </>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
