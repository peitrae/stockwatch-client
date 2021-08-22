import { useState } from 'react';
import { NextPage } from 'next';

import Page from '@/components/layouts/Page';
import Sidebar from '@/components/layouts/Sidebar';

const Dashboard: NextPage = () => {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleExpandSidebar = () => setIsExpanded(!isExpanded);

	return (
		<Page>
			<Sidebar isExpanded={isExpanded} menuOnClick={toggleExpandSidebar} />
		</Page>
	);
};

export default Dashboard;
