import { useRef } from 'react';

export function TaskOne() {
    const message = useRef<HTMLInputElement>(null);

    const SendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(message.current?.value);
    };

    return (
        <>
            <form>
                <input type="text" ref={message} />
                <button onClick={SendMessage}>Send message</button>
            </form>
        </>
    );
}
