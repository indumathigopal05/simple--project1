import { useState} from "react"
import  Header  from './Header.jsx';
import  Content  from './Content.jsx';
import Footer from './Footer.jsx';
import'./index.css';
import AddItem from './AddItem.jsx';

function App() {
        const[items,setItems]=useState(
      [
        {
          id:1,
          checked:true,
          item:"Pratice Coding"
        },
        {
          id:2,
          checked:false,
          item:"Read a Book"
        },
        {
          id:3,
          checked:false,
          item:"Play a Circket"
        }
      
      ]);
      const [newItem,setNewItem]=useState('')
      
      const addItem=(item)=>{
          const id=items.length ? items[items.length-1].id+1 :1;
          const addNewItem={id,checked:false,item}
          const listItems=[...items,addNewItem]
          setItems(listItems)

      }
      const handleDelete = (id) =>{
        const listItem=items.filter((item) => 
        item.id!==id)
        setItems(listItem)
        localStorage.setItem("todo_list",JSON.stringify(listItem))
      }
      
      const handleSubmit=(e)=>{
        e.preventDefault()
        if(!newItem) return;
      addItem(newItem)
      setNewItem('')
      }
          const handleCheck = (id) => {
            const listItem= items.map((item) =>
            item.id===id ? {...item, checked:!item.checked} : item)
            setItems(listItem)
            localStorage.setItem("todo_list",JSON.stringify(listItem))
          }
    return (
         <div className='App'>
        
        <Header title="To Do LIST" />
        <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}/>
        <Footer
        length={items.length}
         />
        


        </div>
    );
}

export default App;