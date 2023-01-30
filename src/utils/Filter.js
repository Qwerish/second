export const filters = (cards, id) => {
    return cards.filters((item) => {
        return item.category === id;
    });
}