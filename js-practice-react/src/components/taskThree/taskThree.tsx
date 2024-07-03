import { useState } from 'react';

export function InputNumber() {
    const [number, setNumber] = useState(0);

    const ChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(event.target.value));
    };

    return (
        <>
            <input type="number" onChange={ChangeNumber} />
            <Message number={number} />
        </>
    );
}

interface MessageProps {
    number: number;
}

export function Message(props: MessageProps) {
    return (
        <>
            <p>
                {props.number > 0 ? 'число больше нуля' : ' число меньше нуля'}
            </p>
        </>
    );
}
