import { create } from "zustand";
import supabase from "../supabase";

const useStore = create((set) => ({
	products: [],
	getProducts: async () => {
		const { data, error } = await supabase.from("products").select("*, category (id, name)");
		if (error) {
			console.log(error);
			set({ products: [] });
			return;
		}
		console.log(data);
		set({ products: data });
	},
}));

export default useStore;
