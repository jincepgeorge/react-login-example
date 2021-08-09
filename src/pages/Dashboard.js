

import { useHistory, Link } from "react-router-dom";
import { DashboardRouter } from "../navigation/DashboardRouter";

const Dashboard = (props) => {
    let history = useHistory();

    return (
        <>
            Dashboard
            <ul>
                <li>
                    <Link to="/dashboard/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/dashboard/about">About</Link>
                </li>
                <li>
                    <button
                        onClick={() => {
                            history.push("/")
                        }}
                    >
                        Sign out
                </button>
                </li>
            </ul>
            <hr />
            <DashboardRouter />
        </>
    )
}
export default Dashboard;