## 풀이 과정

> 아래와 같은 순서로 개발을 진행했습니다.
> https://github.com/AlwaysAwake/infinite-scroll 에서 작업을 순서대로 참조하실 수 있습니다.

- Code formatting을 위한 Prettier의 pre-commit 훅 설정
- 주어진 서버 구조에 맞게 React로 구성된 스크립트를 빌드 이후 서빙할 수 있도록 Webpack, Babel 설정
- React 디펜던시 설치 및 클라이언트 사이드 엔트리 포인트 모듈 설정과 메인 컴포넌트 추가
- CSS Modules 설정을 위한 Webpack Loader 추가
- 임의로 구성한 페이지 레이아웃 마크업 구조 추가
- API 데이터 연동
- IntersectionObserver를 이용한 무한 스크롤 로직 구현

## 사용한 기술 스택

- Webpack
  - JavaScript 파일의 트랜스파일링과 SASS의 빌드를 위해 추가
- React
- CSS Modules
  - 컴포넌트 별로 스타일을 모듈화해서 관리하기 위해 추가

## 코드 설명

모든 클라이언트 비즈니스 로직은 `App.js`에 포함되어 있습니다.  
`list`라는 state를 통해 현재까지 로드된 목록을 관리하고,  
이 `list`를 순회하면서 `<ContentItem />` 컴포넌트에 로드된 데이터를 넘겨주어 프리젠테이션은 하위 컴포넌트에서 담당하도록 구성했습니다.

무한 스크롤 구현에는 `IntersectionObserver`를 사용했습니다.  
`loading` state를 통해 `loading` 중 일때는 로딩 스피너를 노출하고,  
그렇지 않을 때는 현재 목록의 마지막에 도달했음을 알려주는 엘리먼트(detector)을 렌더링하도록 구성했습니다.  
이 목록의 마지막에 도달한 아이템이 `IntersectionObserver`를 통해 뷰포트 내에 들어왔다고 판단하면,  
Data를 로드해서 목록의 끝에 붙여주도록 구성했습니다.

각 Page의 Size는 기본 값인 10을 그대로 사용했습니다.  
그 이유는 Item의 최소 Height를 120px로 잡아서,  
현재 사용자가 모바일 환경에서 사용하는 디바이스 기준으로 1200px 정도라면  
한 화면이 넘기 때문에 컨텐츠가 끊김없이 이어진다는 느낌을 주기에 충분하고,  
로컬에서 테스트한 결과 10개의 아이템을 조회하는데는 평균적으로 0.13s 정도가 소요되었는데,  
이는 사용자가 페이지가 즉시적으로 반응한다고 느끼기에 적절한 시간인 0.1s와 근사한 값이기 때문입니다.

- 참고 링크
  - https://www.nngroup.com/articles/response-times-3-important-limits/
  - https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/

한꺼번에 더 많은 수의 아이템을 로드할 수도 있었지만,  
로드 시간이 길어짐에 따라 사용자는 페이지가 Interactive 하지 못하다고 느낄 확률이 높아, 기본 값을 그대로 사용했습니다.

## 프로젝트 실행 방법

- `npm i` 로 디펜던시 설치
- `npm run start`로 서버 시작
- `http://localhost:3000/users/view` 에서 화면 참조
