//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/W5Sq7taLSzNHh8GiF

function solution(words) {
    function* permutations(A, n = A.length) {
        if (n === 1) {
            yield [...A];
        } else {
            for (let i = 0; i < n; i++) {
                yield* permutations(A, n - 1);

                const swapper = n % 2 ? 0 : i;
                [A[swapper], A[n - 1]] = [A[n - 1], A[swapper]];
            }
        }
    }

    let fomrations = 0; 

    for(const [hWord1, hWord2, vWord1, vWord2] of permutations(words)) {

        for (let i = 0; i < hWord1.length - 2; i++) {
            for (let k = 0; k < vWord1.length - 2; k++) {
                if (hWord1[i] === vWord1[k]) {
                    for (let j = i + 2; j < hWord1.length; j++) {
                        for (let l = 0; l < vWord2.length - 2; l++) {
                            if (hWord1[j] === vWord2[l]) {
                                const [hOffset, vOffset] = [j - i, l - k];

                                for (let p = 0; p < hWord2.length - hOffset; p++) {
                                    for (let q = k + 2; q < vWord1.length; q++) {
                                        if (vWord2[q + vOffset]
                                            && hWord2[p] === vWord1[q]
                                            && hWord2[p + hOffset] === vWord2[q + vOffset]) {
                                                fomrations++;
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return fomrations;
}
