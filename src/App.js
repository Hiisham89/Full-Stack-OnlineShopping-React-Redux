import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendcard } from "./store/card-slice";
import { uiactions } from "./store/UI-slice";

let initial = false;
function App() {
  const dispatch = useDispatch();
  const showorhide = useSelector((state) => state.uishowof.showcart);
  const card = useSelector((state) => state.cardmanagement);
  const shownotify = useSelector((state) => state.uishowof.shownotification);
  console.log(card);

  useEffect(() => {
    // if (!initial) {
    //   initial = !initial;
    //   return;
    // }
    // dispatch(sendcard(card));
    // component based Redux side-effect
    const sendcarddata = async () => {
      dispatch(
        uiactions.shownotify({
          status: "pending",
          title: "sending...",
          message: "sending card to Data",
        })
      );

      const response = await fetch("http://localhost:8080/products", {
        method: 'POST',
        body: JSON.stringify(card),
      });

      if (!response.ok) {
        throw new Error("Sending Card Data failed.");
      }

      dispatch(
        uiactions.shownotify({
          status: "success",
          title: "success",
          message: "sent card successfully",
        })
      );
    };

    if (!initial) {
      initial = !initial;
      return;
    }
    sendcarddata().catch((error) => {
      dispatch(
        uiactions.shownotify({
          status: "error",
          title: "error",
          message: "sent card failed",
        })
      );
    });
  }, [card, dispatch]);

  return (
    <Fragment>
      {shownotify && (
        <Notification
          status={shownotify.status}
          title={shownotify.title}
          message={shownotify.message}
        />
      )}
      <Layout>
        {showorhide && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
