//DOM : Document Object Model -> <body> <img> 문서를제어
//BOM : Browse Object Model -> 브라우저를 리로드 한다거나 브라우저를 제어

//기본적으로 window는 전역객체이기에 window를 쓰나 안쓰나 같은효과이다
//window.document
//document

// javascript load
// <html>
// <head>
// <script>
// var hw = document.getElementById('hw');
// </script>
// </head>
// <body>
// <input type="button" id="hw" value="hello"> </input>
// </body>
// </html>
//
// 브라우저는 head부터 해서 순차적으로 읽다가 script를 만나면 해당파일을 먼저 다운로드 받고 그 후에 다시 잃어간다
// 만약 위와같이 되어있다면 아직 hw는 load가 안된상태이기에 에러발생