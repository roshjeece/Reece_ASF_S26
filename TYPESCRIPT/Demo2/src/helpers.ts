// we need to make this accessible to other files
export const area = (width: number, length: number): number => {
    return width * length
}

export const perimeter = (width: number, length: number): number => {
    return (width*2) + (length*2)
}

const FAKE_DATA = [
    { category: "lunch"},
    { category: "dinner"},
    { category: "dessert"},
    { category: "breakfast"},
]

export const filterCategories = FAKE_DATA.filter(data => {
    let userChosenOption = "breakfast"
    let {category} = data;
    return category === userChosenOption
})