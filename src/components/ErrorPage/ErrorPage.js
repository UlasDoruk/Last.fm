import React from 'react'
import "../ErrorPage/ErrorPage.css"

function ErrorPage() {
  return (
    <div className="container error">
      <h1>ERROR 404 COULD NOT FOUND THE PAGE</h1>
    </div>
  );
}

export default React.memo(ErrorPage)