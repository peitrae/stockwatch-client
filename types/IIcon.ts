interface IIcon {
	className?: string;
}

export interface IIconMultiVariant extends IIcon {
	variant?: 'solid' | 'outlined';
}

export default IIcon;
