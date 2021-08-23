import IIcon from '@/types/IIcon';

const SearchIcon: React.FC<IIcon> = ({ className = '' }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`icon search-icon ${className}`}
	>
		<path
			d="M20.5105 10.7552C20.5105 16.1429 16.1429 20.5105 10.7552 20.5105C5.36757 20.5105 1 16.1429 1 10.7552C1 5.36757 5.36757 1 10.7552 1C16.1429 1 20.5105 5.36757 20.5105 10.7552Z"
			stroke="inherit"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M18.2357 18.7943L22.4524 23"
			stroke="inherit"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default SearchIcon;
