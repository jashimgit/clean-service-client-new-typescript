export default function AddAdminForm() {
  return (
    <>
      <h4>Add Admin</h4>
      <div className="col-md-7">
        <div className="card">
          <div className="card-body shadow">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email ID"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
