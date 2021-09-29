import { IconProps } from '@/types';

const MenuIcon: React.FC<IconProps> = ({ className = '' }) => (
	<svg
		viewBox="0 0 24 24"
		fill="inherit"
		xmlns="http://www.w3.org/2000/svg"
		className={`icon menu-icon ${className}`}
	>
		<rect
			x="12"
			y="1.73291"
			width="12"
			height="1.95144"
			rx="0.975722"
			fill="inherit"
		/>
		<rect
			x="3.05176e-05"
			y="8.23782"
			width="24"
			height="1.95144"
			rx="0.975722"
			fill="inherit"
		/>
		<rect
			x="3.05176e-05"
			y="14.7426"
			width="24"
			height="1.95145"
			rx="0.975723"
			fill="inherit"
		/>
		<rect
			x="3.05176e-05"
			y="21.2473"
			width="12"
			height="1.95145"
			rx="0.975723"
			fill="inherit"
		/>
	</svg>
);

export default MenuIcon;
