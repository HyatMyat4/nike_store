import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  darkmode: true,
  Cartopenclose: false,
  UserCart: [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
  DeleteId: 0,
  StoriesId: 0,
  addStories: {},
  startDate: "2021-02-01",
  endDate: "2021-03-01",
  Sidebar: false,
};
export const Actionslice = createSlice({
  name: "actionslice",
  initialState,
  reducers: {
    darkmodeEngin: (state, action) => {
      state.darkmode = action.payload;
    },
    CartopencloseEngin: (state, action) => {
      state.Cartopenclose = action.payload;
    },
    UserCartEngin: (state: any, action: any) => {
      const itemsindex = state.UserCart.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemsindex >= 0) {
        state.UserCart[itemsindex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.UserCart.push(temp);
        toast.success(`Success Order ${action.payload.title}`);
      }
    },
    RemoveItemsEngin: (state: any, action: any) => {
      state.UserCart = state.UserCart.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    RemoveAllItems: (state: any, action: any) => {
      state.UserCart = state.UserCart.filter(
        (item: any) => item.id === action.payload
      );
    },
    RemoveItemDcreased: (state: any, action: any) => {
      const itemsindex = state.UserCart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (state.UserCart[itemsindex].cartQuantity > 1) {
        state.UserCart[itemsindex].cartQuantity -= 1;
      }
    },
    DeleteIdEngin: (state: any, action: any) => {
      state.DeleteId = action.payload;
    },
    StoriesIdEngin: (state: any, action: any) => {
      state.StoriesId = action.payload;
    },
    addStoriesEngin: (state: any, action: any) => {
      state.addStories = action.payload;
    },
    startDateEngin: (state: any, action: any) => {
      state.startDate = action.payload;
    },
    endDateEngin: (state: any, action: any) => {
      state.endDate = action.payload;
    },
    SidebarEngin: (state: any, action: any) => {
      state.Sidebar = action.payload;
    },
  },
});

export const {
  darkmodeEngin,
  CartopencloseEngin,
  UserCartEngin,
  RemoveItemsEngin,
  RemoveAllItems,
  RemoveItemDcreased,
  DeleteIdEngin,
  StoriesIdEngin,
  addStoriesEngin,
  startDateEngin,
  endDateEngin,
  SidebarEngin,
} = Actionslice.actions;

export const darkmodeC = (state: any) => state.actionslice.darkmode;
export const CartopencloseC = (state: any) => state.actionslice.Cartopenclose;
export const UserCartC = (state: any) => state.actionslice.UserCart;
export const DeleteIdC = (state: any) => state.actionslice.DeleteId;
export const StoriesIdC = (state: any) => state.actionslice.StoriesId;
export const addStoriesC = (state: any) => state.actionslice.addStories;
export const startDateC = (state: any) => state.actionslice.startDate;
export const endDateC = (state: any) => state.actionslice.endDate;
export const SidebarC = (state: any) => state.actionslice.Sidebar;

export const TotalPriceC = (state: any) =>
  state.actionslice.UserCart.reduce(
    (total: any, items: any) =>
      total + Number(items.price) * items.cartQuantity,
    0
  );

export default Actionslice.reducer;
