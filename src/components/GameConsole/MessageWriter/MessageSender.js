//css
import "./MessageSender.css";

//React
import React from "react";

//Classes
import server from "../../../classes/server";

//Redux
import { connect } from "react-redux"
import { insertInGameConsole } from '../../../containers/Game/game-actions';

const mapStateToProps = (state) => {
    return {
    }
  }
const mapDispatchToProps = (dispatch) => {
return {
    insertInGameConsole: (msg, sender, info) => dispatch(insertInGameConsole(msg, info, sender))
}
}
//Input to for sanding messages to the console
const MessageSender = (props) => {

    let textInputVal ;
    //Send message to the GameConsole
    
    return (
        <div className="message-sender console-message">
                <button onClick={() => {
                    props.insertInGameConsole(
                        textInputVal.target.value,
                        server.Params.gameConsoleSenderType.plyer,
                        server.Params.gameConsoleMessageTypes.player
                    )
                    textInputVal.target.value = '';
                }} >
                Send</button>
                <input placeholder="Write message" type={"text"} onChange={ (e) => {
                    textInputVal = e;
                    }}></input>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageSender)