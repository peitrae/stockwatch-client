import IIcon from '@/types/IIcon';

const UserIcon: React.FC<IIcon> = ({ className }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="inherit"
		xmlns="http://www.w3.org/2000/svg"
		className={`icon user-icon ${className}`}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.3033 24C7.28593 24 3 23.2409 3 20.2021C3 17.1633 7.2583 14.3994 12.3033 14.3994C17.3206 14.3994 21.6066 17.137 21.6066 20.1745C21.6066 23.212 17.3482 24 12.3033 24Z"
			fill="inherit"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.3033 11.9264C15.596 11.9264 18.2665 9.25592 18.2665 5.9632C18.2665 2.66917 15.596 0 12.3033 0C9.01056 0 6.34004 2.66917 6.34004 5.9632C6.32824 9.24408 8.9803 11.9146 12.2612 11.9264H12.3033Z"
			fill="inherit"
		/>
	</svg>
);

export default UserIcon;
