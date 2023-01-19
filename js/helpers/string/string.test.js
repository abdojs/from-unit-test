import { string } from './string'

const __string__ = () => {


    expect(string("")).toBe(true)
    expect(string()).toBe(false)


}


test('check is string or not  ', __string__)
