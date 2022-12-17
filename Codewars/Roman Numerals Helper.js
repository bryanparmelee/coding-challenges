//https://www.codewars.com/kata/51b66044bce5799a7f000003/javascript

const RomanNumerals = {

    toRoman: (num) => {
        let roman = '';
        while (num >= 1000) {
            roman += 'M';
            num = num - 1000;
        }
        while (num >= 900) {
            roman += 'CM';
            num = num - 900;
        }
        while (num >= 500) {
            roman += 'D';
            num = num - 500;
        }
        while (num >= 400) {
            roman += 'CD';
            num = num - 400;
        }
        while (num >= 100) {
            roman += 'C';
            num = num - 100;
        }
        while (num >= 90) {
            roman += 'XC';
            num = num - 90;
        }
        while (num >= 50) {
            roman += 'L';
            num = num - 50;
        }
        while (num >= 40) {
            roman += 'XL';
            num = num - 40;
        } 
        while (num >= 10) {
            roman += 'X';
            num = num - 10;
        }
        while (num >= 9) {
            roman += 'IX';
            num = num - 9;
        }
        while (num >= 5) {
            roman += 'X';
            num = num - 5;
        }
        while (num >= 4) {
            roman += 'IX';
            num = num - 4;
        }
        while (num >= 1) {
            roman += 'I';
            num = num - 1;
        }
        return roman;
    },

    fromRoman: (str) => {
        
        const romans = {
            IV: 4,
            IX: 9,
            XL: 40,
            XC: 90,
            CD: 400,
            CM: 900,
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

        let value = 0;

        for (let i = 0; i < str.length; i++) {
            const double = romans[str[i] + str[i + 1]];
            const single = romans[str[i]];

            if (double !== undefined) {
                value += double;
                i++;
            } else if (single !== undefined) {
                value += single;
            }
        }
        return value;
    }

};
