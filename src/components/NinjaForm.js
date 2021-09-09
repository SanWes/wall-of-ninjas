import React, {useState} from 'react';
import someWord from './Form.module.css'

const NinjaForm = () => {
    
    const [formInfo, setFormInfo] = useState(
        {named:"",
        imgLink:"",
        numProj:"",
        favHobby:"",
        favColor:""}
    )
    
    const [listOfNinjas, setListOfNinjas] = useState([])


    const changeHandler = (e) => {
        // console.log("you are changing inputs -->", e.target.name, e.target.value)

        //UPDATE OBJECT with following 
        setFormInfo({
            ...formInfo, // use ...spread operator to create new copy 
            [e.target.name] : e.target.value  //set this key to be this value 
        })

    }


    // HANDLER FOR WHEN WE SUBMIT FORM 
    // prevent form from refreshing page after submit, add ninja to list of ninjas
    const addNinja = (e) =>{
        e.preventDefault(); //changes default behavior of form
        console.log("submitted the form!");
        console.log(formInfo);

        //add to the list(array) of ninjas the new object containing info from the form
        setListOfNinjas([
            ...listOfNinjas, formInfo
        ])

        //after submitting list of ninjas, clear the entered values to empty.
        setFormInfo(
            {named:"",
            imgLink:"",
            numProj:"",
            favHobby:"",
            favColor:""
        })
    }

    // delete a ninja 
    const deleteNinja = (e,idxOfPersonToDelete) =>{
        console.log("deleting this ninja", idxOfPersonToDelete);
        
        //goal is to delete something at index i, the ninja that was clicked, from list of ninja array
        
        //two seperate ways to do this 
        //1st way ---> filter()
        let newListOfNinjas = listOfNinjas.filter((ninja,idx)=>{
            return idx !== idxOfPersonToDelete;  //return back a new arra of objects where idx not equal to i --> ix is the index number of each item in the list of ninjas
        })

        console.log("new list of Active Ninjas: ", newListOfNinjas);
        setListOfNinjas(newListOfNinjas)

    }




    return (
        <div>
            <form className= {someWord.newNinjaForm} onSubmit = {addNinja}>
                <div className="form-group">

                    <label htmlFor="">Name:</label>
                    <input onChange = { changeHandler } type="text" name="named" value ={formInfo.named} id="" className="form-control" />

                    {/* <input onChange = {(e) => changeHandler(e.target.value)} type="text" name="named" id="" className="form-control" /> */}

                </div>

                <div className="form-group">
                    <label htmlFor="">Image Link:</label>
                    <input onChange = { changeHandler } type="text" name="imgLink" value ={formInfo.imgLink} id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange = { changeHandler } type="text" name="numProj"  value ={formInfo.numProj} id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Hobby:</label>
                    <input onChange = { changeHandler } type="text" name="favHobby" value ={formInfo.favHobby} id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input onChange = { changeHandler } type="text" name="favColor" value ={formInfo.favColor} id="" className="form-control" />
                </div>

                <input type="submit" value="Send Ninja to The Wall" className="btn btn-success mt-3"/>
            </form>

        <hr />


        {
            listOfNinjas.map( (ninja, i) => {
                return (
                 
            <div key = {i} style = {{backgroundColor: ninja.favColor}} className= {`card ${someWord.ninja}`}>
            <hr />
                <img width="150px" height="150px" src={ninja.imgLink} alt="Card cap"/>
                    <div className="card-body">
                        <h4 className="card-title">{ninja.named}</h4>
                        <p className="card-text">
                        Number of Projects: {ninja.numProj} <br />
                        Favorite Hobby: {ninja.favHobby}
                        </p>

                        <button onClick={(e)=>deleteNinja(e,i)} className="btn btn-danger">Retire Ninja</button>
                        {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <hr />
            </div>
                )
            })
        }


        </div>
    ) //end return

}

export default NinjaForm;
