import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePasswordItem, showPasswords} = props
  const {
    websiteInput,
    usernameInput,
    passwordInput,
    id,
    profileLogoClassName,
  } = passwordDetails

  const onClickDeleteIcon = () => {
    deletePasswordItem(id)
  }

  return (
    <li className="password-item-background" key={id}>
      <div className="profile-logo-background">
        <div className={profileLogoClassName}>
          <h1 className="profile-logo">
            {websiteInput.slice(0, 1).toUpperCase()}
          </h1>
        </div>
      </div>
      <div className="profile-details-container">
        <p className="profile-text">{websiteInput}</p>
        <p className="profile-text">{usernameInput}</p>
        {showPasswords && <p className="profile-text">{passwordInput}</p>}
        {!showPasswords && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="password-stars"
          />
        )}
      </div>
      <div className="delete-icon-container">
        <button
          type="button"
          onClick={onClickDeleteIcon}
          className="delete-icon-button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
