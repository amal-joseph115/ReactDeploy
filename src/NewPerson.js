import {useState} from 'react';

const NewPerson=(props)=>{
    const [nameVal,setName]=useState('');
    const [ageVal,setAge]=useState('');

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        let data={
            id: Math.random().toString(),
            name:nameVal,
            age:parseInt(ageVal)
        };
        props.change(data);
        //console.log(data);
        setName('');
        setAge('')
    }
    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setAge(event.target.value);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label>Name:</label>
                <input type="text" onChange={nameChangeHandler} value={nameVal}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="number" min='0' step='1' onChange={ageChangeHandler} value={ageVal}/>
            </div>
            <button type="submit">Add person</button>
        </form>
        
    );
}
export default NewPerson;