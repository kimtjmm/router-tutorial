import produce from 'immer';

const nextState = produce(originalState , draft => {
    / 바꾸고 싶은 값 바꾸기
    draft.somewhere.deep.inside = 5;
})

//produce라는 함수는 두 가지 파라미터를 받는다. 첫 번째 파라미터는 수정하고 싶은 상태
// 두 번째 파라미터는 상태를 어떻게 업데이트할지 정의 하는 함수
