import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
  // const scr = "<script>alert('Error!')</script>"
  // return <h2>{scr}</h2>
  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = "Enter here"
  return <input type="text" placeholder={holder}/>
}

const Button = () => {
  // const res = () => {
  //   return "Log in, please"
  // }

  // const p = <p>{res()}</p>
  // return <button>{p}</button>
  // return <button>{4+4}</button>
  const text = "Log in"
  const logged = true
  return <button className="first">{logged ? "Enter" : text}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Button/>
    </div>
  )
}

root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
