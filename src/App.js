import React, {useState} from "react";

const App = () =>{

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(prefersDarkScheme.matches ? 'dark' : 'light');
    console.log(theme);

    const changeTheme = () =>{
        setTheme(theme => theme === 'dark' ? "light" : "dark" )
    }

    return(
        <div className= {`content ${theme == 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <button className="btn-toggle" onClick={changeTheme}>Toggle Dark-Mode</button>
            <h1>Hey there! This is just a title</h1>
            <p>I am just a boring text, existing here solely for the purpose of this demo</p>
            <p>And I am just another one like the one above me, because two is better than having only one</p>        
        </div>
        )
}

export default App;