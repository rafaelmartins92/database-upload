import * as DeleteTransactionService from "./DeleteTransactionService"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new DeleteTransactionService.default()
    })

    test("0", async () => {
        await inst.execute("a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("1", async () => {
        await inst.execute("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("2", async () => {
        await inst.execute("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("3", async () => {
        await inst.execute("")
    })
})
