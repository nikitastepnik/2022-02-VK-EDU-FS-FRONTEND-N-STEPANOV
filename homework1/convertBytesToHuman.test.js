/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';


test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman("-1")).toBe(false)
    expect(convertBytesToHuman("1")).toBe(false)
    expect(convertBytesToHuman("abc")).toBe(false)
    expect(convertBytesToHuman("абс")).toBe(false)
    expect(convertBytesToHuman("")).toBe(false)
    expect(convertBytesToHuman(false)).toBe(false)
    expect(convertBytesToHuman(true)).toBe(false)
    expect(convertBytesToHuman(null)).toBe(false)
    expect(convertBytesToHuman(undefined)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
    expect(convertBytesToHuman(0.05)).toBe('0.05 B')
    expect(convertBytesToHuman(Math.pow(2, 0))).toBe('1 B')
    expect(convertBytesToHuman(Math.pow(2, 10))).toBe('1 KB')
    expect(convertBytesToHuman(Math.pow(2, 20))).toBe('1 MB')
    expect(convertBytesToHuman(Math.pow(2, 30))).toBe('1 GB')
    expect(convertBytesToHuman(Math.pow(2, 40))).toBe('1 TB')
    expect(convertBytesToHuman(Math.pow(2, 50))).toBe('1 PB')
    expect(convertBytesToHuman(Math.pow(2, 60))).toBe('1 EB')
    expect(convertBytesToHuman(Math.pow(2, 70))).toBe('1 ZB')
    expect(convertBytesToHuman(Math.pow(2, 80))).toBe('1 YB')
    expect(convertBytesToHuman(Math.pow(2, 10) + Math.pow(10, 2))).toBe('1.1 KB')
    expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
    expect(convertBytesToHuman(12312312323)).toBe('11.47 GB')
    expect(convertBytesToHuman(Math.pow(2, 40) + 12312312323)).toBe('1.01 TB')
    expect(convertBytesToHuman(Math.pow(2, 50) + Math.pow(2, 48))).toBe('1.25 PB')
    expect(convertBytesToHuman(Math.pow(2, 60) + Math.pow(2, 57))).toBe('1.13 EB')
    expect(convertBytesToHuman(Math.pow(2, 70) + 9 * Math.pow(2, 69))).toBe('5.5 ZB')
    expect(convertBytesToHuman(Math.pow(2, 80) + 785 * Math.pow(2, 79))).toBe('393.5 YB')
});

test('Возвращает false для неправильного класса данных (отрицательные числа)', () => {
    expect(convertBytesToHuman(-0.5)).toBe(false)
    expect(convertBytesToHuman(-1)).toBe(false)
    expect(convertBytesToHuman(-1000)).toBe(false)
    expect(convertBytesToHuman(-1000.05)).toBe(false)
    expect(convertBytesToHuman(-1e9)).toBe(false)
    expect(convertBytesToHuman(-1e-9)).toBe(false)
});
