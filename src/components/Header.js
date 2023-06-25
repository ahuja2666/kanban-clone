import { Divider } from "@mui/material";


export default function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-5 py-2 ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center bg-[#F5F5F5] rounded-md">
            <div className="pl-2">
              <svg className="fill-current text-[#787486] w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path className="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </div>
            <input
              className="w-70 rounded-md bg-[#F5F5F5] text-[#787486] leading-tight focus:outline-none py-2 px-2"
              type="text" placeholder="Search for anything..." />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center mx-5">
              <div className="mx-2">
                <img className="cursor-pointer" height="24" width="24" alt="calender icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687064665/kanban-clone/calendar-2_jrpsmk.png" />
              </div>
              <div className="mx-2">
                <img className="cursor-pointer" height="24" width="24" alt="comments icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687064734/kanban-clone/message-question_rvttqw.png" />
              </div>
              <div className="mx-2">
                <img className="cursor-pointer" height="24" width="24" alt="notification icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687064793/kanban-clone/notification_eb2ojp.png" />
              </div>
            </div>
            <div className="flex justify-between items-center mx-5">
              <div className="flex flex-col mr-4">
                <div>
                  <h3 className="text-[#0D062D] font-normal text-md whitespace-nowrap">Anima Agrawal</h3>
                </div>
                <div className="self-end">
                  <h5 className="text-[#787486] text-sm">U.P, India</h5>
                </div>
              </div>
              <div className="flex justify-between items-center" >
                <div className="mr-1">
                  <img className="rounded-full" height="38" width="38" alt="user avatar" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071152/kanban-clone/image_1_pqzlq1.png" />
                </div>
                <div>
                  <img className="cursor-pointer" alt="arrow down icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687064888/kanban-clone/arrow-down_piozds.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Divider />
    </header>
  )
}
