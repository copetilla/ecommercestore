// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// import { Product } from "@/types";
// import toast from "react-hot-toast";

// interface CartStore {
//     items: Product[];
//     addItem: (data: Product) => void
//     removeItem: (id: string) => void
//     removeAll: () => void
// }

// const useCart = create(
//     persist<CartStore>((set, get) => ({
//         items: [],
//         addItem: (data: Product) => {
//             const currentItems = get().items;
//             const existingItem = currentItems.find((item) => item.id === data.id);

//             if (existingItem) {
//                 return toast.success('Producto ya se encuentra en el carrito de compras')
//             }
//             set({ items: [...get().items, data] });
//             toast.success('Producto añadido al carrito de compras')
//         },
//         removeItem: (id: string) => {
//             set({ items: [...get().items.filter((item) => item.id !== id)] });
//             toast.success('Producto removido del carrito de compras')
//         },
//         removeAll: () => set({ items: [] })
//     }), {
//         name: 'cart-storage',
//         storage: createJSONStorage(() => localStorage)
//     })
// )

// export default useCart

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: (Product & { quantity: number })[]; // Aseguramos que `quantity` esté siempre presente
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeItems: (id: string) => void;
    addSame: (id: string) => void;
    removeAll: () => void;
    getTotalQuantity: () => number;
    updateQuantity: (id: string, quantity: number) => void; // Método para actualizar la cantidad
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === data.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                    toast.success("Cantidad actualizada en el carrito");
                } else {
                    set({
                        items: [...currentItems, { ...data, quantity: 1 }],
                    });
                    toast.success("Producto añadido al carrito de compras");
                }
            },
            removeItem: (id: string) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === id);

                if (existingItem && existingItem.quantity > 1) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                    });
                    toast.success("Cantidad reducida en el carrito");
                } else {
                    set({ items: currentItems.filter((item) => item.id !== id) });
                    toast.success("Producto removido del carrito de compras");
                }
            },
            removeItems: (id: string) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === id);
                set({ items: currentItems.filter((item) => item.id !== id) });
                toast.success("Producto removido del carrito de compras");

            },
            addSame: (id: string) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                    toast.success("Cantidad actualizada en el carrito");
                }
            },
            removeAll: () => set({ items: [] }),
            getTotalQuantity: () => {
                return get().items.reduce(
                    (total, item) => total + (item.quantity || 0),
                    0
                );
            },
            updateQuantity: (id: string, quantity: number) => {
                if (quantity < 1) {
                    toast.error("La cantidad mínima es 1");
                    return;
                }

                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === id);

                if (!existingItem) {
                    toast.error("Producto no encontrado en el carrito");
                    return;
                }

                set({
                    items: currentItems.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    ),
                });
                toast.success("Cantidad actualizada");
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCart;

