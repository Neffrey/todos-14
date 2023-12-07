// COMPONENTS
import CreateTaskModal, { LoginBtn } from "~/components/create-task-modal";
import ProtectedContent from "~/components/protectedContent";
import TaskTableController from "~/app/_home-and-layout-components/tasks-table/table-controller";

const Home = () => {
  return (
    <div
      // HERO ROW
      className="flex w-full flex-wrap items-center justify-around gap-12 bg-gradient-to-br from-background to-background/50 px-4 py-16 md:justify-center md:px-20"
    >
      <div className="flex w-full flex-col gap-5 md:w-1/2 lg:w-1/3">
        <h1 className="text-bg-foreground w-full text-center text-5xl font-extrabold tracking-wider sm:text-[5rem]">
          nToDos
        </h1>
        <h2 className="text-bg-foreground w-full text-center text-xl tracking-wider">
          Just a lil todo app by Neffrey
        </h2>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2 lg:w-1/5">
        <ProtectedContent
          authedRoles={["ADMIN", "USER"]}
          fallback={<LoginBtn />}
        >
          <CreateTaskModal />
        </ProtectedContent>
      </div>
      <ProtectedContent authedRoles={["ADMIN", "USER", "RESTRICTED"]}>
        <TaskTableController />
      </ProtectedContent>
    </div>
  );
};

export default Home;
