const MessagesBox = ({ channelMessages, filter }) => (
  <div id="messages-box" className="chat-messages overflow-auto px-5">
    {channelMessages?.map(({ id, username, body }) => (
      <div className="ext-break mb-2" key={id}>
        <b>{ username}</b>
        {': '}
        <span>{filter.clean(body.body)}</span>
      </div>
    ))}
  </div>
);

export default MessagesBox;