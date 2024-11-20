import avatarImg from '@assets/images/avatar.png'

const UserAccount = () => {
  return (
    <div className="header__user user-account">
        <div className="user-account__messages"></div>
        <div className="user-account__avatar">
          <img src={avatarImg} />
        </div>
        <span className="user-account__name">Иван Иванов</span>
        <div className="g-arrow"></div>
    </div>
  )
}

export default UserAccount