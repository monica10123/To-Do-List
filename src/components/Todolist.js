import React, {useState} from 'react'

function Todolist() {

    const [inputvalue, setinputvalue]=useState("");
    const [alllistitems, setalllistitems]=useState([]);

    function captureinputvalue(event)
    {
        let enteredvalue=event.target.value;
        setinputvalue(enteredvalue);
    }

    function addtolist()
    {
        setalllistitems(()=>{
            return[...alllistitems, inputvalue]
        })
        setinputvalue("");
    }

    function deleteitems(index)
    {
        const newlist = [...alllistitems];
        newlist.splice(index, 1);
        setalllistitems(newlist);
    }

    return (
        <div className="m-5 p-5">
            <div className="border container d-flex">
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Today's Task:</span>
                <input type="text" className="form-control m-5"  aria-label="Username" aria-describedby="basic-addon1" onChange={captureinputvalue} value={inputvalue} />
                </div>
                <button type="button" class="btn btn-outline-success" onClick={addtolist}>Add</button>
            </div>
            <div className="border container p-5">
                <ul>
                {
                    alllistitems.map((eachvalue,index)=>{
                        return <div className="d-flex justify-content-between m-2" >
                            <li>{eachvalue}</li>
                            <button className="btn btn-outline-danger" onClick={()=>deleteitems(index)}>DELETE</button>
                        </div>
                    })
                }
            </ul>
        </div>
    </div>
  )
}
export default Todolist;

