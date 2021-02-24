import React, { useState } from "react";

function Categories({ searchCat, categories }) {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const regex = / /gi;
  return (
    <div>
      <div className="all">
        <form
          className="orderCat"
          onSubmit={(e) => {
            e.preventDefault();
            searchCat(input);
            setInput("");
          }}
        >
          <input
            className="send"
            type="submit"
            value="Categories"
            onClick={() => setShowResults(!showResults)}
          />
        </form>

        {showResults ? (
          <div className="results">
            {categories.map((cat) => {
              return (
                <option
                  className="list"
                  key={cat.id}
                  onClick={() =>
                    window.open(
                      `https://www.mercadolibre.com.ar/c/${cat.name}
                        .replace(regex, "-")
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(",", "")}`,
                      "_blank"
                    )
                  }
                  style={{ cursor: `pointer` }}
                >
                  {cat.name}
                </option>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Categories;