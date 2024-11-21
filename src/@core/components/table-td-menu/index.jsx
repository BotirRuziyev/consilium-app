import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TableTdMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus({btnval}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {btnval}
      </Button>
      <TableTdMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div className="m-menu-head">
        Выберите тип ячейки
        </div>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="m-icon">

          </div>
          Пустая ячейка
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem className='m-active' onClick={handleClose} disableRipple>
          <div className="m-icon">
          Ч/Ч
          </div>
          Смена
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="m-icon">
          О
          </div>
          Отпуск
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="m-icon">
          У
          </div>
          Учёба
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="m-icon">
          Б
          </div>
          Больничный
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="m-icon">
          К
          </div>
          Командировка
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="m-icon">
          </div>
          Отсутствие
        </MenuItem>
      </TableTdMenu>
    </div>
  );
}
