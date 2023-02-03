import React, { useEffect, useState } from "react";
import Layout from "@/layouts";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "@/stores/actions/user";
import Modal from "@/components/Modal";
import ModalBodyEditUser from "@/components/ModalBodyEditUser";
import CardUser from "@/components/CardUser";
import SearchInput from "@/components/SearchInput";
import ModalBodyAddUser from "@/components/ModalBodyAddUser";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import qs from "query-string";
import ModalHeader from "@/components/ModalHeader";
import ModalConfirm from "@/components/ModalConfirm";

export default function User(props) {
  const router = useRouter();

  const [data, setData] = useState(props.listUser);
  const [detailUser, setDetailUser] = useState({});
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(props.params.name);

  useEffect(() => {
    setData(props.listUser);
  }, [props.listUser]);

  const navigateSearch = (data) => {
    let query = { ...props.params, ...data };
    if (query.page === 1) {
      delete query.page;
    }
    if (query.name === "") {
      delete query.name;
    }
    if (Object.keys(query).length > 0) {
      query = qs.stringify(query);
      router.push(`/user?${query}`);
    } else {
      router.push("/user");
    }
  };

  const handlePagination = (event) => {
    navigateSearch({ page: event.selected + 1 });
  };

  const handleChangeSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    navigateSearch({ page: 1, name: search.name });
  };

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

  const handleDeleteUser = () => {
    deleteUser(detailUser.id).then(() => {
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
          header={<ModalHeader title={"Update User"} closeModal={closeModal} />}
          body={
            <ModalBodyEditUser
              data={detailUser}
              onChange={handleOnChange}
              onSubmit={handleEditUser}
              closeModal={closeModal}
            />
          }
        />
      ) : modal === "addUser" ? (
        <Modal
          modal={modal}
          header={<ModalHeader title={"Add User"} closeModal={closeModal} />}
          body={
            <ModalBodyAddUser
              onChange={handleOnChange}
              onSubmit={handleAddUser}
              closeModal={closeModal}
            />
          }
        />
      ) : (
        <Modal
          modal={modal}
          body={
            <ModalConfirm
              closeModal={closeModal}
              handleDeleteUser={handleDeleteUser}
            />
          }
        />
      )}

      <Layout title={"User"}>
        <section className="px-7 sm:px-16 md:px-28 lg:px-36 xl:px-44">
          <div className="text-end my-5">
            <button
              onClick={() => handleModal("addUser")}
              type="button"
              className="text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
            >
              Add User
            </button>
          </div>

          <SearchInput onChange={handleChangeSearch} onSubmit={handleSearch} />

          <div className="mt-10 flex flex-col gap-y-4">
            <CardUser data={data} handleModal={handleModal} />
          </div>

          <div className="mt-20 flex justify-center items-center">
            <Pagination
              handlePagination={handlePagination}
              totalPage={props.totalPage}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  let params = context.query;
  params.page = params.page ? +params.page : 1;
  params.name = params.name ? params.name : "";
  const result = await getUser(params.page, params.name);
  console.log(result.headers);

  return {
    props: {
      listUser: result.data,
      totalPage: result["headers"]["x-pagination-pages"],
      params,
    },
  };
}
