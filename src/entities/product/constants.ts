export const CATEGORIES = {
    FOOD: 'food',
    CLOTHES: 'clothes',
    ELECTRONICS: 'electronics',
} as const;

export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[keyof typeof CATEGORIES], string> = {
    [CATEGORIES.FOOD]: 'Еда',
    [CATEGORIES.CLOTHES]: 'Одежда',
    [CATEGORIES.ELECTRONICS]: 'Электроника',
};