# Olympic Medal Tracker 만들기

## : React 입문주차 개인과제

### ⚙ features

- 제출 폼 UI 구현하기
- 메달 집계 CRUD 구현하기
  - Create: 새로운 나라와 그 나라가 획득한 메달 수를 추가
  - Read: 나라별 메달 집계 리스트를 보여주기
  - Update: 기존에 추가된 나라의 메달 수를 수정
  - Delete: 나라 정보를 삭제
- 정렬 (구현 못함.)
- 컴포넌트 분리는 하지 않았습니다.

---

### 24.08.14 피드백 이후 추가 구현한 기능

- 추가/업데이트 후 input 창 초기화 필요
- 버튼 위 커서를 포인터로 바꿔주기
- add시 input 미입력시 '국가명을 입력해주세요' 유효성 검사 필요(early return)
- add시 기존에 있는 나라인 경우 유효성 검사 필요
- update시 alert 이후 return 추가
- CRUD 중 가장 예민한건 D, '정말로 삭제하시겠습니까?' 물어보기(early return)
- 리스트 부분에서 금메달 숫자 기준으로 내림차순 정렬
- 컴포넌트 분리

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
