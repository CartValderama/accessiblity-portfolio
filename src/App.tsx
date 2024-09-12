import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutMe from "./layouts/AboutMe";
import ExpAndProj from "./layouts/ExpAndProj";
import Skills from "./layouts/Skills";

const queryClient = new QueryClient();

export default function App() {
  return (
    <main className="max-w-5xl m-auto my-5 text-primary">
      <div className="flex flex-col gap-1 md:gap-2">
        <AboutMe />
        <div className="flex flex-col md:flex-row gap-1">
          <Skills />
          <QueryClientProvider client={queryClient}>
            <ExpAndProj />
          </QueryClientProvider>
        </div>
      </div>
    </main>
  );
}
