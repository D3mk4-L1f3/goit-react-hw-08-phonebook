import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { MdLogout } from 'react-icons/md';
import { StyledUserMenuContainer } from 'style-components/styledUserMenu';

export default function UserMenu() {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserMenuContainer>
      <div>
        <p>
          Welcome{' '}
          <span style={{ fontStyle: 'italic', color: 'yellow' }}>
            {name.toUpperCase()}
          </span>{' '}
          :)
        </p>

        <IconButton
          variant="contained"
          title="to Logout :("
          onClick={handleLogOut}
        >
          <MdLogout />
        </IconButton>
      </div>
    </StyledUserMenuContainer>
  );
}
