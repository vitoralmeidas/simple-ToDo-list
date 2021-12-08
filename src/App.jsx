import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { title: "Study English", done: false },
      { title: "Study React", done: true },
      { title: "Become Calmer", done: false },
    ]);
  }, []);

  // recebe text como props de SearchBar
  const addAction = (newItem) => {
    // adicionar o novo item na lista (nova lista)
    let newList = [...list];

    // utilizando a lista antiga adiciona newItem recebido via props de SearchBar
    newList.push({ title: newItem, done: false });

    //atualiza a nova lista com o que foi digitado
    setList(newList);
  };

  const handleToggleDone = (index) => {
    //marcar o item na lista (nova lista) como feito <del>
    let newList = [...list];

    // quando <li> é clicado altera o boolean de done para marcar ou nao
    newList[index].done = !newList[index].done;

    setList(newList);
  };

  return (
    <>
      <div className=" bg-blue-300 flex flex-col gap-3 p-2">
        <div>
          <h1 className="text-2xl">To Do List</h1>
        </div>
        <div>
          <SearchBar onEnter={addAction} />
        </div>
        <ul>
          {list.map((item, index) => (
            <li
              onClick={() => handleToggleDone(index)}
              key={index}
              className="pl-3"
            >
              {/* checando se o done é true or false parar setar <del> nele ou nao */}
              {item.done && <del>{item.title}</del>}
              {!item.done && item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
