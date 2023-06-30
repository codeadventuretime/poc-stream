import { Component } from "react"
import TitleContainer from "../components/TitleContainer";
import Settings from "./Settings";

export default class Home extends Component {
    render() {
        return (<TitleContainer title="Home"><Settings /></TitleContainer>);
    }
}