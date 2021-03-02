import React from 'react';
import styles from './map.module.css';
import { RenderAfterNavermapsLoaded,NaverMap,Marker } from 'react-naver-maps';
import Loadmap from './loadmap/loadmap';
import { useEffect, useState } from 'react/cjs/react.development';

const Map = (props) => {
  const [loadmapInfo,setInfo]=useState([]);
  useEffect(async ()=>{
    const loadMap=await loadMapData();
    setInfo(loadMap);
  },[]);

  const loadMapData=()=>{
    return fetch('/Data/map.json')
        .then((response)=>response.json());
  }
  // const [loadmapInfo,setInfo]=useState([
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load1.jpg",
  //     description:`시작을 큰 옥계사거리을 기점으로 시작하겠습니다! 거상빌딩 좌측 차선에서 보시면 아래 사진과 같은 모습이 보이실텐데`,
  //     index:"1",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load2.jpg",
  //     description:`이때 1,2,3 차선을 이용하셔서 좌회전을 하시면됩니다`,
  //     index:"2",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load3.jpg",
  //     description:`좌회전 중`,
  //     index:"3",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load4.jpg",
  //     description:`좌회전 하시고 100m정도 직진하시면 첫신호에서  우회전 할 곳이 보입니다.`,
  //     index:"4",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load5.jpg",
  //     description:`우회전을 위해 4차선으로 옮기어 천천히 우회전 하시면됩니다!`,
  //     index:"5",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load6.jpg",
  //     description:`우회전 중...`,
  //     index:"6",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load7.jpg",
  //     description:`우회전 하시면 좌측엔 롯데리아와 우측엔 큰상가건물이 있습니다. 거기서 2번째 신호받은 곳에서 우회전하실때까지 직진하시면됩니다.`,
  //     index:"7",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load8.jpg",
  //     description:`1번쨰 신호 받은 후 직진 중인 모습입니다. 조금만 더 앞으로 가시면 좌측 베스킨라빈스 / 우측 농협 있는 곳 사거리까지 직진`,
  //     index:"8",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load9.jpg",
  //     description:`이 곳 사거리에서 농협방향으로 우회전 하시면 됩니다.`,
  //     index:"9",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load10.jpg",
  //     description:`우회전 직 후 모습입니다. 여기서 50m정도 직진하시면 좌측 골목으로 들어갈 수있는 도로가 있습니다.`,
  //     index:"10",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load11.jpg",
  //     description:`신호가 따로 없기에 통행에 문제 없으실 때 안전하게 좌회전을 하시면 도착하셨습니다.`,
  //     index:"11",
  //   },
  //   {
  //     img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load12.jpg",
  //     description:`좌회전하시면 바로 간판이 한눈에 보이실겁니다.`,
  //     index:"12",
  //   },
  // ])
    return <section className={styles.mapPage}>
        <h2>오시는길 안내</h2>
        <hr/>
        <p>경상북도 구미시 옥계동 산호대로 31길 12-23 설악본가</p>
        <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID}
          >
        <div className={styles.map}>
            <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
              width: '100%',
              height: '500px',
            }}
            defaultCenter={{ lat: 36.13716774591717, lng: 128.42268427905108 }}
            defaultZoom={20}
            >
                <Marker
                position={{ lat: 36.13716774591717, lng: 128.42268427905108 }}
                />
            </NaverMap>
        </div>
          </RenderAfterNavermapsLoaded>

        <h2>로드맵</h2>
        <hr/>
        <p>저희 본점을 쉽게 찾아오시는 방법에 대해 설명드리겠습니다.</p>
        <div className={styles.horLine}>
          {loadmapInfo.map((info)=>{
            return <Loadmap info={info} key={info.index}></Loadmap>
          })}
        </div>
        <div className={styles.loadend}>
          <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/load13.jpg" alt="loadend"/>
          <p>설악본가 구미본점에 도착하셨습니다. 시원한 냉면과 깊고 진한 맛의 갈비탕으로 맛과 정성을 다하겠습니다</p>
        </div>
    </section>
}

export default Map;