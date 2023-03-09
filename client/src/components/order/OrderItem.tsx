/* import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

import { OrderType } from "../../common/orderType";

type PropType = {
  order: OrderType;
};

export default function OrderItem({ order }: PropType) {
  return (
    <TableBody className="cart-item">
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor: "none",
        }}>
        <TableCell align="center">{order._id}</TableCell>
        {/* <TableCell align="left">
          {order.productOrder.map((order) => (
            <div className="productsDetail" key={order._id}>
              <p className="productDetsilname">{order.name}</p>
              <p>{order.category}</p>
              <p>{}</p>
            </div>
          ))} 
        </TableCell>*
        <TableCell align="center">{order.productOrder[0].price}</TableCell>
        <TableCell align="center"> {order.date}</TableCell>
      </TableRow>
    </TableBody>
  );
}
 */

/*import { TableRow, TableCell } from "@mui/material";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";

import { OrderType } from "../../common/orderType";

type Prop = {
  product: OrderType;
};
const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: aliceblue;
  }
  &:nth-of-type(even) {
    background-color: #000;
  }
`;
export default function OrderItem({ product }: Prop) {
  return (
    <Fragment>
      <StyledTableRow>
        <TableCell align="center">{product.shippingAddress}</TableCell>
        <TableCell align="center">{product.totalPrice}</TableCell>
        <TableCell align="center">{product.userId}</TableCell>
        {/* <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center">
          <img src={product} height="50px" width="70px" alt="flag"></img>
        </TableCell> 
      </StyledTableRow>
    </Fragment>
  );
}*/

import React from "react";

export default function OrderItem() {
  return <div>OrderItem</div>;
}
