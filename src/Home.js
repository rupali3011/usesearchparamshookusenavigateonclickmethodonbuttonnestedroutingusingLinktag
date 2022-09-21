import { useSearchParams } from "react-router-dom";
function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <>
      <h2>home page</h2>
      <h3>useSearchParams hook in React Router</h3>
      <h3>age is:{age}</h3>
      <h4>city is:{city}</h4>
      <input
        type="text"
        onChange={(e) => setSearchParams({ text: e.target.value })}
      />
      <button onClick={() => setSearchParams({ age: 15, text2: "rupali" })}>
        setage
      </button>
    </>
  );
}
export default Home;
