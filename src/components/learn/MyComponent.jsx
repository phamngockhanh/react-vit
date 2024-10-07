import './style.css';

const MyComponent = () =>{
    const khanh ={
        name: "khanh",
        age: 25
    }
    return(
        <>
            <div>{JSON.stringify(khanh)}PN Khanh update</div>
            <div>{console.log("Khanh")}</div>
            <div className="child"
                    style={
                        {borderRadius:"10px"}
                    }
                >child</div>
        </>
    )
  }

  export default MyComponent;