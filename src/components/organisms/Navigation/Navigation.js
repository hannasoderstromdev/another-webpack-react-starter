import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from 'components/atoms/Icon'

const isActive = (path, match, location) =>
  !!(match || path === location.pathname)

const Navigation = ({ loggedIn }) => (
  <nav data-testid="main-navigation">
    {loggedIn ? (
      <ul>
        <li>
          <NavLink exact isActive={isActive.bind(this, '/')} to="/">
            <span>Home</span>
            <Icon icon={['fas', 'list']} iconsize="1.8rem" />
          </NavLink>
        </li>
        <li>
          <NavLink isActive={isActive.bind(this, '/private')} to="/private">
            <span>Private</span>
            <Icon icon={['fas', 'plus-circle']} iconsize="1.8rem" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <Icon icon={['fas', 'cog']} iconsize="1.8rem" />
          </NavLink>
        </li>
      </ul>
    ) : (
      <ul>
        <li className="disabled">
          <span>Home</span>
          <Icon icon={['fas', 'list']} iconsize="1.8rem" />
        </li>
        <li className="disabled">
          <span>Private</span>
          <Icon icon={['fas', 'plus-circle']} iconsize="1.8rem" />
        </li>
        <li className="disabled">
          <Icon icon={['fas', 'cog']} iconsize="1.8rem" />
        </li>
      </ul>
    )}
  </nav>
)

const mapStateToProps = ({ user }) => ({
  loggedIn: user && user.loggedIn,
})

// NOTE! isActive only works if withRouter is the outermost HOC,
// see this for more details: https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Navigation))
