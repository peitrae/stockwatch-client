import { useState } from 'react';
import { NextPage } from 'next';

import Page from '@/components/layouts/Page';
import Sidebar from '@/components/layouts/Sidebar';
import { AuthenticatedNavbar } from '@/components/layouts/Navbar';

const Dashboard: NextPage = () => {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleExpandSidebar = () => setIsExpanded(!isExpanded);

	return (
		<Page data-testid="dashboard-page">
			<Sidebar isExpanded={isExpanded} menuOnClick={toggleExpandSidebar} />
			<AuthenticatedNavbar menuOnClick={toggleExpandSidebar} />
		</Page>
	);
};

export default Dashboard;
