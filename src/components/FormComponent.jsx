import React, { useState, useEffect } from "react";

function FormComponent(props) {
  const { data = {}, submitHandler } = props;
  const [userId, setUserId] = useState(data.userId || null);
  const [title, setTitle] = useState(data.title || null);
  const [body, setBody] = useState(data.body || null);
  const [id, setid] = useState(data.id);

  const changeHandler = (e, field) => {
    const val = e.target.value;
    switch (field) {
      case "userId":
        setUserId(val);
        break;
      case "title":
        setTitle(val);
        break;
      case "body":
        setBody(val);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId, body, title, id);
    if (userId && body && title) {
      submitHandler({
        id: data.id,
        userId,
        title,
        body,
      });
    }
  };

  useEffect(() => {
    setUserId(data.userId);
    setTitle(data.title);
    setBody(data.body);
    setid(data.id);
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit} method="post" noValidate>
        <div className="form-group">
          <div className="form-row">
            <div className="col-1">
              <input
                type="text"
                className="form-control"
                placeholder="User ID"
                name="userId"
                value={userId || ''}
                onChange={(e) => changeHandler(e, "userId")}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                value={title || ''}
                onChange={(e) => changeHandler(e, "title")}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Body"
                name="body"
                value={body || ''}
                onChange={(e) => changeHandler(e, "body")}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
