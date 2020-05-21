import { Analytics } from "./index";

const analytics = new Analytics("UA-XXXXXXXXX-X");

analytics
  .send({
    category: "test ec",
    action: "test ea",
    label: "test el",
    value: 50,
  })
  .then((data) => {
    console.dir(data);
  });
