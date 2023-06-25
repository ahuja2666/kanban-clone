import { Divider } from "@mui/material";


export default function Sidebar() {
  return (
    <aside className="hidden lg:block overflow-y-auto no-scrollbar">
      <div className="flex flex-col overflow-y-auto border-r px-5 pt-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-between items-center space-x-2">
            <img alt="kanban app logo" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686984252/kanban-clone/colorfilterlogo_q278sk.png" />
            <h1 className="font-semibold text-xl">Project M.</h1>
          </div>
          <div>
            <img className="cursor-pointer" alt="left arrow icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686984399/kanban-clone/Group_639arrow_lnjdqc.png" />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col overflow-y-auto border-r px-5 pb-8">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 px-2 ">
            <div className="space-y-3 ">
              <a
                className="flex transform items-center rounded-lg px-3  text-[#787486] transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/#"
              >
                <img alt="home icon" width="24" height="24" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686991398/kanban-clone/categoryhome_vhynte.png" />
                <span className="mx-4 text-[#787486] text-[16px] font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">Home</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3  text-[#787486] transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/#"
              >
                <img alt="message icon" width="24" height="24" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686992131/kanban-clone/messagemessage_vqupuy.png" />
                <span className="mx-4 text-[#787486] text-[16px] font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">Messages</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3  text-[#787486] transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/#"
              >
                <img alt="tasks icon" width="24" height="24" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686992159/kanban-clone/task-squaretask_famdek.png" />
                <span className="mx-4 text-[#787486] text-[16px] font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">Tasks</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3  text-[#787486] transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/#"
              >
                <img alt="members icon" width="24" height="24" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686992183/kanban-clone/profile-2usermember_flcctl.png" />
                <span className="mx-4 text-[#787486] text-[16px] font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">Members</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3  text-[#787486] transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/#"
              >
                <img alt="setting gear icon" width="24" height="24" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686992203/kanban-clone/setting-2setting_w2ko99.png" />
                <span className="mx-4 text-[#787486] text-[16px] font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">Settings</span>
              </a>
            </div>
            <Divider />
            <div className="space-y-1 ">
              <div className="flex justify-between items-center">
                <div>
                  <label className="px-3 text-xs font-semibold uppercase text-[#787486]">
                    MY PROJECTS
                  </label>
                </div>
                <div>
                  <img className="cursor-pointer" alt="add projects icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686992628/kanban-clone/add-square_rzvt9e.png" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto border-r px-5 ">
        <div className="flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 px-5">
            <ul className="list-disc">
              <li className="text-[#7AC555] mx-4 px-3 py-1 text-[16px] font-medium ">
                <span className=" text-[#787486] transition-colors duration-300 hover:text-[#0D062D] cursor-pointer">Mobile App</span>
              </li>
              <li className="text-[#FFA500] mx-4 px-3 py-1 text-[16px] font-medium ">
                <span className=" text-[#787486] transition-colors duration-300 hover:text-[#0D062D] cursor-pointer">Website Redesign</span>
              </li>
              <li className="text-[#E4CCFD] mx-4 px-3 py-1 text-[16px] font-medium ">
                <span className=" text-[#787486] transition-colors duration-300 hover:text-[#0D062D] cursor-pointer">Design System</span>
              </li>
              <li className="text-[#76A5EA] mx-4 px-3 py-1 text-[16px] font-medium ">
                <span className=" text-[#787486] transition-colors duration-300 hover:text-[#0D062D] cursor-pointer">Wireframes</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto border-r px-5 py-16 ">
        <div className="flex flex-1 flex-col justify-between items-center text-center bg-[#f5f5f5] rounded-xl relative p-4">
          <div className="absolute -top-8 h-16 w-16 bg-[#f5f5f5] rounded-full flex justify-center items-center" >
            <img height="16" width="17" alt="lamp icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1686999114/kanban-clone/lamp-on_kdhhtw.png" />
          </div>
          <h4 className="font-semibold text-sm mt-4 mb-3">Thoughts Time</h4>
          <p className="text-[#787486]" >We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <div className="mt-5">
            <input type="text" value={"Write a message"} className=" w-4/5 h-12 p-5" />
          </div>
        </div>
      </div>
    </aside>
  )
}
