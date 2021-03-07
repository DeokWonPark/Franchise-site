# 프랜차이즈 페이지 - 갈비쌈 냉면 &nbsp;&nbsp;&nbsp;  <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/logo2.png" width="90px" />

React Hook, PostCSS을 사용한 프론트엔드 기능 개발<img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" width="30px" />

React Router을 사용하여 page history를 가진 SPA개발 <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" width="30px" />

Firebase Realtime DB구축<img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" width="30px" />

Cloudinary를 활용한 File upload <img src="https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png" width="30px" />

[# 갈비쌈 냉면 Demo](https://603f161b0881beb40a676ab5--coldnoodles.netlify.app/ )


<br/>
<br/>

### 개요

1. [Purpose of the project](#Purpose-of-the-project)
2. [Development stack](#Development-stack )
3. [APIs](#APIs )
4. [About The Project](#About-The-Project)
5. [프로젝트를 통해서 어려웠던 점 과 배운점](#프로젝트를-통해서-어려웠던-점-과-배운점)
6. [Reference](#Reference)



<br/>


### Purpose of the project

- 브랜드 홍보, 가맹문의, 온라인 마켓 구축을 위한 웹 사이트 제작
- Firebase DB를 활용한 CRUD기능을 작성한 가맹문의 게시판 개발


<br/>
<br/>


### Development stack

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PD2yAr4Tt4TG62BatFqSltJmYLO1_DFUqA&usqp=CAU" width="50px" />              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAi6Ah3SwQOrGOrMCj_yF6SgNR_wgM8rJlw&usqp=CAU" width="43px" />              <img src="https://icon-icons.com/icons2/2108/PNG/32/javascript_icon_130900.png" width="50px" />              <img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" width="50px" />      


<br/>


### APIs

###  <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" width="43px" />         <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" width="50px" />         <img src="https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png" width="50px" />     


<br/>
<br/>


### About The Project

#### 	MAIN Page 

​	`브랜드 홍보, 온라인 마켓과 연결시켜주는 목적을 에 맞게 개발하였습니다.`

​	<img src="https://raw.githubusercontent.com/DeokWonPark/FrontEnd-PortFolio/master/public/images/fsProject.PNG" width="800px" />        



----



#### 	Store Map

​	`Naver Map API를 사용하여 가게 위치를 표현하였습니다.`

​	`또한 Naver로드맵을 활용한 순차적인 애니메이션을 구성해서 찾아오기 쉽게 개발 하였습니다.`



​	<img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/readmeImg/store.PNG" width="800px" />        





----



#### 	Community Page

​	`Firebase Realtime DB를 사용해서 게시판을 기능 개발하였습니다.`

​	<img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/readmeImg/community.PNG" width="800px" />        

`Firebase Realtime DB`

​	<img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/readmeImg/DB.PNG" width="500px" />        



----



#### 	Write Page

​	`Rich Text Editor를 구현한 Draft.js를 활용하여 write Page 개발`

​	<img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/readmeImg/write.PNG" width="800px" />        


<br/>
<br/>


### 프로젝트를 통해서 어려웠던 점, 배운점

1. Dependency injection

   - API호출과 같은 네트워크 통신, 그 외의 **서비스 로직을 View Layer을 담당하는 React componet와 분리**하여 의존성을 제거한다.

     **(FirebaseInit.js)**

     ```javascript
     import firebase from'firebase/app';
     import 'firebase/database';
     
     const firebaseConfig = {
         apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
         databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
         projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
         appId: process.env.REACT_APP_FIREBASE_APP_ID,
       };
     
     const firebaseApp=firebase.initializeApp(firebaseConfig);
     const firebaseDatabase=firebaseApp.database();
     export default firebaseDatabase;
     ```

     

      **(FirebaseInit.js)**

     ```javascript
     import firebaseDatabase from './firebase';
     class Database{
         write(path,data){
             firebaseDatabase.ref(path).set(data);
         }
     
         remove(path){
             firebaseDatabase.ref(path).remove();
         }
     
         read(path,onUpdate){
             const readDB=firebaseDatabase.ref(path);
             readDB.on('value',(snapshot) => {
                 const data=snapshot.val();
                 data && onUpdate(data);
             });
             return ()=>{readDB.off();}
         }
     }
     export default Database;
     ```

     

     **(FileUpload.js)**

     ```javascript
     class FileUpload{
         async uploadFile(file){
             const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLINT_ID}/auto/upload`;
     
             const formData = new FormData();
             formData.append("file", file);
             formData.append("upload_preset", "zfhffhko");
     
             const response = await fetch(url, {
                 method: "POST",
                 body: formData
             });
             return await response.json();
         }
     }
     export default FileUpload;
     ```

     **(index.js)** 

     `위에서 정의한 서비스 로직의 객체를 생성해서 컴포넌트의 Props로 전달 함으로써 Dependency injection`

     ```javascript
     import React from 'react';
     import ReactDOM from 'react-dom';
     import '@fortawesome/fontawesome-free/js/all.js';
     import './index.css';
     import App from './app';
     import FileUpload from './service/fileUpload';
     import Database from './service/database';
     
     const fileUpload=new FileUpload();
     const database=new Database();
     ReactDOM.render(
       <React.StrictMode>
         <App fileUpload={fileUpload} database={database}/>
       </React.StrictMode>,
       document.getElementById('root')
     );
     ```

   

### Reference

- [React](https://reactjs.org/docs/getting-started.html)
- [Firebase Realtime DB](https://firebase.google.com/docs/database/web/start?hl=ko)
- [Cloudinary](https://cloudinary.com/documentation/image_video_and_file_upload)
- [Draft.js](https://draftjs.org/)
- [Naver Map API](https://www.ncloud.com/product/applicationService/maps)

