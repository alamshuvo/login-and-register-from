import { useContext } from "react";
import { AuthContext } from "../AuthProveider/AuthProveider";


const Home = () => {
    const user=useContext(AuthContext);
    console.log("user to nai ");
    return (
        <div>
            this is home component
        </div>
    );
};

export default Home;