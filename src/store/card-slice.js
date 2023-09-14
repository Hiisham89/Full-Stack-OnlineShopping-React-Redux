import { createSlice } from "@reduxjs/toolkit";
import { uiactions } from "./UI-slice";

const initialState = { items: [], totalquantity: 0 }
const cardslice = createSlice({
  name: "card",
  initialState,
  reducers: {
    replacecart(state,action){
          state.items = action.payload;
          state.totalquantity = action.payload;
    },
    addtocart(state, action) {
      const newitem = action.payload;
      const existingitem = state.items.find((item) => item.id === newitem.id);
      if (!existingitem) {
        state.items.push({
          id: newitem.id,
          name: newitem.title,
          price: newitem.price,
          totalPrice: newitem.price,
          quantity: 1,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalPrice = existingitem.totalPrice + newitem.price;
      }
      state.totalquantity++;
    },
    removefromcart(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;
        existingitem.totalPrice = existingitem.totalPrice - existingitem.price;
      }
      state.totalquantity--;
    },
  },
});
// export const sendcard = (card) => {
//   return async (dispatch) => {
//     dispatch(
//       uiactions.shownotify({
//         status: "pending",
//         title: "sending...",
//         message: "sending card to Data",
//       })
//     );
//     const request = async () => {
//       const response = await fetch("http://localhost:8080/products", {
//         method: "POST",
//         body: JSON.stringify(card),
//       });

//       if (!response.ok) {
//         throw new Error("Sending Card Data failed.");
//       }
//     };
//     try {
//       await request();
//       dispatch(
//         uiactions.shownotify({
//           status: "success",
//           title: "success",
//           message: "sent card successfully",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiactions.shownotify({
//           status: "error",
//           title: "error",
//           message: "sent card failed",
//         })
//       );
//     }
//   };
// };
// export const fetchcard = (card) => {
//   return async (dispatch) => {
//     dispatch(
//       uiactions.shownotify({
//         status: "pending",
//         title: "sending...",
//         message: "sending card to Data",
//       })
//     );
//     const request = async () => {
//       const response = await fetch("http://localhost:8080/card:");
//       const data = response.json();

//       if (!response.ok) {
//         throw new Error("Sending Card Data failed.");
//       }
//     };
//     try {
//       await request();
//       dispatch(
//         uiactions.shownotify({
//           status: "success",
//           title: "success",
//           message: "sent card successfully",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiactions.shownotify({
//           status: "error",
//           title: "error",
//           message: "sent card failed",
//         })
//       );
//     }
//   };
// };

export const cardactions = cardslice.actions;
export default cardslice.reducer;
