import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AddPlayerFrom = ({ addPlayer }) => {

    let playerInput = React.createRef();

    let handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            ref={playerInput}
            placeholder="Enter a player's name"
            />

            <input
            type="submit"
            value="Add Player"
            />
        </form>
    );
}

AddPlayerFrom.propTypes = {
    handleSubmit: PropTypes.func
}

export default AddPlayerFrom;