import React from "react";
import Acc2 from "./components/Acc2";

export default function CreateAcc() {
  return (
    <form>
      <input placeholder="Enter Title" />
      <input placeholder="Enter Item Name" />
      <input placeholder="Enter Url" />
      <Acc2 data={["hello", "hi", "how"]} />
      <input placeholder="Icon Name" />
    </form>
  );
}
