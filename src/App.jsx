// import Loading from "./component/Loading";
import Router from "./router/Router";
import useAuth from "./hooks/use-auth";
import Loading from "./components/Loading";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
