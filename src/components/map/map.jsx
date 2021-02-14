import React from 'react';
import styles from './map.module.css';
import { RenderAfterNavermapsLoaded,NaverMap,Marker } from 'react-naver-maps';

const Map = (props) => {
    return <RenderAfterNavermapsLoaded
    ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID}
  >
    <div className={styles.map}>
        <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '80%',
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
}

export default Map;