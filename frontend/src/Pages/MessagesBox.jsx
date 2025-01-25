import { useEffect, useRef } from "react";

const MessagesBox = ({ channelMessages, filter }) => {
  const messageRef = useRef(null);
  useEffect(() => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight
  }, [channelMessages]);
  return (
    <div
      ref={messageRef}
      id="messages-box"
      className="chat-messages overflow-auto px-5"
    >
      {channelMessages?.map(({ id, username, body }) => (
        <div className="ext-break mb-2" key={id}>
          <b>{ username}</b>
            {': '}
          <span>{filter.clean(body.body)}</span>
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;