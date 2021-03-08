import React, { useState } from 'react';
import {useParams,useLocation} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import axios from 'axios'

// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={docco} language={language} children={value} />
    }
  }
  
const Topic = () => {
  
  const location = useLocation();
  console.log(location.pathname);
  const [text, setText] = useState(' ');
  const [note, setNote] = useState(' ');

  console.log(location.pathname)
  axios.get(location.pathname.toLocaleLowerCase()).then((res)=> {
    console.log(res.data)
    setText(res.data.data)
  }).catch((err) => {
    console.log(err)

  })

  const showNotes = () => {
    axios.get(location.pathname.toLocaleLowerCase()+"/note").then((res)=> {
      console.log(res.data)
      setNote(res.data.data)

    }).catch((err) => {
      console.log(err)
  
    })
    
  }

    return (
        <div className="container">
            <ReactMarkdown renderers={renderers} plugins={[gfm]}  children={text} />
            <div>
              { ('/subjects/Apcsa/week01' == location.pathname) && <button className="btn btn-primary" onClick = {showNotes}>
                Click here and scroll down to see solution and explanation. 
              </button>
              }
            </div>
            <ReactMarkdown renderers={renderers} plugins={[gfm]}  children={note} />

        </div>
    )
}

export default Topic;