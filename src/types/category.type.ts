export type Category = "comedy" | "travel" | "fashion" | "technology" | "toys" | "gaming" | "";

export type CategoryContextType = {
    category: Category;
    setCategory: (value: Category) => void;
}