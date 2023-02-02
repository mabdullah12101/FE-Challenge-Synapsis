import React, { useState } from "react";
import Layout from "@/layouts";
import { addUser, getUser, updateUser } from "@/stores/actions/user";
import Modal from "@/components/Modal";
import ModalBodyEditUser from "@/components/ModalBodyEditUser";
import CardUser from "@/components/CardUser";
import SearchInput from "@/components/SearchInput";
import ModalBodyAddUser from "@/components/ModalBodyAddUser";

export default function User(props) {
  const [data, setData] = useState(props.listUser);
  const [detailUser, setDetailUser] = useState({});
  const [modal, setModal] = useState(false);

  const handleModal = (variant, item) => {
    setModal(variant);
    setDetailUser(item);
  };

  const closeModal = () => {
    setDetailUser();
    setModal(false);
  };

  const handleOnChange = (e) => {
    setDetailUser({ ...detailUser, [e.target.name]: e.target.value });
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    updateUser(detailUser.id, detailUser).then(() => {
      getUser().then((res) => {
        setDetailUser();
        setData(res.data);
        setModal(false);
      });
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    addUser({ ...detailUser, status: "inactive" }).then(() => {
      getUser().then((res) => {
        setDetailUser();
        setData(res.data);
        setModal(false);
      });
    });
  };

  return (
    <>
      {modal === "editUser" ? (
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
      ) : (
        <Modal
          modal={modal}
          title={"Add User"}
          body={
            <ModalBodyAddUser
              onChange={handleOnChange}
              onSubmit={handleAddUser}
              closeModal={closeModal}
            />
          }
          // body={
          //   <ModalBodyEditUser
          //     data={detailUser}
          //     onChange={handleOnChange}
          //     onSubmit={handleEditUser}
          //     closeModal={closeModal}
          //   />
          // }
          closeModal={closeModal}
        />
      )}

      <Layout title={"User"}>
        <section className="px-44">
          <div className="text-end my-5">
            <button
              onClick={() => handleModal("addUser")}
              type="button"
              className="text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
            >
              Add User
            </button>
          </div>

          <SearchInput />

          <div className="mt-10 flex flex-col gap-y-4">
            <CardUser data={data} handleModal={handleModal} />
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
