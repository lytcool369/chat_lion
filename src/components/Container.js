import Presenter from "./Presenter";

import React, { Component, useState } from "react";

export class Container extends Component {
  constructor() {
    super();

    this.state = {
      message: "hello",
      sendMessage: [],
    };
  }

  render() {
    const { message, sendMessage } = this.state;

    const _handleInputTextChange = (e) =>
      this.setState({ message: e.target.value });

    const _handleClickButtonSend = () => {
      if (message) {
        const id = sendMessage.length;
        const setMessage = { id: id, message: message };

        this.setState({
          sendMessage: sendMessage.concat(setMessage),
          message: "",
        });
      }
      console.log(sendMessage);
    };

    return (
      <Presenter
        message={message}
        sendMessage={sendMessage}
        _handleInputTextChange={_handleInputTextChange}
        _handleClickButtonSend={_handleClickButtonSend}
      />
    );
  }
}

export default Container;
