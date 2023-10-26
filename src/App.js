import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from './PasswordItem'

import './App.css'

const profileLogoClassNames = [
  'blue',
  'yellow',
  'green',
  'orange',
  'brown',
  'grey',
]

class App extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordsCount: 0,
    searchInput: '',
    showPasswords: false,
    passwordItemsList: [],
  }

  renderPasswordItems = () => {
    const {showPasswords, passwordItemsList, searchInput} = this.state
    const updatedPasswordItemsList = passwordItemsList.filter(eachPassword =>
      eachPassword.websiteInput
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    if (updatedPasswordItemsList.length === 0) {
      return (
        <div className="no-passwords-background">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-image"
          />
          <p className="no-passwords-text">No Passwords</p>
        </div>
      )
    }

    return (
      <ul className="password-items-list">
        {updatedPasswordItemsList.map(eachPassword => (
          <PasswordItem
            key={eachPassword.id}
            passwordDetails={eachPassword}
            deletePasswordItem={this.deletePasswordItem}
            showPasswords={showPasswords}
          />
        ))}
      </ul>
    )
  }

  deletePasswordItem = id => {
    this.setState(prevState => ({
      passwordItemsList: prevState.passwordItemsList.filter(
        eachPassword => eachPassword.id !== id,
      ),
      passwordsCount: prevState.passwordsCount - 1,
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    if (websiteInput === '') {
      alert('Please Enter Website')
      return
    }
    if (usernameInput === '') {
      alert('Please Enter Username')
      return
    }
    if (passwordInput === '') {
      alert('Please Enter Password')
    }
    const profileLogoClassName = `profile-logo-container ${
      profileLogoClassNames[
        Math.ceil(Math.random() * profileLogoClassNames.length - 1)
      ]
    }`
    const newPasswordItem = {
      id: uuidv4(),
      websiteInput,
      usernameInput,
      passwordInput,
      profileLogoClassName,
    }
    this.setState(prevState => ({
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      passwordsCount: prevState.passwordsCount + 1,
      passwordItemsList: [...prevState.passwordItemsList, newPasswordItem],
    }))
  }

  onClickShowPasswordsCheckbox = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordsCount,
      searchInput,
    } = this.state

    return (
      <div className="app-background">
        <div className="app-responsive-background">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="passwords-collection-background">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-mobile-image"
            />
            <div className="passwords-form-background">
              <h1 className="passwords-form-heading">Add New Password</h1>
              <form
                className="password-manager-form"
                onSubmit={this.onAddPassword}
              >
                <div className="input-container">
                  <label htmlFor="websiteInput" className="label">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="label-image"
                    />
                  </label>
                  <input
                    type="text"
                    className="user-input"
                    id="websiteInput"
                    onChange={this.onChangeWebsiteInput}
                    value={websiteInput}
                    placeholder="Enter Website"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="usernameInput" className="label">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="label-image"
                    />
                  </label>
                  <input
                    type="text"
                    className="user-input"
                    id="usernameInput"
                    onChange={this.onChangeUsernameInput}
                    value={usernameInput}
                    placeholder="Enter Username"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="passwordInput" className="label">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="label-image"
                    />
                  </label>
                  <input
                    type="password"
                    className="user-input"
                    id="passwordInput"
                    onChange={this.onChangePasswordInput}
                    value={passwordInput}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="add-button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-tablet-image"
            />
          </div>
          <div className="passwords-display-background">
            <div className="passwords-display-header-container">
              <div className="passwords-display-header-text-container">
                <h1 className="passwords-display-header-text">
                  Your Passwords
                </h1>
                <p className="passwords-count">{passwordsCount}</p>
              </div>
              <div className="passwords-display-header-search-container">
                <div className="passwords-display-header-search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon"
                  />
                </div>
                <input
                  type="search"
                  className="user-input"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  placeholder="search"
                />
              </div>
            </div>
            <hr className="separator" />
            <div className="show-passwords-background-container">
              <div className="show-passwords-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={this.onClickShowPasswordsCheckbox}
                  id="checkboxInput"
                />
                <label htmlFor="checkboxInput" className="show-passwords-text">
                  Show Passwords
                </label>
              </div>
            </div>
            {this.renderPasswordItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
