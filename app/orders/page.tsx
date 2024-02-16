import { getClient } from "@/lib/apolloclient";
// import "@/lib/db";
// import { OrdersModel } from "@/lib/models/order";
import { gql } from "graphql-tag";

const OrderPage: React.FC = async ({}) => {

  const { data } = await getClient().query({
    query: gql`
      query Orders {
        orders {
          _id
          title
        }
      }
    `,
  });

  console.log(data);

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
            {data && data.orders && 
              data.orders.length > 0 &&
              data.orders.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    {/* <td>{item.processed ? "Completed" : "Pending"}</td>
                    <td>{item.items.length}</td> */}
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
