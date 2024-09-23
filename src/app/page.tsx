import { type NextPage } from "next";
import DragAndDropApp from "./_components/DraggableComponent";
import SideToolBar from './_components/SideToolBar';

const Page: NextPage = () => {
  return (
    <div className="h-screen w-screen relative">
      <SideToolBar />
      <DragAndDropApp />  
    </div>
  );
};

export default Page;