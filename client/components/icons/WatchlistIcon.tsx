import { IIconMultiVariant } from '@/types/IIcon';

const WatchlistIcon: React.FC<IIconMultiVariant> = ({
	variant = 'solid',
	className,
}) =>
	variant === 'solid' ? (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="inherit"
			xmlns="http://www.w3.org/2000/svg"
			className={`icon watchlist-icon watchlist-icon--solid ${className}`}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.6733 5.38257C20.6733 2.25412 18.5343 1 15.4546 1H8.22219C5.2371 1 3 2.16861 3 5.17393V21.9187C3 22.7441 3.88823 23.264 4.6077 22.8604L11.8663 18.7891L19.0622 22.8536C19.7828 23.2595 20.6733 22.7396 20.6733 21.913V5.38257Z"
				fill="inherit"
				stroke="inherit"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	) : (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`icon watchlist-icon watchlist-icon--outlined ${className}`}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.67 5.38257C20.67 2.25412 18.5314 1 15.4522 1H8.2212C5.23668 1 3 2.16861 3 5.17393V21.9187C3 22.7441 3.88806 23.264 4.6074 22.8604L11.8646 18.7891L19.0592 22.8536C19.7797 23.2595 20.67 22.7396 20.67 21.913V5.38257Z"
				stroke="inherit"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

export default WatchlistIcon;
