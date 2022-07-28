/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    if (!matrix.length) return null;
    if (matrix.length === 1) return matrix;
    const transpose = matrix => {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < i; j++) {
                const tmp = matrix[j][i];
                matrix[j][i] = matrix[i][j];
                matrix[i][j] = tmp;
            }
        }
    }
    function reverse(row, start, end) {
        while(start < end){
            const temp = row[start];
            row[start] = row[end];
            row[end] = temp;
            start++;
            end--;
        }
    }
    transpose(matrix);
    matrix.forEach((row) => {
    reverse(row, 0, row.length - 1);
    });
    return(matrix);
};