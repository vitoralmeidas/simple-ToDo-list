import React, { useState, useEffect } from "react";

export const SearchBar = (props) => {
  const [text, setText] = useState("");

  // manda texto via props para App.js
  const handleKeyUp = (e) => {
    //checa se o evento é a tecla Enter (13) pressionada
    if (e.keyCode == 13) {
      if (props.onEnter) {
        // aqui onde text é enviado via props para App.js
        props.onEnter(text);
      }

      // limpa o search bar quando teclar Enter é pressionada
      setText("");
    }
  };

  return (
    <div>
      <input
        placeholder="Adicione um item..."
        className="border ring-1 ring-black rounded-md mb-2 text-sm p-2"
        type="text"
        // evento para atualizar 'text' para ficar visivel enquanto digitamos
        onChange={(e) => setText(e.target.value)}
        // evento para lidar com a tecla Enter pressionada
        onKeyUp={handleKeyUp}
        value={text}
      />
    </div>
  );
};
