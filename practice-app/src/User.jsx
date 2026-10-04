const User = (props) => {
    console.log(props);  // {userData : {}}

    let {id, fullname:{fname,lname}, age, address:{city, location:{lat, long}}} = props.userData
    return (
        <div>
            <h1>User Component</h1>
            <h2>Hii {fname} {lname} your age is {age} living in {city}</h2>
            <p>location : latitude {lat} longitude {long}</p>

        </div>
    );
};

export default User;