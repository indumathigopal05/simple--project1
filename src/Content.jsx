
import ItemList from "./ItemList";
//import AddItem from './AddItem.jsx';

const Content =({items,handleCheck,handleDelete})=>{

        return (
    <main>
        {(items.length) ?(
       <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete} />
                ):(
            <p style={{textAlign:"center",color:"red"}}>Your List is Empty</p>
        )
      }
        </main>
        )
      }
export default Content;
    
