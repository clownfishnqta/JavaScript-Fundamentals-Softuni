function main(lines) {
    lines=lines.map(Number);
    let result=[];
    let biggest = lines[0];
    for (let i = 0; i < lines.length; i++) {
        if(lines[i]>=biggest){
            result.push(lines[i]);
            biggest=lines[i];
        }
    }
    console.log(result.join('\n'));
}