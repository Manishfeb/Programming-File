const Child1 = (props) => {
    console.log(props);

    return (
        <div>
            <h1>I am a Child Component</h1>
            <h2>{props.str}</h2>
        </div>
    )
}

export default Child1;