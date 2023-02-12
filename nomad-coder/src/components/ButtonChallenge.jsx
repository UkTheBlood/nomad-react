import React from 'react'

function Btn({ text, big, onClick }) {
    return <button style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border: 0,
        fontSize: big ? 25 : 16,    // props를 가지고 true인지 false인지에 따라 사이즈 변경

    }}
        onClick={onClick} >
        {text}
    </button>
}

// Btn.propTypes = {
//   text: PropTypes.string
// };

const MemorizedBtn = React.memo(Btn)
// MemorizedBtn의 컴포넌트 생성하고 
// 이 안에 React.memo 안에 Btn컴포넌트를 넣어줌


function ButtonChallenge() {

    const [value, setValue] = useState("Save Changes")
    const changeValue = () => {
        setValue("Revert Changes")
    }

    return (
        <>
            <Btn text={value} big={true} onClick={changeValue} />
            {/* 
                onClick={changeValue} 을 넣으면 prpos를 가져오는 것 밖에 안 됨 
                Btn 컴포넌트에 props로 넣어주고, 이를 가져와야 함
            */}
            <Btn text="HI" big={false} />
        </>
    )
}

export default ButtonChallenge