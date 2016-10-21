import {NativeModules} from 'react-native';

const {GoogleCast} = NativeModules;

export default {
  startScan: function () {
    GoogleCast.startScan();
  },
  stopScan: function () {
    GoogleCast.stopScan();
  },
  isConnected: function () {
    return GoogleCast.isConnected();
  },
  getDevices: function () {
    return GoogleCast.getDevices();
  },
  connectToDevice: function (deviceId:string) {
    GoogleCast.connectToDevice(deviceId);
  },
  castMedia: function (mediaUrl:string, title:string, imageUrl:string, seconds:number = 0) {
    GoogleCast.castMedia(mediaUrl, title, imageUrl, seconds);
  },
  stopCast: function {
    GoogleCast.stopCast();
  },
  seekCast: function (seconds:number) {
    GoogleCast.seekCast(seconds);
  },
  togglePauseCast: function () {
    GoogleCast.togglePauseCast();
  },
  getStreamPosition: function (){
    return GoogleCast.getStreamPosition();
  },
};