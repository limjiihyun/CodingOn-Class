function PostItem(props) {
  console.log(props);
  const { id, title, body } = props;
  return (
    <>
      <div className="postItem" key={id}>
        <div className="postBox">
          <div className="id">No. {id}</div>
          <div className="title"> - {title}</div>
        </div>
        <p className="body">{body.slice(0, 130)}...</p>
      </div>
    </>
  );
}

export default PostItem;
