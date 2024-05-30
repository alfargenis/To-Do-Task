import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };
  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "Aprender ReactJs", completed: false },
//   { text: "Entrenar en el Box", completed: false },
//   { text: "Leer un libro de GitHub", completed: false },
//   { text: "Aprender TailwindCss", completed: false },
//   { text: "Terminar de ser Full Stack en JavaScript", completed: false },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
