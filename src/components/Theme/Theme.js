import React, { createContext, useState } from 'react'

const  ThemeContext = createContext();

export const Theme =({children})=>{
    // Card ve Artist sayfasında bulunan tema switch butonu'nun initial değerini burada geçiyoruz.
    const [theme,setTheme] = useState("Light");
    const values = {theme,setTheme};
    // Arka plan rengini App.js üzerinden değiştirmektense burada değiştirip, App.js'e pure haliyle yolluyoruz.
    return (
      <div className={`${theme === "Light" ? "Light" : "Dark"}`}>
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
      </div>
    );
}

export default ThemeContext;