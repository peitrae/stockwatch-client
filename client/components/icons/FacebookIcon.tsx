import IIcon from '@/types/Icon';

const FacebookIcon: React.FC<IIcon> = ({ className = '' }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="inherit"
		xmlns="http://www.w3.org/2000/svg"
		className={`icon fb-icon ${className}`}
	>
		<path
			d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38822 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35626C10.125 6.34875 11.9165 4.68751 14.6576 4.68751C15.9705 4.68751 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80002 13.875 9.74901V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
			fill="inherit"
			strokeWidth="0"
		/>
	</svg>
);

export default FacebookIcon;
