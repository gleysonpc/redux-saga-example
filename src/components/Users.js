import React, { useEffect, Fragment } from "react";
import { Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions";
import Loading from "./Loading";

export default function Users() {
  const { users, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Fragment>
      {loading && <Loading />}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}
