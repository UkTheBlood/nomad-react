import PropTypes from "prop-types";

function TestBtn({text}) {
    return <button>{text}</button>
}

TestBtn.propTypes = {
    text: PropTypes.string.isRequired
}

export default TestBtn;