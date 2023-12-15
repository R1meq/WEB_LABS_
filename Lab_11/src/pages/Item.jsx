import Information from "../components/information";

function Item(props) {
    return (
        <Information id={props.id} key={props.id} shoes={props.shoes}/>
    )
}

export default Item;