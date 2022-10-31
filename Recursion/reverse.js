// function reverse(str){
//     let newStr = '';

//     if(str.length === 0)
//         return '';
//     newStr += str[str.length-1] + (reverse(str.slice(0, -1)));
//     return newStr;
// }

// Optimized
function reverse(str){
	if(str.length <= 1) 
        return str;
	return reverse(str.slice(1)) + str[0];
}

  
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'