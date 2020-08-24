import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import "./Main.scss"

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`

const App = () => {
  const [content, setContent] = React.useState("")

  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value)
  }

  return (
    <div id="Wrapper">
      <div id="Note">
        <div className="Title TitleNote noselect">
          <h1 className="TitleText">Markdown</h1>
          <div className="TextArea">
            <ContentInput
              value={content}
              onChange={onHandleChange}
              placeholder={"# This Supports Markdown!"}
              name={"content"}
              id="ContectInput"
            />
          </div>
        </div>
      </div>
      <div id="link"></div>
      <div id="Previewer" className="noselect">
        <div className="Title TitlePreview">
          <h1 className="TitleText">Previewer</h1>
          <div className="TextArea">
            <div>
              <ReactMarkdown source={content} className={"markdown"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
