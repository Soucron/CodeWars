//Complete the solution so that the function will break up camel casing, using a space between words.//

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

function solution(string) {
  let fixRegex = /([A-Z])/g;  
  let ReplaceText = ' $1'
  return string.replace(fixRegex,  ReplaceText); //You can complete this task in one string//
}
