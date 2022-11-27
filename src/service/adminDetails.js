import { db } from "../firebase";

export const addDatas = {
    addData,
    get,
  };
  
  async function addData(datas) {
    await db
      .collection("registerdetail")
      .add(datas)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }

  async function get() {
    let datas = [];
    let sno = 1;
    await db
      .collection("details")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let user = doc.data();
          user.docId = doc.id;
          user.sno = sno++;
          datas.push(user);
        });
      });
    return datas;
  }

