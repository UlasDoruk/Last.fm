import React, { createContext, useState } from 'react'

const  ThemeContext = createContext();

export const Theme =({children})=>{

    const [theme,setTheme] = useState("Light");
    const values = {theme,setTheme};

    return (
      <div className={`${theme === "Light" ? "Light" : "Dark"}`}>
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
      </div>
    );
}

export default ThemeContext;