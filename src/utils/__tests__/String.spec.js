import StringUtils from '../String'

describe('Utils/String', () => {
  describe('trimLeadingAndTrailing', () => {
    it('trims spaces correctly', () => {
      const string = ' test@ mail.com '
      const expected = 'test@ mail.com'

      expect(StringUtils.trimLeadingAndTrailing(string)).toEqual(expected)
    })
  })
})
