

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <button
              className="page-list"
              onClick={() => paginate(number)}
              key={number}
            >
              <li key={number}>
                {number}
              </li>
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;