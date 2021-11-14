import React from 'react';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout: React.FC = ({children}) => <>
    <Header />
    {children}
</>
export default Layout;
