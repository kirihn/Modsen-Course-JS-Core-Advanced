import { useState } from 'react';

interface TaskTwoProps {
    message: string;
}

export function TaskTwo(props: TaskTwoProps) {
    const [ShowMoreMessage, setShowMoreMessage] = useState(false);

    const PointIndex = props.message.indexOf('.');

    const FirstSentence = props.message.slice(0, PointIndex);

    function ShowMoreOrLess() {
        ShowMoreMessage ? setShowMoreMessage(false) : setShowMoreMessage(true);
    }

    return (
        <>
            <div
                style={{
                    border: '1px solid black',
                    borderRadius: '5px',
                    padding: '10px',
                }}
            >
                <p>{ShowMoreMessage ? props.message : FirstSentence}</p>
                <button onClick={ShowMoreOrLess}>
                    {ShowMoreMessage ? 'Show Less' : 'Show more'}
                </button>
            </div>
        </>
    );
}
