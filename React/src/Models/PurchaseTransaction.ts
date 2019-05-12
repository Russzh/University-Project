import Material from './Material';

export default class PurchaseTransaction {
	public Id: string;
	public Material: Material;
	public UnitPrice: number;
	public Amount: number;
	public Discount: number;
	public PurchaseDate: Date;
}