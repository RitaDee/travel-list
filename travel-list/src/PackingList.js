import { Item } from "./Item";

export const PackingList = ({ items, onDeleteItem, onToggle }) => {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggle={onToggle}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
};
