import { AppBar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { StyledAppBar } from 'style-components/styledNavigation';
import { FcContacts } from 'react-icons/fc';
import { StyledLink } from 'style-components/styledUserMenu';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar style={StyledAppBar}>
      <StyledLink
        to="/"
        style={{ textAlign: 'center' }}
        title="Back to main :)"
      >
        <FcContacts size={30} />
        <p>PhoneBook</p>
      </StyledLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
