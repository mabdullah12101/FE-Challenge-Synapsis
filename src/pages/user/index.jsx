import React, { useState } from "react";
import Layout from "@/layouts";
import { getUser, updateUser } from "@/stores/actions/user";
import Modal from "@/components/Modal";
import ModalBodyEditUser from "@/components/ModalBodyEditUser";
import CardUser from "@/components/CardUser";

export default function User(props) {
  const [data, setData] = useState(props.listUser);
  const [detailUser, setDetailUser] = useState({});
  const [modal, setModal] = useState(false);

  const editModal = (item) => {
    setModal(true);
    setDetailUser(item);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleOnChange = (e) => {
    setDetailUser({ ...detailUser, [e.target.name]: e.target.value });
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    updateUser(detailUser.id, detailUser).then(() => {
      getUser().then((res) => {
        setData(res.data);
        setModal(false);
      });
    });
  };

  return (
    <>
      <Modal
        modal={modal}
        title={"Update User"}
        body={
          <ModalBodyEditUser
            data={detailUser}
            onChange={handleOnChange}
            onSubmit={handleEditUser}
            closeModal={closeModal}
          />
        }
        closeModal={closeModal}
      />
      <Layout title={"User"}>
        <section className="px-44">
          <div className="flex flex-col gap-y-4">
            <CardUser data={data} editModal={editModal} />
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const result = await getUser();
  console.log(result.data);

  return {
    props: {
      listUser: result.data,
    },
  };
}
