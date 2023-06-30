import react, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { PiChartBarBold } from "react-icons/pi";
import '../styling/style.css';
import TitleContainer from "../components/TitleContainer";
import Blogs from "./Blogs";
import Home from "./Home";

export default class Layout extends Component {
    render() {
        return <div>
            <p>PoC 5stream</p>
            <PiChartBarBold className="icons" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    }
};