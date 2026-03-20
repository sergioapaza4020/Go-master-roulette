export type Category =  "default" | "comedy" | "travel" | "fashion" | "technology" | "toys" | "gaming";

export type CategoryContextType = {
    category: Category;
    setCategory: (value: Category) => void;
}