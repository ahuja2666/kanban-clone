import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 7px;
  max-width: 350px;
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <div className='flex justify-between my-2 w-full'>
              <div>
                {(item?.chip === "Low") && <div className='px-2 py-1 rounded-md bg-[#DFA87433] text-[#D58D49]'>{item?.chip}</div>}
                {(item?.chip === "High") && <div className='px-2 py-1 rounded-md bg-[#D8727D1A] text-[#D8727D]'>{item?.chip}</div>}
                {(item?.chip === "Completed") && <div className='px-2 py-1 rounded-md bg-[#83C29D33] text-[#68B266]'>{item?.chip}</div>}
              </div>
              <div>
                <h6>...</h6>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                <h3 className='font-semibold text-lg'>{item?.head}</h3>
              </div>
              <div>
                <p className='text-[#787486] text-sm'>{item?.Task}</p>
              </div>
            </div>
            <div className='flex justify-between my-2 gap-2 items-center'>
              <div>
                <AvatarGroup>
                  {
                    item?.images?.map((item, index) => {
                      return (
                        <Avatar sx={{ width: 24, height: 24 }} alt="Avatar" src={item} />
                      )
                    })
                  }
                </AvatarGroup>
              </div>
              <div className='flex justify-between gap-2 items-center'>
                <div className='flex justify-between gap-2 items-center'>
                  <div>
                    <img height="20" width="20" alt="comments icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687096433/kanban-clone/message_mkdi8x.png" />
                  </div>
                  <div>
                    <span className='text-sm text-[#787486]'>{item?.comments} comments</span>
                  </div>
                </div>
                <div className='flex justify-between gap-2 items-center'>
                  <div>
                    <img height="20" width="20" alt="comments icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687096442/kanban-clone/folder-2_hpqniu.png" />
                  </div>
                  <div>
                    <span className='text-sm text-[#787486]'>{item?.files} files</span>
                  </div>
                </div>
              </div>
            </div>

          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
