module.exports = function toReadable(number) {

			let a = ['zero', 'one', 'two', 'three', 'four',
				'five', 'six', 'seven', 'eight', 'nine',
				'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
				'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
			let b = ['', '', 'twenty', 'thirty', 'forty',
				'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
			
			let num = Array.from(number.toString());
			let str = '';


			if (number < 20) {
				str = a[number]
				return str;
			} else if (number % 10 === 0 && number < 100) {
				str = b[number / 10]
				return str;
			}
			else if (number < 100) {
				for (let i = 0; i < num.length; i += 1) {
					str = `${b[num[i]]} ${a[num[i + 1]]}`;
					return str
				}
			}
			else if (number % 100 === 0) {
				str = a[number / 100] + ' hundred';
				return str
            }
    			else {
                for (let i = 0; i < num.length; i += 1) {
                    if ((num[1] + num[2]) < 10) {
                        str = a[num[i]] + " hundred " + a[num[i + 2]]
                        return str
                        }
                    else if ((num[1]+num[2]) < 20) {
                        str = a[num[i]] + " hundred " + a[num[1]+num[2]];
                        return str
					} else if (number % 10 === 0 && number > 100) {
						str = a[num[0]] + ' hundred ' + b[num[1]]
						return str
					}
					else {
                        str = a[num[i]] + " hundred " + b[num[i + 1]] + ' ' + a[num[i + 2]]
                        return str
                    }
				}
			}


		}