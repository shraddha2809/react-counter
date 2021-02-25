import "./App.css";
import{useState} from "react";

function Counter(){
    const [count,setCount]= useState(0);

    const inc=()=>{
        setCount(count+1);
    };
    const dec  = () =>{
        setCount(count-1);
    };

    const increamentFive= () => {
       for(let i=0;i<5;i++){
           console.log("x");

        //prevvalue
        //    setCount(count+1);
           setCount((prev)=>{
              return prev+1;
           });
       }
    }
    const decreamentFive= () => {
        for(let i=0;i<5;i++){
            console.log("x");
 
         //prevvalue
         //    setCount(count+1);
            setCount((prev)=>{
               return prev-1;
            });
        }
     }
    return(
       <div>
           <h1>{count}</h1>
           <button onClick={()=>inc()}>inc</button>
           <button onClick={()=>dec()}>dec</button>
           <button onClick={()=>increamentFive()}>in******</button>
           <button onClick={()=>decreamentFive()}>de******</button>
       </div>
    );
}
export default Counter;