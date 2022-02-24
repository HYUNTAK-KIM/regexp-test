const str = `
010-1234-5678.
eggu24@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// console.log(regexp.test(str))
console.log(str.match(/(?<=@).{1,}/g))