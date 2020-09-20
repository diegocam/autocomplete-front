import React from 'react';

interface Props {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a user's name"
        value={searchTerm}
        onChange={(
          ev: React.ChangeEvent<HTMLInputElement>,
        ): void => setSearchTerm(ev.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >Button</button>
      </div>
    </div>
  )
}

export default InputField;
