import React from 'react'
import "../ErrorPage/ErrorPage.css"
// Bu component url'e yanlış ya da eksik bir bilgi girildiğinde kullanıcıyı uyarmak için. 
function ErrorPage() {
  return (
    <div className="container error">
      <h1>ERROR 404 COULD NOT FOUND THE PAGE</h1>
    </div>
  );
}
// React.memo gereksiz render işleminin önüne geçmiş oluyoruz.
export default React.memo(ErrorPage)