import React from "react"
import "./Main.scss"

const App = () => {
  const [markdown, setMarkdown] = React.useState("")

  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.currentTarget.value)
  }

  return (
    <div id="Wrapper">
      <div id="Note">
        <div className="Title TitleNote noselect">
          <h1>Markdown</h1>
          <div className="TextArea"></div>
        </div>
      </div>
      <div id="link"></div>
      <div id="Previewer" className="noselect">
        <div className="Title TitlePreview">
          <h1>Previewer</h1>
          <div className="TextArea"></div>
        </div>
      </div>
    </div>
  )
}

export default App
