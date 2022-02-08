import React from "react";
import PropTypes from "prop-types";

function TransitionAdd({handleTransition, disableBtn, setTransition, transition}) {

    const change = (e) => {
      setTransition(e.target.value)
    }

    return (
        <>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div style={{display: 'flex', justifyContent: 'center'}} className="input-field col s12">
                            <input
                                style={{width: '400px'}}
                                id="email" type="email"
                                className="validate"
                                onChange={change}
                                value={transition}
                            />
                            <button
                                className="btn yellow darken-4"
                                style={{marginRight: '10px'}}
                                onClick={handleTransition.bind(null, transition)}
                                disabled={disableBtn}
                            >Добавить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

TransitionAdd.propTypes = {
    handleTransition: PropTypes.func.isRequired,
    setTransition: PropTypes.func.isRequired,
    disableBtn: PropTypes.bool.isRequired,
    transition: PropTypes.string.isRequired
}

export default TransitionAdd