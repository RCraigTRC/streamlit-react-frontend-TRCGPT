import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode, ChangeEvent } from "react"
import "./styles/chat.css"

interface State {
  disabled: boolean
  query: string
  cardGroupVisible: boolean
}

class MyComponent extends StreamlitComponentBase<State> {
  public state = { disabled: true, query: "", cardGroupVisible: true }

  public render = (): ReactNode => {

    const buttonId = this.state.disabled ? "sendButtonDisabled" : "sendButton";

    return (
      <div id="field-group">
        {this.state.cardGroupVisible && (
          <div>
            <div id="title-group">
              <img id="trc-logo" src={require("./images/TRC Logo final_Color.png")} alt="trc-logo"/>
              <h2 id="chat-title">HOW CAN I HELP YOU TODAY?</h2>
            </div>
            <div id="card-group">
              <div className="chat-card">
                <h4>Be specific with your prompts</h4>
                <p className="card-p">Provide as much detail as possible to ensure your assistant provides you with correct information. GIve context or background in your prompt and specify format of your desired output.</p>
              </div>
              <div className="chat-card">
                <h4>Don't hesitate to ask follow-up questions</h4>
                <p className="card-p">Feel free to ask the same question in multiple ways to get the best response.  Sometimes one change in the requested action verb can have significant impact on the response.</p>
              </div>
              <div className="chat-card">
                <h4>Review and Edit Outputs</h4>
                <p className="card-p">While TRCGPT is here to answer your important questions, help create content, generate ideas, and assist you in other ways, it is improtant to check the output for accuracy and completeness. Remember, TRCGPT helps you create so you should still take some time to make the responses your own.</p>
              </div>
              <div className="chat-card">
                <h4>Start a new chat for each new set of inquiries</h4>
                <p className="card-p">This will help your assistant not get confused and lower the risk of your assistant providing incorrect information.</p>
              </div>
            </div>
          </div>
        )}
        <div className="chatgpt-input">
            <input type="text" id="inputField" placeholder="Message TRCGPT" value={this.state.query} onChange={(e) => this.onChange(e)}/>
            <button id={buttonId} onClick={() => this.onSubmit()}>
                <img id="send-image" src={require("./images/send_icon.png")} alt="arrow-logo"/>
            </button>
        </div>
      </div>
    )
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    this.setState({ disabled: query === "" });
    this.setState({ query });
    console.log(this.state)
  }

  private onSubmit = (): void => {
    Streamlit.setComponentValue(this.state.query);
    this.setState({ disabled: true });
    this.setState({ query: "" });
    this.setState({ cardGroupVisible: false });
  }

}

export default withStreamlitConnection(MyComponent)