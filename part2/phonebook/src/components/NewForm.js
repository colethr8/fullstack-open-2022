import React from "react";

const NewForm = ({ submitHandler, nameValue, nameHandler, numberValue, numberHandler }) => {
    return (
        <div>
            <h3>Add New</h3>
            <form onSubmit={submitHandler}>
                <div>
                    name: <input value={nameValue} onChange={nameHandler} />
                </div>
                <div>
                    number: <input value={numberValue} onChange={numberHandler} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

export default NewForm;