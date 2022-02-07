const AddServiceForm = () => {
  return (
    <>
      <h4>Add Service</h4>
      <div className="card">
        <div className="card-body shadow">
          <form>
            <div className="form-group">
              <label>Service Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Service Name"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" className="form-control" placeholder="Price" />
            </div>

            <div className="form-group">
              <label htmlFor="">Status</label>
              <select className="form-control">
                <option value="active">Active</option>
                <option value="inactive">In Active</option>
              </select>
            </div>
            <div className="form-group">
              <input type="file" name="file" className="form-control-file" />
            </div>
            <div className="form-group">
              <textarea name="details" className="form-control"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddServiceForm;
