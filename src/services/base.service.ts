
export default <T>(model: T) => ({
    async find(): Promise<T[] | []> {
        return await model.query()
    }
})


function last<T>(arr:T[]): T {
    return arr[arr.length -1]
}

const x = last([1,2,3,4])
const y = last(['1,2,3,4', 'b'])