describe('Our test suite', function () {
    it('breaks numerals down when decrementing', function() {
        expect(decrement('IV')).toBe('IIII');
        expect(decrement('IX')).toBe('IIIIIIIII');
        expect(decrement('XVI')).toBe('XVI');
        expect(decrement('MMCMLXXXVII')).toBe('MMCCCCCCCCCLXXXVII');
    });

    it('creates valid numerals when incrementing', function() {
        expect(increment('IIIII')).toBe('V');
        expect(increment('IIIIII')).toBe('VI');
        expect(increment('XIIIIII')).toBe('XVI');
    });

    it('adds numerals', function () {
        expect(add('I', 'I')).toBe('II');
        expect(add('II', 'VI')).toBe('VIII');
        expect(add('IV', 'II')).toBe('VI');
        expect(add('M', 'I')).toBe('MI');
        expect(add('MMCMLXXXVII', 'LIV')).toBe('MMMXLI');
        expect(add('MCDLXXIX', 'CDXLIV')).toBe('MCMXXIII');
    });
});
