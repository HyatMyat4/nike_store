import jwt_decode from "jwt-decode";

export const addUser = async (
  Userdata: SendUserdata | any | SendUserdataNike
) => {
  try {
    if (!Userdata) return;
    const res = await fetch(`http://localhost:4000/users/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Userdata),
    });
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};

export const LogIn = async (data: any) => {
  try {
    if (!data) return;
    const res = await fetch(`http://localhost:4000/users/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};

export const GETLogIndata = () => {
  const Token_data = localStorage.getItem("Token") as any;
  if (!Token_data) return;
  const data: User_data = jwt_decode(Token_data);
  return data;
};

export const Get_ALL_USER = async () => {
  try {
    const res = await fetch(`http://localhost:4000/users/getAllUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: { revalidate: 20 },
    });
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};

interface Props {
  id: string;
}

export const Delete_User = async (id: Props) => {
  if (!id) return { msesage: "Failed" };
  try {
    const res = await fetch(`http://localhost:4000/users/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};
