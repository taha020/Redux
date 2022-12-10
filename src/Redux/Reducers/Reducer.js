const initialstate = 0 

const Cartitmechanger = ( state = initialstate, action ) => {

    switch(action.type) {
        case "Cart_Add_item"     :   return state + 1; 
        case "Card_Remove_item"  :   return state - 1; 
        default : return state
    }
}

export default Cartitmechanger;