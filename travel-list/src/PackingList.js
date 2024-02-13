import { Item } from "./Item";

export const PackingList = ({ items, onDeleteItem }) => {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
				))}
			</ul>
		</div>
	);
};
