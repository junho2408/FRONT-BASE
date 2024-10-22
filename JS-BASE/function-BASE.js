// 함수 선언문
function foo1() {
    console.log('foo1 function');
};

// 함수 표현식
const foo2 = function() {
    console.log('foo2 function');
};

// Function 생성자 함수
const foo3 = new Function('console.log("foo3 function")');

// 화살표 함수 표현식
const foo4 = () => {
    console.log('foo4 function');
};

foo1();
foo2();
foo3();
foo4();

// IIFE (즉시 실행 함수)
(function foo5() {
    console.log('foo5 function');
})();

let str = 'foo6 function';
// 재귀함수
function foo6(arg) {
    if(arg === 10){
        return;
    } 
        
    console.log(`foo${arg} function`);
    foo6(arg + 1);
}

foo6(6);

// 중첩함수
function foo7(arg) {
    function bar(){
        console.log(`foo${arg} function`);
    }
    bar();
}

foo7(7);

// 콜백함수
function foo8(arg) {
    arg();
}

foo8(() => {
    console.log('foo8 function');
});