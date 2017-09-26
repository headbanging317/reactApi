# react-koa-boilerplate
* react
* react-router
* react-hot-loader
* webpack
* redux
* axios
* Server Side Rendering
* Code Splitting

<br />

1.설치 및 실행
--
<pre>
    yarn install            //패키지 설치
    yarn build              //react build
    yarn build:server       //server build
    yarn start              //react start
    yarn start:server       //server start
</pre>

<br />

2.Project Directory Structure
--

* src/components : 각 컴포넌트들이 위치하는 디렉토리
* src/pages : 각 라우트들이 위치하는 디렉토리
* src/client : 브라우저 측에서 사용할 최상위 컴포넌트 서버사이드 렌더링을 구현하기 위해 디렉토리 구분
* src/server : 서버측에서 사용할 리액트 관련 코드
* src/shared : 서버와 클라이언트에서 공용으로 사용되는 컴포넌트
* src/lib : 웹 연동을 구현할 때 사용할 API와 코드스플리팅을 할 때 필요한 코드

<br />

참고
--
* velopert님의 블로그 글(https://velopert.com/3411)
