module.exports = function solveEquation(equation) {
  splitted_equatation = equation.split(' ');
    if (splitted_equatation === 'x'){
        a=1;
    }else{
        a = [splitted_equatation[0]];
    }

    b = [splitted_equatation[3], splitted_equatation[4]];
    c = [splitted_equatation[7], splitted_equatation[8]];
    a = parseInt(a.join(''));
    b = parseInt(b.join(''));
    c = parseInt(c.join(''));

    d = Math.pow(b,2) - 4*a*c;
    x1 = (-(b) + parseInt(Math.sqrt(d)))/(2*a);
    x2 = (-(b) - parseInt(Math.sqrt(d)))/(2*a);
    res = [Math.round(x1),Math.round(x2)].sort((a,b)=>a-b);

    return res
}
