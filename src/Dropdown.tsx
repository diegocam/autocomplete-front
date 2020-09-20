import React from 'react';
import { User } from './types/User';
import classNames from "classnames";

interface Props {
  users: User[],
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Dropdown: React.FC<Props> = ({ users, searchTerm, setSearchTerm }) => {
  const isResultEmpty = users.length === 0;
  const resultMatchesInput = users.length === 1 && users[0].name === searchTerm;

  return (
    <div
      className={classNames({
        'dropdown-menu': true,
        'w-100': true,
        show: !isResultEmpty && !resultMatchesInput,
      })}
    >
      {users.map((user, k) =>
        <span
          key={k}
          className="dropdown-item"
          onClick={() => setSearchTerm(user.name)}>{user.name}</span>
      )}
    </div>
  )
}

export default Dropdown;
