import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container-content d-flex" style={{ marginTop: '150px', flexDirection: 'column' }}>
                {children}
            </div>
        </>
    );
}

export default DefaultLayout;
