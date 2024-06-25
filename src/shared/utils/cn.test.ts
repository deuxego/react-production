import { expect, test } from 'vitest'
import { cn } from './cn'

test("cn firstClass, seconClass", () => {
  expect(cn("firstClass", "seconClass")).toBe("firstClass seconClass")
})

test("cn firstClass, seconClass, {'thirdClass': false}", () => {
  expect(cn("firstClass", "seconClass", {'thirdClass': false})).toBe("firstClass seconClass")
})

test("cn firstClass, seconClass, {'thirdClass': true}", () => {
  expect(cn("firstClass", "seconClass", {'thirdClass': true})).toBe("firstClass seconClass thirdClass")
})

test("cn firstClass, seconClass, {'thirdClass': true}, fourClass", () => {
  expect(cn("firstClass", "seconClass", {'thirdClass': true}, "fourClass")).toBe("firstClass seconClass thirdClass fourClass")
})

test("cn empty", () => {
  expect(cn("")).toBe("")
})
