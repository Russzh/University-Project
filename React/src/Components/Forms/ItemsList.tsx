import * as React from 'react';

interface IItemListProps {
	columns: {
		DisplayName: string,
		InternalName: string,
		Render: (x: any) => React.ReactNode
	}[],
	items: any[]
}

export default class ItemsList extends React.Component<IItemListProps, {}> {
	public constructor(props: IItemListProps) {
		super(props);
	}

	public render() {
		const tableColumns = this.props.columns.map((x, i) => 
			<th key={`col-${i}`}>{x.DisplayName}</th>
		);
		const tableRows = this.props.items.map((x, i) => {
			const row = this.props.columns.map((column, columnIndex) => {
				console.log("x:", x);
				console.log("x[column.InternalName]:", x[column.InternalName]);
				console.log("column.Render(x[column.InternalName]):", column.Render(x[column.InternalName]));
				return <td key={`row-item-${columnIndex}`}>{column.Render(x)}</td>
			});
			return (
				<tr key={`row-${i}`}>{row}</tr>
			);			
		});

		return (
			<div>
				<table>
					<thead>
						<tr>{tableColumns}</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</table>
			</div>
		);
	}
}