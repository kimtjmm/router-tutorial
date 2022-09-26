/클래스형 컴포넌트든 함수형 컴포넌트든 값을 바꾸어야할 때는 setState혹은 useState를 통해
/전달 받은 세터 함수를 사용해야한다

/잘못된 코드

/ * 클래스형 컴포넌트에서
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

/ * 함수형 컴포넌트에서
const [object , setObject] = useState({a:1, b:1});
object.b = 2;


/사본을 만들어서 업데이트하는 예시

//객체 다루기
const object = { a:1 , b:2 , c:3};
const nextObject = { ...object , b:2}; //사본을 만들어서 b값만 덮어 쓰기

//배열 다루기
const array = [
    { id:1 , value:true},
    { id:2 , value:true},
    { id:3 , value:false}
];
let nextArray = array.concat({ id:4 }); // 새항목 추가
nextArray.filter(item => item.id !==2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1? { ...item, value:false} : item));
/항목의 value를 false로 설정

/객체에 대한 사본을 만들 때는 spread 연산자라 불리는 ...을 사용하여 처리하고, 배열에 대한 사본을 만들 때는
/배열의 내장 함수들을 활용


/정리!!!
/props와 state는 둘다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있지만, 그역할은 다르다
/props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있다.
/props를 사용한다고 해서 무조건 고정적이지는 않고, 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달할고,
/자식 컴포넌트에서 특정 이벤트를 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용가능
