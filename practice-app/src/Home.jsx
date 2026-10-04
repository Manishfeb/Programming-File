import User from "./User";

const Home = (props) => {
    console.log(props);  // {userData: {}}


    return (
        <div>
            <h1>Home Component</h1>
            <User userData={props.UserData} />
        </div>
    );
};
export default Home;