const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner"];

export default function MenuFilter({ selected, onChange }) {
    return (
        <div className="menu-filter-wrapper">
            <select
                className="custom-dropdown"
                value={selected}
                onChange={function(e) { onChange(e.target.value); }}
                aria-label="Filter menu by category"
            >
                {CATEGORIES.map(function(cat) {
                    return (
                        <option key={cat} value={cat}>{cat}</option>
                    );
                })}
            </select>
        </div>
    );
}
