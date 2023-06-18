import { Button, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { makeStyles } from '@mui/styles';

const buttonSx = {
  "&:hover": {
    borderColor: '#787486',
    color: '#787486'
  },
  borderColor: '#787486',
  color: '#787486'
};


const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#F4D7DA!important",
    color: "#D25B68!important"
  }
}));

const FilterIcon = () => {
  return (
    <img height="16" width="16" alt="filter icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687075846/kanban-clone/filter_rq1v96.png" />
  )
}

const ArrowDownIcon = () => {
  return (
    <img height="16" width="16" alt="filter icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687064888/kanban-clone/arrow-down_piozds.png" />
  )
}

const CalendarIcon = () => {
  return (
    <img height="16" width="16" alt="filter icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687075854/kanban-clone/calendar_sqql8i.png" />
  )
}

const PeopleIcon = () => {
  return (
    <img height="16" width="16" alt="filter icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687077002/kanban-clone/Group_615_uij8ph.png" />
  )
}

export default function HeroSection() {
  const classes = useStyles();
  return (
    <section className="p-8">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center">
            <div className="mx-2">
              <h2 className="font-semibold text-4xl">Mobile App</h2>
            </div>
            <div className="mx-2">
              <img className="cursor-pointer" height="25" width="25" alt="edit icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687069332/kanban-clone/arrow-square-up_mcup82.png" />
            </div>
            <div className="mx-2">
              <img className="cursor-pointer" height="25" width="25" alt="link icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687069322/kanban-clone/Group_626_evpbyc.png" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="cursor-pointer">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <img height="15" width="15" alt="plus icon" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687069381/kanban-clone/add-square_gnf0ch.png" />
                </div>
                <div>
                  <span className="text-[#5030E5] text-sm">Invite</span>
                </div>
              </div>
            </div>
            <div>
              <AvatarGroup classes={{ avatar: classes.avatar }} total={6}>
                <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png" />
                <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_13_dguqst.png" />
                <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png" />
                <Avatar alt="Agnes Walker" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png" />
              </AvatarGroup>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mx-2">
          <div className='flex justify-between gap-3'>
            <div>
              <Button sx={buttonSx} variant="outlined" startIcon={<FilterIcon />} endIcon={<ArrowDownIcon />}>
                Filter
              </Button>
            </div>
            <div>
              <Button sx={buttonSx} variant="outlined" startIcon={<CalendarIcon />} endIcon={<ArrowDownIcon />}>
                Today
              </Button>
            </div>
          </div>
          <div className='flex justify-between items-center gap-5 mr-2'>
            <div>
              <Button sx={buttonSx} variant="outlined" startIcon={<PeopleIcon />}>
                Share
              </Button>
            </div>
            <Divider flexItem orientation="vertical" />
            <div>
              <img className='cursor-pointer' height="40" width="40" alt="snackbar" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687076989/kanban-clone/Group_612_isqjiw.png" />
            </div>
            <div>
              <img className='cursor-pointer' height="20" width="20" alt="snackbar" src="https://res.cloudinary.com/dfegprdja/image/upload/v1687077011/kanban-clone/menu_u0nrct.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
