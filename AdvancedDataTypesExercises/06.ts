type Created = { 
    code: 200 | 201 | 204;
    text: string;
};

type Moved = {
    code: 301;
    text: string;
};

type Broken = {
    code: 400 | 404 | 500;
    text: string;
    printChars?: number;
};


function httpCodes(object: Created | Moved | Broken) : void {
    if('printChars' in object) {
        console.log(object.text.substring(0, object.printChars));
    } else {
        console.log(object.text);
    }
}
httpCodes({ code: 200, text: 'OK'});