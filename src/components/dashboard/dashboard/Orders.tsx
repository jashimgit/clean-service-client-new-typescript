import { FaPencilAlt, FaTrash } from "react-icons/fa";
const Orders = () => {
  return (
    <>
      <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Email</th>
              <th>Order Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
              <td>
                <button className="btn btn-info btn-sm mr-2" type="button">
                  <FaPencilAlt />
                </button>
                <button className="btn btn-danger btn-sm " type="button">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
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
    </>
  );
};

export default Orders;
