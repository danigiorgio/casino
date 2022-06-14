import PropTypes from 'prop-types';

import Avatar from '@/components/Avatar';

const UserProfile = ({ avatar, name, event }) => {
  return (
    <div className="ui list">
      <div className="item">
        <Avatar src={avatar} alt="Avatar" />
        <div className="content">
          <span className="header">
            <strong className="name">{name}</strong>
          </span>
          <p className="description">{event}</p>
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  event: PropTypes.string,
};

export default UserProfile;
