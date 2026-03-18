"use client";

import { Category, CategoryContextType } from "@/types/category.type";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
    const [category, setCategory] = useState<Category>("");

    const value = useMemo(() => ({ category, setCategory }), [category]);

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) throw new Error("useCategory must be used within CategoryProvider");
    return context;
};