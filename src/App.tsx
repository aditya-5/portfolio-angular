import { lazy, Suspense } from "react";
import "./App.css";

// CharacterModel import removed while 3D is temp disabled
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            {/* TEMP DISABLED: <Suspense><CharacterModel /></Suspense> */}
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
