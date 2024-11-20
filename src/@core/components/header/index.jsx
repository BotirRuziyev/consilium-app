import UserAccount from '../user-account'

const Header = () => {
    return (
      <>
        <header className="header">
          <div className="header__logo"></div>
          <UserAccount />
        </header>
      </>
    )
  }
  
  export default Header