import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                return toast('Producto ya se encuentra en el carrito de compras')
            }
            set({ items: [...get().items, data] });
            toast.success('Producto añadido al carrito de compras')
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success('Producto removido del carrito de compras')
        },
        removeAll: () => set({ items: [] })
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart