import React from 'react';

// Definieer een generiek type voor de pagina
type PageProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: PageProps) => {
    return (
        <div>
            <nav>
                {/* Jouw navigatiecomponent */}
            </nav>
            <main>{children}</main>
            <footer>{/* Jouw footer */}</footer>
        </div>
    );
};

// Definieer de getLayout functie met het juiste type voor de pagina
export const getLayout = (page: React.ReactNode) => {
    return <Layout>{page}</Layout>; // Wrap de pagina in de Layout-component
};

export default Layout;