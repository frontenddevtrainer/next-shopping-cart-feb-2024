import "@/lib/db";
import { OrdersModel } from "@/lib/models/order";

const OrderPage: React.FC = async ({}) => {
  const docs = await OrdersModel.find({});

  return (
    <>
      <div className="p-10">
        <table>
          <thead>
            <tr>
                <th>Order Id</th>
                <th>Processed</th>
                <th>Item Count</th>
            </tr>
          </thead>
          <tbody>
            {docs &&
              docs.length > 0 &&
              docs.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.processed ? "Completed" : "Pending"}</td>
                    <td>{item.items.length}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default OrderPage;
