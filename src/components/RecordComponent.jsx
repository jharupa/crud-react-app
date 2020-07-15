import React from "react";

function RecordComponent(props) {
  const { post, deleteHandler, editHandler } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {post && post.length ? post.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button type="button" className="btn btn-primary" onClick={()=> editHandler(item)}>
                  Edit
                </button>

                <button type="button" className="btn btn-danger" onClick={() => deleteHandler(item)}>
                  Delete
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <th colSpan={3} className="text-center">
                No Post Found
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecordComponent;
