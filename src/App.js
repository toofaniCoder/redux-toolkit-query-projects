import "./App.scss";
import { useGetRandomQuoteQuery } from "./services/quotes";

function App() {
  console.log(useGetRandomQuoteQuery());
  const { data, isFetching, isSuccess, refetch } = useGetRandomQuoteQuery(
    null,
    {
      pollingInterval: 600000, //automatically refetch in 10 minutes
    }
  );

  return (
    <div className="wrapper">
      <div className="quote">
        {isSuccess && (
          <>
            <h4 className="quote__text">{data.content}</h4>
            <p className="quote__author">{data.author}</p>
          </>
        )}
        <button className="quote-button" onClick={refetch}>
          {isFetching ? (
            <i class="fas fa-spinner fa-spin"></i>
          ) : (
            <i class="fas fa-sync"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
