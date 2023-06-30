import { Component, ReactChild, ReactNode } from "react"
import Blogs from "../pages/Blogs";

interface TitleContainerProps {
    title: string;
    children: ReactNode
}

interface TitleContainerState {

}

export default class TitleContainer extends Component<TitleContainerProps, TitleContainerState> {
    render() {
        return (
            <div className="titleContainer">
                <div className="titleContainerBorder">{this.props.children}</div>
                <div className="titleContainerText">{this.props.title}</div>
            </div>

        );
    }
}