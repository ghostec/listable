import React from 'react'
import ReactDOM from 'react-dom'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = response => {
  console.log(response)
}

ReactDOM.render(
  <FacebookLogin
    appId='1348819451895659'
    fields='name,email,picture'
    callback={responseFacebook}
  />,
  document.getElementById('app')
)
