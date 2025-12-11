function List(props){

//conditional list rendering, dynamic array and displaying it as list objects

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    //fruits.sort((a, b) => a.calories - b.calories); //Numeric
    //fruits.sort((a, b) => b.calories - a.calories); //Reverse Numeric

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(<>

                <h3 className = "list-category">{category}</h3>
                <ol className = "list-items">{listItems}</ol>

           </>);
}

//In case our list items in the list are missing - uses proptypes for items but its discontinued by react

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List