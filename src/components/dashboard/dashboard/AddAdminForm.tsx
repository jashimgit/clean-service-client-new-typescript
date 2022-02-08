import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};

const AddAdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // const onSubmit = (data: object, e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   fetch("https://clean-server.herokuapp.com/createAdmin", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  // };
  const onSubmit = handleSubmit((data) => {
    fetch("https://clean-server.herokuapp.com/createAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  });
  return (
    <>
      <h4 className="my-3">Add Admin</h4>
      <div className="col-md-7">
        <div className="card">
          <div className="card-body shadow">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email ID"
                  {...register("email", { required: true })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h4 className="my-3"> User List</h4>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Role</th>
                <th>photo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>demo email</td>
                <td> admin </td>
                <td> photo link </td>
                <td> status </td>
                <td>
                  <button className="btn btn-info btn-sm mr-2" type="button">
                    <FaPencilAlt />
                  </button>
                  <button className="btn btn-danger btn-sm " type="button">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddAdminForm;
