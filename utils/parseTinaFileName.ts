type ParseTinaFileNameResponseType = {
    slug: string
    locale?: string
  }
  
  /**
   * @description Takes in a Tina filename with the locale appended (e.g. "some-blogpost.en")
   * @param {String} filename
   * @returns {ParseTinaFileNameResponseType}
   */
  const parseTinaFileName = (
    filename: string | undefined
  ): ParseTinaFileNameResponseType => {
    if (typeof filename !== 'string') {
      return {
        slug: '',
      }
    }
  
    const parts = filename.split('.')
  
    if (parts.length < 2) {
      return {
        slug: filename,
      }
    }
  
    const slug = parts[0]
    const locale = parts.length > 1 ? parts[1] : undefined
  
    return {
      slug,
      locale,
    }
  }
  
  export default parseTinaFileName;